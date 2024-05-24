import express, { json } from 'express'
// import type { Response, Request, NextFunction } from "express";
import type { Response, Request, NextFunction, RequestHandler } from 'express'

import { CryptocurrencyRouter } from '../prisma/generated/express/Cryptocurrency'
import { PrismaClient } from '@prisma/client';
import { CryptoWalletRouter } from '../prisma/generated/express/CryptoWallet';
import { ExternalTransferRouter } from '../prisma/generated/express/ExternalTransfer';
import { FiatCurrencyRouter } from '../prisma/generated/express/FiatCurrency';
import { FiatWalletRouter } from '../prisma/generated/express/FiatWallet';
import { TransferRouter } from '../prisma/generated/express/Transfer';
import { UserRouter } from '../prisma/generated/express/User';
import RouteConfig from '../prisma/generated/express/RouteConfig';
import { TransactionRouter } from '../prisma/generated/express/Transaction';

const app = express()

const prisma = new PrismaClient();
const addPrisma = (req: Request, res: Response, next: NextFunction) => {
    req.prisma = prisma
    req.omitOutputValidation = true
    next()
}
const config = {
    addModelPrefix: true,
    enableAll: true,
} as RouteConfig<RequestHandler>
app.use(json())
app.use(addPrisma)
app.use(CryptocurrencyRouter(config))
app.use(CryptoWalletRouter(config))
app.use(ExternalTransferRouter(config))
app.use(FiatCurrencyRouter(config))
app.use(FiatWalletRouter(config))
app.use(TransferRouter(config))
app.use(UserRouter(config))
app.use(TransactionRouter(config))

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
