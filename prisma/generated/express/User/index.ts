
import express, { RequestHandler } from 'express';
import { UserFindFirst } from './UserFindFirst';
import { UserFindMany } from './UserFindMany';
import { UserFindUnique } from './UserFindUnique';
import { UserCreate } from './UserCreate';
import { UserCreateMany } from './UserCreateMany';
import { UserUpdate } from './UserUpdate';
import { UserUpdateMany } from './UserUpdateMany';
import { UserUpsert } from './UserUpsert';
import { UserDelete } from './UserDelete';
import { UserDeleteMany } from './UserDeleteMany';
import { UserAggregate } from './UserAggregate';
import { UserCount } from './UserCount';
import { UserGroupBy } from './UserGroupBy';
import { RouteConfig } from "../RouteConfig";

const defaultBeforeAfter = {
  before: [] as RequestHandler[],
  after: [] as RequestHandler[],
};

/**
 * Generates an Express router for User model.
 * @param config Contains optional middleware to enable routes.
 * @returns {express.Router}
 */
export function UserRouter(config: RouteConfig<RequestHandler>) {
  const router = express.Router();
  const basePath = config.addModelPrefix ? '/user' : '';

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
    setupRoute('/first', 'get', before, UserFindFirst as RequestHandler);
    if (after.length) {
      router.use(basePath + '/first', ...after);
    }
  }

  if (config.enableAll || config?.findMany) {
    const { before = [], after = [] } = config.findMany || defaultBeforeAfter;
    setupRoute('/', 'get', before, UserFindMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.findUnique) {
    const { before = [], after = [] } = config.findUnique || defaultBeforeAfter;
    setupRoute('/:id', 'get', before, UserFindUnique as any);
    if (after.length) {
      router.use(basePath + '/:id', ...after);
    }
  }

  if (config.enableAll || config?.create) {
    const { before = [], after = [] } = config.create || defaultBeforeAfter;
    setupRoute('/', 'post', before, UserCreate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.createMany) {
    const { before = [], after = [] } = config.createMany || defaultBeforeAfter;
    setupRoute('/many', 'post', before, UserCreateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.update) {
    const { before = [], after = [] } = config.update || defaultBeforeAfter;
    setupRoute('/', 'put', before, UserUpdate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.updateMany) {
    const { before = [], after = [] } = config.updateMany || defaultBeforeAfter;
    setupRoute('/many', 'put', before, UserUpdateMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.upsert) {
    const { before = [], after = [] } = config.upsert || defaultBeforeAfter;
    setupRoute('/', 'patch', before, UserUpsert as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.delete) {
    const { before = [], after = [] } = config.delete || defaultBeforeAfter;
    setupRoute('/', 'delete', before, UserDelete as RequestHandler);
    if (after.length) {
      router.use(basePath + '/', ...after);
    }
  }

  if (config.enableAll || config?.deleteMany) {
    const { before = [], after = [] } = config.deleteMany || defaultBeforeAfter;
    setupRoute('/many', 'delete', before, UserDeleteMany as RequestHandler);
    if (after.length) {
      router.use(basePath + '/many', ...after);
    }
  }

  if (config.enableAll || config?.aggregate) {
    const { before = [], after = [] } = config.aggregate || defaultBeforeAfter;
    setupRoute('/aggregate', 'get', before, UserAggregate as RequestHandler);
    if (after.length) {
      router.use(basePath + '/aggregate', ...after);
    }
  }

  if (config.enableAll || config?.count) {
    const { before = [], after = [] } = config.count || defaultBeforeAfter;
    setupRoute('/count', 'get', before, UserCount as RequestHandler);
    if (after.length) {
      router.use(basePath + '/count', ...after);
    }
  }

  if (config.enableAll || config?.groupBy) {
    const { before = [], after = [] } = config.groupBy || defaultBeforeAfter;
    setupRoute('/groupby', 'get', before, UserGroupBy as RequestHandler);
    if (after.length) {
      router.use(basePath + '/groupby', ...after);
    }
  }

  return router;
}
