
import type { Prisma } from '../../types';
import type { PrismaClient } from '../../types';

import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { ZodTypeAny } from 'zod';

interface AggregateRequest extends Request {
  prisma: PrismaClient;
  query: Partial<Prisma.ExternalTransferAggregateArgs> & ParsedQs;
  outputValidation?: ZodTypeAny;
  omitOutputValidation?: boolean;
}

export type AggregateMiddleware = RequestHandler<ParamsDictionary, any, Partial<Prisma.ExternalTransferAggregateArgs>, Record<string, any>>;

export async function ExternalTransferAggregate(req: AggregateRequest, res: Response, next: NextFunction) {
  try {
    if (!req.outputValidation && !req.omitOutputValidation) {
      throw new Error('Output validation schema or omission flag must be provided.');
    }

    const result = await req.prisma.externalTransfer.aggregate(req.query as Prisma.ExternalTransferAggregateArgs);

    if (!req.omitOutputValidation && req.outputValidation) {
      const validationResult = req.outputValidation.safeParse(result);
      if (validationResult.success) {
        res.status(200).json(validationResult.data);
      } else {
        res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else {
      res.status(200).json(result);
    }
  } catch (error: unknown) {
    console.error("Error in handling aggregation request:", error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
    next(error);
  }
}