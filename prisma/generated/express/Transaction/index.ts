
import express, { RequestHandler } from 'express';
import { TransactionFindFirst, type FindFirstMiddleware } from './TransactionFindFirst';
import { TransactionFindMany, type FindManyMiddleware } from './TransactionFindMany';
import { TransactionFindUnique, type FindUniqueMiddleware } from './TransactionFindUnique';
import { TransactionCreate, type CreateMiddleware } from './TransactionCreate';
import { TransactionCreateMany, type CreateManyMiddleware } from './TransactionCreateMany';
import { TransactionUpdate, type UpdateMiddleware } from './TransactionUpdate';
import { TransactionUpdateMany, type UpdateManyMiddleware } from './TransactionUpdateMany';
import { TransactionUpsert, type UpsertMiddleware } from './TransactionUpsert';
import { TransactionDelete, type DeleteMiddleware } from './TransactionDelete';
import { TransactionDeleteMany, type DeleteManyMiddleware } from './TransactionDeleteMany';
import { TransactionAggregate, type AggregateMiddleware } from './TransactionAggregate';
import { TransactionCount, type CountMiddleware } from './TransactionCount';
import { TransactionGroupBy, type GroupByMiddleware } from './TransactionGroupBy';

interface RouteConfig {
  findFirstMiddleware?: FindFirstMiddleware[]
  findFirstNextMiddleware?: RequestHandler[]

  findManyMiddleware?: FindManyMiddleware[]
  findManyNextMiddleware?: RequestHandler[]
  
  findUniqueMiddleware?: FindUniqueMiddleware[]
  findUniqueNextMiddleware?: RequestHandler[]

  createMiddleware?: CreateMiddleware[]
  createNextMiddleware?: RequestHandler[]

  createManyMiddleware?: CreateManyMiddleware[]
  createManyNextMiddleware?: RequestHandler[]

  updateMiddleware?: UpdateMiddleware[]
  updateNextMiddleware?: RequestHandler[]

  updateManyMiddleware?: UpdateManyMiddleware[]
  updateManyNextMiddleware?: RequestHandler[]

  upsertMiddleware?: UpsertMiddleware[]
  upsertNextMiddleware?: RequestHandler[]

  deleteMiddleware?: DeleteMiddleware[]
  deleteNextMiddleware?: RequestHandler[]

  deleteManyMiddleware?: DeleteManyMiddleware[]
  deleteManyNextMiddleware?: RequestHandler[]

  aggregateMiddleware?: AggregateMiddleware[]
  aggregateNextMiddleware?: RequestHandler[]

  countMiddleware?: CountMiddleware[]
  countNextMiddleware?: RequestHandler[]

  groupByMiddleware?: GroupByMiddleware[]
  groupByNextMiddleware?: RequestHandler[]
}

/**
 * Generates an Express router for Transaction model.
 * @param config Contains optional middleware to enable routes.
 * @returns {express.Router}
 */
export function TransactionRouter(config: RouteConfig) {
  const router = express.Router();
  
  if (config?.findFirstMiddleware && config?.findFirstMiddleware.length) {
    const middlewares = [...config.findFirstMiddleware, TransactionFindFirst]
    if (config.findFirstNextMiddleware) {
      middlewares.push(...config.findFirstNextMiddleware);
    }
    router.get('/first', ...middlewares as FindFirstMiddleware[]);
  }

  if (config?.findManyMiddleware && config?.findManyMiddleware.length) {
    const middlewares = [...config.findManyMiddleware, TransactionFindMany]
    if (config.findManyNextMiddleware) {
      middlewares.push(...config.findManyNextMiddleware);
    }
    router.get('/', ...middlewares as FindManyMiddleware[]);
  }

  if (config?.findUniqueMiddleware && config?.findUniqueMiddleware.length) {
    const middlewares = [...config.findUniqueMiddleware, TransactionFindUnique]
    if (config.findUniqueNextMiddleware) {
      middlewares.push(...config.findUniqueNextMiddleware);
    }
    router.get('/:id', ...middlewares as FindUniqueMiddleware[]);
  }

  if (config?.createMiddleware && config?.createMiddleware.length) {
    const middlewares = [...config.createMiddleware, TransactionCreate]
    if (config.createNextMiddleware) {
      middlewares.push(...config.createNextMiddleware);
    }
    router.post('/', ...middlewares as CreateMiddleware[]);
  }

  if (config?.createManyMiddleware && config?.createManyMiddleware.length) {
    const middlewares = [...config.createManyMiddleware, TransactionCreateMany]
    if (config.createManyNextMiddleware) {
      middlewares.push(...config.createManyNextMiddleware);
    }
    router.post('/many', ...middlewares as CreateManyMiddleware[]);
  }

  if (config?.updateMiddleware && config?.updateMiddleware.length) {
    const middlewares = [...config.updateMiddleware, TransactionUpdate]
    if (config.updateNextMiddleware) {
      middlewares.push(...config.updateNextMiddleware);
    }
    router.put('/', ...middlewares as UpdateMiddleware[]);
  }

  if (config?.updateManyMiddleware && config?.updateManyMiddleware.length) {
    const middlewares = [...config.updateManyMiddleware, TransactionUpdateMany]
    if (config.updateManyNextMiddleware) {
      middlewares.push(...config.updateManyNextMiddleware);
    }
    router.put('/many', ...middlewares as UpdateManyMiddleware[]);
  }

  if (config?.upsertMiddleware && config?.upsertMiddleware.length) {
    const middlewares = [...config.upsertMiddleware, TransactionUpsert]
    if (config.upsertNextMiddleware) {
      middlewares.push(...config.upsertNextMiddleware);
    }
    router.patch('/', ...middlewares as UpsertMiddleware[]);
  }

  if (config?.deleteMiddleware && config?.deleteMiddleware.length) {
    const middlewares = [...config.deleteMiddleware, TransactionDelete]
    if (config.deleteNextMiddleware) {
      middlewares.push(...config.deleteNextMiddleware);
    }
    router.delete('/', ...middlewares as DeleteMiddleware[]);
  }

  if (config?.deleteManyMiddleware && config?.deleteManyMiddleware.length) {
    const middlewares = [...config.deleteManyMiddleware, TransactionDeleteMany]
    if (config.deleteManyNextMiddleware) {
      middlewares.push(...config.deleteManyNextMiddleware);
    }
    router.delete('/many', ...middlewares as DeleteManyMiddleware[]);
  }

  if (config?.aggregateMiddleware && config?.aggregateMiddleware.length) {
    const middlewares = [...config.aggregateMiddleware, TransactionAggregate]
    if (config.aggregateNextMiddleware) {
      middlewares.push(...config.aggregateNextMiddleware);
    }
    router.get('/aggregate', ...middlewares as AggregateMiddleware[]);
  }

  if (config?.countMiddleware && config?.countMiddleware.length) {
    const middlewares = [...config.countMiddleware, TransactionCount]
    if (config.countNextMiddleware) {
      middlewares.push(...config.countNextMiddleware);
    }
    router.get('/count', ...middlewares as CountMiddleware[]);
  }

  if (config?.groupByMiddleware && config?.groupByMiddleware.length) {
    const middlewares = [...config.groupByMiddleware, TransactionGroupBy]
    if (config.groupByNextMiddleware) {
      middlewares.push(...config.groupByNextMiddleware);
    }
    router.get('/groupby', ...middlewares as GroupByMiddleware[]);
  }

  return router;
}
