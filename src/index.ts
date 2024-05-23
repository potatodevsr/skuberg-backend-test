import express from 'express'
import type { Response, Request, NextFunction } from "express";

import { CryptocurrencyRouter } from '../prisma/generated/express/Cryptocurrency'
import { PrismaClient } from '@prisma/client';
import { CryptoWalletRouter } from '../prisma/generated/express/CryptoWallet';
import { ExternalTransferRouter } from '../prisma/generated/express/ExternalTransfer';
import { FiatCurrencyRouter } from '../prisma/generated/express/FiatCurrency';
import { FiatWalletRouter } from '../prisma/generated/express/FiatWallet';
import { TransferRouter } from '../prisma/generated/express/Transfer';
import { UserRouter } from '../prisma/generated/express/User';

const app = express()

const prisma = new PrismaClient();
const addPrisma = (req: Request, res: Response, next: NextFunction) => {
    req.prisma = prisma
    req.omitOutputValidation = true
    next()
}

const someRouterConfig = {
    findManyMiddleware: [addPrisma],
    findUniqueMiddleware: [addPrisma],
    createMiddleware: [addPrisma],
    updateMiddleware: [addPrisma],
    deleteMiddleware: [addPrisma],
}

app.use('/cryptocurrency', CryptocurrencyRouter(someRouterConfig))
app.use('/crypto-wallet', CryptoWalletRouter(someRouterConfig))
app.use('/external-transfer', ExternalTransferRouter(someRouterConfig))
app.use('/fiat-currency', FiatCurrencyRouter(someRouterConfig))
app.use('/fiat-wallet', FiatWalletRouter(someRouterConfig))
app.use('/transfer', TransferRouter(someRouterConfig))
app.use('/user', UserRouter(someRouterConfig))

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
