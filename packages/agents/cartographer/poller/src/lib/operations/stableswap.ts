import { createLoggingContext, SubgraphQueryByTimestampMetaParams, StableSwapExchange } from "@connext/nxtp-utils";

import { getContext } from "../../shared";

const getMaxTimestamp = (items: any[]): number => {
  return items.length == 0 ? 0 : Math.max(...items.map((item) => item?.timestamp ?? 0));
};

export const updateStableSwap = async () => {
  const {
    adapters: { subgraph, database },
    logger,
    domains,
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext("updateStableSwap");

  const subgraphQueryMetaParams: Map<string, SubgraphQueryByTimestampMetaParams> = new Map();
  const lastestBlockNumbers: Map<string, number> = await subgraph.getLatestBlockNumber(domains);

  await Promise.all(
    domains.map(async (domain) => {
      const pools = await subgraph.getStableSwapPools(domain);
      logger.info("Retrieved stable swap pools", requestContext, methodContext, {
        domain,
        pools: pools,
        count: pools.length,
      });

      if (pools.length) {
        await database.saveStableSwapPool(pools);
      }
    }),
  );

  await Promise.all(
    domains.map(async (domain) => {
      let latestBlockNumber: number | undefined = undefined;
      if (lastestBlockNumbers.has(domain)) {
        latestBlockNumber = lastestBlockNumbers.get(domain)!;
      }

      if (!latestBlockNumber) {
        logger.error("Error getting the latestBlockNumber for domain.", requestContext, methodContext, undefined, {
          domain,
          latestBlockNumber,
          lastestBlockNumbers,
        });
        return;
      }

      // Retrieve the most recent stable swap exchange event we've saved for this domain.
      const latestTimestamp = await database.getCheckPoint("stableswap_exchange_timestamp_" + domain);
      subgraphQueryMetaParams.set(domain, {
        maxBlockNumber: latestBlockNumber,
        fromTimestamp: latestTimestamp,
        orderDirection: "asc",
      });
    }),
  );

  if (subgraphQueryMetaParams.size > 0) {
    // Get stableswap exchanges for all domains in the mapping.
    const exchanges = await subgraph.getStableSwapExchangeByDomainAndTimestamp(subgraphQueryMetaParams);
    exchanges.forEach((exchange) => {
      const { requestContext: _requestContext, methodContext: _methodContext } = createLoggingContext(
        "updateStableSwap",
        undefined,
        exchange.id,
      );
      logger.info("Retrieved stableswap exchange event", _requestContext, _methodContext, { exchange });
    });
    const checkpoints = domains
      .map((domain) => {
        const domainExchanges = exchanges.filter((exchange) => exchange.domain === domain);
        const max = getMaxTimestamp(domainExchanges);
        const latest = subgraphQueryMetaParams.get(domain)?.fromTimestamp ?? 0;
        if (domainExchanges.length > 0 && max > latest) {
          return { domain, checkpoint: max };
        }
        return undefined;
      })
      .filter((x) => !!x) as { domain: string; checkpoint: number }[];

    await database.saveStableSwapExchange(exchanges);
    for (const checkpoint of checkpoints) {
      await database.saveCheckPoint("stableswap_exchange_timestamp_" + checkpoint.domain, checkpoint.checkpoint);
    }
  }
};

export const updatePoolEvents = async () => {
  const {
    adapters: { subgraph, database },
    logger,
    domains,
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext("updatePoolEvents");

  const subgraphQueryMetaParams: Map<string, SubgraphQueryByTimestampMetaParams> = new Map();
  const lastestBlockNumbers: Map<string, number> = await subgraph.getLatestBlockNumber(domains);

  await Promise.all(
    domains.map(async (domain) => {
      let latestBlockNumber: number | undefined = undefined;
      if (lastestBlockNumbers.has(domain)) {
        latestBlockNumber = lastestBlockNumbers.get(domain)!;
      }

      if (!latestBlockNumber) {
        logger.error("Error getting the latestBlockNumber for domain.", requestContext, methodContext, undefined, {
          domain,
          latestBlockNumber,
          lastestBlockNumbers,
        });
        return;
      }

      // Retrieve the most recent stable swap exchange event we've saved for this domain.
      const latestTimestamp = await database.getCheckPoint("stableswap_pool_events_timestamp_" + domain);
      subgraphQueryMetaParams.set(domain, {
        maxBlockNumber: latestBlockNumber,
        fromTimestamp: latestTimestamp,
        orderDirection: "asc",
      });
    }),
  );

  if (subgraphQueryMetaParams.size > 0) {
    // Get stableswap pool events for all domains in the mapping.
    const events = await subgraph.getStableSwapPoolEventsByDomainAndTimestamp(subgraphQueryMetaParams);
    events.forEach((event) => {
      const { requestContext: _requestContext, methodContext: _methodContext } = createLoggingContext(
        "updatePoolEvents",
        undefined,
        event.id,
      );
      logger.info("Retrieved stableswap pool event", _requestContext, _methodContext, { event });
    });
    const checkpoints = domains
      .map((domain) => {
        const domainEvents = events.filter((event) => event.domain === domain);
        const max = getMaxTimestamp(domainEvents);
        const latest = subgraphQueryMetaParams.get(domain)?.fromTimestamp ?? 0;
        if (domainEvents.length > 0 && max > latest) {
          return { domain, checkpoint: max };
        }
        return undefined;
      })
      .filter((x) => !!x) as { domain: string; checkpoint: number }[];

    await database.saveStableSwapPoolEvent(events);
    for (const checkpoint of checkpoints) {
      await database.saveCheckPoint("stableswap_pool_events_timestamp_" + checkpoint.domain, checkpoint.checkpoint);
    }
  }
};
