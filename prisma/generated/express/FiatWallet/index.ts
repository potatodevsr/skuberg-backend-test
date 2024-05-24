
import express, { RequestHandler } from 'express';
import { FiatWalletFindFirst } from './FiatWalletFindFirst';
import { FiatWalletFindMany } from './FiatWalletFindMany';
import { FiatWalletFindUnique } from './FiatWalletFindUnique';
import { FiatWalletCreate } from './FiatWalletCreate';
import { FiatWalletCreateMany } from './FiatWalletCreateMany';
import { FiatWalletUpdate } from './FiatWalletUpdate';
import { FiatWalletUpdateMany } from './FiatWalletUpdateMany';
import { FiatWalletUpsert } from './FiatWalletUpsert';
import { FiatWalletDelete } from './FiatWalletDelete';
import { FiatWalletDeleteMany } from './FiatWalletDeleteMany';
import { FiatWalletAggregate } from './FiatWalletAggregate';
import { FiatWalletCount } from './FiatWalletCount';
import { FiatWalletGroupBy } from './FiatWalletGroupBy';
import { RouteConfig } from "../RouteConfig";

const defaultBeforeAfter = {
  before: [] as RequestHandler[],
  after: [] as RequestHandler[],
};

/**
 * Generates an Express router for FiatWallet model.
 * @param config Contains optional middleware to enable routes.
 * @returns {express.Router}
 */
export function FiatWalletRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router();
  const basePath = config.addModelPrefix ? '/fiatwallet' : '';

  const setupRoute = (
    path: string,
    method: "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head",
    middlewares: RequestHandler[],
    handler: RequestHandler
  ) => {
    router[method](basePath + path, ...middlewares, handler);
  };

  if (config.enableAll || config?.findFirst) {
    const { before = [], after = [] } = config.findFirst || defaultBeforeAfter;
    setupRoute('/first', 'get', before, FiatWalletFindFirst as RequestHandler);
    if (after.length) {
      router.use(basePath + '/first', ...after);
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [] } = config.findMany || defaultBeforeAfter;
    setupRoute('/', 'get', before, FiatWalletFindMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [] } = config.findUnique || defaultBeforeAfter;
    setupRoute('/:id', 'get', before, FiatWalletFindUnique as any);
    if (after.length) {
      router.use(basePath + '/:id', ...after);
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [] } = config.create || defaultBeforeAfter;
    setupRoute('/', 'post', before, FiatWalletCreate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [] } = config.createMany || defaultBeforeAfter;
    setupRoute('/many', 'post', before, FiatWalletCreateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [] } = config.update || defaultBeforeAfter;
    setupRoute('/', 'put', before, FiatWalletUpdate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [] } = config.updateMany || defaultBeforeAfter;
    setupRoute('/many', 'put', before, FiatWalletUpdateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [] } = config.upsert || defaultBeforeAfter;
    setupRoute('/', 'patch', before, FiatWalletUpsert as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [] } = config.delete || defaultBeforeAfter;
    setupRoute('/', 'delete', before, FiatWalletDelete as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [] } = config.deleteMany || defaultBeforeAfter;
    setupRoute('/many', 'delete', before, FiatWalletDeleteMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [] } = config.aggregate || defaultBeforeAfter;
    setupRoute('/aggregate', 'get', before, FiatWalletAggregate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/aggregate', ...after);
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [] } = config.count || defaultBeforeAfter;
    setupRoute('/count', 'get', before, FiatWalletCount as RequestHandler);
    if (after.length) {
      router.use(basePath + '/count', ...after);
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [] } = config.groupBy || defaultBeforeAfter;
    setupRoute('/groupby', 'get', before, FiatWalletGroupBy as RequestHandler);
    if (after.length) {
      router.use(basePath + '/groupby', ...after);
    }
  }

  return router;
}
