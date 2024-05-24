
import express, { RequestHandler } from 'express';
import { ExternalTransferFindFirst } from './ExternalTransferFindFirst';
import { ExternalTransferFindMany } from './ExternalTransferFindMany';
import { ExternalTransferFindUnique } from './ExternalTransferFindUnique';
import { ExternalTransferCreate } from './ExternalTransferCreate';
import { ExternalTransferCreateMany } from './ExternalTransferCreateMany';
import { ExternalTransferUpdate } from './ExternalTransferUpdate';
import { ExternalTransferUpdateMany } from './ExternalTransferUpdateMany';
import { ExternalTransferUpsert } from './ExternalTransferUpsert';
import { ExternalTransferDelete } from './ExternalTransferDelete';
import { ExternalTransferDeleteMany } from './ExternalTransferDeleteMany';
import { ExternalTransferAggregate } from './ExternalTransferAggregate';
import { ExternalTransferCount } from './ExternalTransferCount';
import { ExternalTransferGroupBy } from './ExternalTransferGroupBy';
import { RouteConfig } from "../RouteConfig";

const defaultBeforeAfter = {
  before: [] as RequestHandler[],
  after: [] as RequestHandler[],
};

/**
 * Generates an Express router for ExternalTransfer model.
 * @param config Contains optional middleware to enable routes.
 * @returns {express.Router}
 */
export function ExternalTransferRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router();
  const basePath = config.addModelPrefix ? '/externaltransfer' : '';

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
    setupRoute('/first', 'get', before, ExternalTransferFindFirst as RequestHandler);
    if (after.length) {
      router.use(basePath + '/first', ...after);
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [] } = config.findMany || defaultBeforeAfter;
    setupRoute('/', 'get', before, ExternalTransferFindMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [] } = config.findUnique || defaultBeforeAfter;
    setupRoute('/:id', 'get', before, ExternalTransferFindUnique as any);
    if (after.length) {
      router.use(basePath + '/:id', ...after);
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [] } = config.create || defaultBeforeAfter;
    setupRoute('/', 'post', before, ExternalTransferCreate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [] } = config.createMany || defaultBeforeAfter;
    setupRoute('/many', 'post', before, ExternalTransferCreateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [] } = config.update || defaultBeforeAfter;
    setupRoute('/', 'put', before, ExternalTransferUpdate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [] } = config.updateMany || defaultBeforeAfter;
    setupRoute('/many', 'put', before, ExternalTransferUpdateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [] } = config.upsert || defaultBeforeAfter;
    setupRoute('/', 'patch', before, ExternalTransferUpsert as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [] } = config.delete || defaultBeforeAfter;
    setupRoute('/', 'delete', before, ExternalTransferDelete as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [] } = config.deleteMany || defaultBeforeAfter;
    setupRoute('/many', 'delete', before, ExternalTransferDeleteMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [] } = config.aggregate || defaultBeforeAfter;
    setupRoute('/aggregate', 'get', before, ExternalTransferAggregate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/aggregate', ...after);
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [] } = config.count || defaultBeforeAfter;
    setupRoute('/count', 'get', before, ExternalTransferCount as RequestHandler);
    if (after.length) {
      router.use(basePath + '/count', ...after);
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [] } = config.groupBy || defaultBeforeAfter;
    setupRoute('/groupby', 'get', before, ExternalTransferGroupBy as RequestHandler);
    if (after.length) {
      router.use(basePath + '/groupby', ...after);
    }
  }

  return router;
}
