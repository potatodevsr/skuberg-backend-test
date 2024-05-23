import { TransactionType, TransferType } from '/Users/potato/skuberg-backend-test/prisma/generated/types';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    username: faker.internet.userName(),
    password: faker.lorem.words(5),
    email: faker.internet.email(),
    fullName: faker.lorem.words(5),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    username: faker.internet.userName(),
    password: faker.lorem.words(5),
    email: faker.internet.email(),
    fullName: faker.lorem.words(5),
    createdAt: new Date(),
  };
}
export function fakeCryptocurrency() {
  return {
    name: faker.person.fullName(),
    symbol: faker.lorem.words(5),
  };
}
export function fakeCryptocurrencyComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    symbol: faker.lorem.words(5),
  };
}
export function fakeFiatCurrency() {
  return {
    name: faker.person.fullName(),
    symbol: faker.lorem.words(5),
  };
}
export function fakeFiatCurrencyComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    symbol: faker.lorem.words(5),
  };
}
export function fakeCryptoWalletComplete() {
  return {
    id: faker.number.int(),
    userId: faker.number.int(),
    cryptoId: faker.number.int(),
    balance: 0,
  };
}
export function fakeFiatWalletComplete() {
  return {
    id: faker.number.int(),
    userId: faker.number.int(),
    fiatId: faker.number.int(),
    balance: 0,
  };
}
export function fakeTransaction() {
  return {
    transactionType: faker.helpers.arrayElement([TransactionType.BUY, TransactionType.SELL] as const),
    amount: faker.number.float(),
    price: faker.number.float(),
  };
}
export function fakeTransactionComplete() {
  return {
    id: faker.number.int(),
    userId: faker.number.int(),
    cryptoId: faker.number.int(),
    fiatId: faker.number.int(),
    transactionType: faker.helpers.arrayElement([TransactionType.BUY, TransactionType.SELL] as const),
    amount: faker.number.float(),
    price: faker.number.float(),
    createdAt: new Date(),
  };
}
export function fakeTransfer() {
  return {
    amount: faker.number.float(),
    transferType: faker.helpers.arrayElement([TransferType.INTERNAL, TransferType.EXTERNAL] as const),
  };
}
export function fakeTransferComplete() {
  return {
    id: faker.number.int(),
    userId: faker.number.int(),
    senderWalletId: faker.number.int(),
    receiverWalletId: faker.number.int(),
    amount: faker.number.float(),
    transferType: faker.helpers.arrayElement([TransferType.INTERNAL, TransferType.EXTERNAL] as const),
    createdAt: new Date(),
  };
}
export function fakeExternalTransfer() {
  return {
    externalAddress: faker.lorem.words(5),
  };
}
export function fakeExternalTransferComplete() {
  return {
    id: faker.number.int(),
    transferId: faker.number.int(),
    externalAddress: faker.lorem.words(5),
    createdAt: new Date(),
  };
}
