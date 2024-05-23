
import type { Prisma, ExternalTransfer } from '../../types';
import type { PrismaClient } from '../../types';

import { Request, Response, NextFunction } from 'express'
import {
  RequestHandler,
  ParamsDictionary,
} from 'express-serve-static-core' 
import { ParsedQs } from 'qs';
import { ZodTypeAny } from 'zod';

export interface FindUniqueRequest extends Request {
  prisma: PrismaClient;
  query: Prisma.ExternalTransferFindUniqueArgs & ParsedQs;
  outputValidation?: ZodTypeAny;
  omitOutputValidation?: boolean;
  passToNext?: boolean;
  locals: {
    data?: ExternalTransfer | null
  }
}
export type FindUniqueMiddleware = RequestHandler<ParamsDictionary, any, any, Prisma.ExternalTransferFindUniqueArgs & ParsedQs, Record<string, any>>

export async function ExternalTransferFindUnique(req: FindUniqueRequest, res: Response, next: NextFunction) {
  try {
    if (!req.outputValidation && !req.omitOutputValidation) {
      throw new Error('Output validation schema or omission flag must be provided.');
    }

    const data = await req.prisma.externalTransfer.findUnique(req.query as Prisma.ExternalTransferFindUniqueArgs);
    if (req.passToNext) {
      req.locals.data = data;
      next();
    } else if (!req.omitOutputValidation && req.outputValidation) {
      const validationResult = req.outputValidation.safeParse(data);
      if (validationResult.success) {
        res.status(200).json(validationResult.data);
      } else {
        res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else if (!req.omitOutputValidation) {
      throw new Error('Output validation schema must be provided unless explicitly omitted. Attach omitOutputValidation = true to request to suppress this error.');
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error('Error in handling request:', error);
    res.status(500).json({ error: error.message });
    next(error);
  }
}