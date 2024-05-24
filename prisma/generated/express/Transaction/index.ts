
import express, { RequestHandler } from 'express';
import { TransactionFindFirst } from './TransactionFindFirst';
import { TransactionFindMany } from './TransactionFindMany';
import { TransactionFindUnique } from './TransactionFindUnique';
import { TransactionCreate } from './TransactionCreate';
import { TransactionCreateMany } from './TransactionCreateMany';
import { TransactionUpdate } from './TransactionUpdate';
import { TransactionUpdateMany } from './TransactionUpdateMany';
import { TransactionUpsert } from './TransactionUpsert';
import { TransactionDelete } from './TransactionDelete';
import { TransactionDeleteMany } from './TransactionDeleteMany';
import { TransactionAggregate } from './TransactionAggregate';
import { TransactionCount } from './TransactionCount';
import { TransactionGroupBy } from './TransactionGroupBy';
import { RouteConfig } from "../RouteConfig";

const defaultBeforeAfter = {
  before: [] as RequestHandler[],
  after: [] as RequestHandler[],
};

/**
 * Generates an Express router for Transaction model.
 * @param config Contains optional middleware to enable routes.
 * @returns {express.Router}
 */
export function TransactionRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router();
  const basePath = config.addModelPrefix ? '/transaction' : '';

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
    setupRoute('/first', 'get', before, TransactionFindFirst as RequestHandler);
    if (after.length) {
      router.use(basePath + '/first', ...after);
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [] } = config.findMany || defaultBeforeAfter;
    setupRoute('/', 'get', before, TransactionFindMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [] } = config.findUnique || defaultBeforeAfter;
    setupRoute('/:id', 'get', before, TransactionFindUnique as any);
    if (after.length) {
      router.use(basePath + '/:id', ...after);
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [] } = config.create || defaultBeforeAfter;
    setupRoute('/', 'post', before, TransactionCreate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [] } = config.createMany || defaultBeforeAfter;
    setupRoute('/many', 'post', before, TransactionCreateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [] } = config.update || defaultBeforeAfter;
    setupRoute('/', 'put', before, TransactionUpdate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [] } = config.updateMany || defaultBeforeAfter;
    setupRoute('/many', 'put', before, TransactionUpdateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [] } = config.upsert || defaultBeforeAfter;
    setupRoute('/', 'patch', before, TransactionUpsert as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [] } = config.delete || defaultBeforeAfter;
    setupRoute('/', 'delete', before, TransactionDelete as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [] } = config.deleteMany || defaultBeforeAfter;
    setupRoute('/many', 'delete', before, TransactionDeleteMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [] } = config.aggregate || defaultBeforeAfter;
    setupRoute('/aggregate', 'get', before, TransactionAggregate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/aggregate', ...after);
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [] } = config.count || defaultBeforeAfter;
    setupRoute('/count', 'get', before, TransactionCount as RequestHandler);
    if (after.length) {
      router.use(basePath + '/count', ...after);
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [] } = config.groupBy || defaultBeforeAfter;
    setupRoute('/groupby', 'get', before, TransactionGroupBy as RequestHandler);
    if (after.length) {
      router.use(basePath + '/groupby', ...after);
    }
  }

  return router;
}
