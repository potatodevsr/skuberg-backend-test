import { PrismaClient } from '@prisma/client';

import {
  fakeUser,
  fakeCryptocurrency,
  fakeFiatCurrency,
  fakeCryptoWalletComplete,
  fakeFiatWalletComplete,
  fakeTransaction,
  fakeTransfer,
  fakeExternalTransfer,
} from '../prisma/generated/fake-data';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
const cryptoNames = [
  'BTC', 'ETH', 'LTC', 'XRP', 'BCH', 'ADA', 'DOT', 'LINK', 'BNB', 'USDT',
  'DOGE', 'XLM', 'TRX', 'EOS', 'XTZ', 'ATOM', 'NEO', 'VET', 'MKR', 'DAI'
];

async function main(seedVolume: number) {
  for (let i = 0; i < seedVolume; i++) {
    // Create User
    const user = await prisma.user.create({
      data: { ...fakeUser(), fullName: faker.person.fullName(), password: faker.internet.password() },
    });

    // Create Cryptocurrency
    const crypto = faker.helpers.arrayElement(cryptoNames)
    const cryptocurrency = await prisma.cryptocurrency.create({
      data: {
        ...fakeCryptocurrency(),
        name: crypto,
        symbol: crypto + i,
      },
    });

    // Create FiatCurrency
    const fiat = faker.finance.currency()
    const data = { ...fakeFiatCurrency(), name: fiat.code, symbol: fiat.symbol + i }

    const fiatCurrency = await prisma.fiatCurrency.create({
      data,
    });

    // Create CryptoWallet
    const cryptoWallet = await prisma.cryptoWallet.create({
      data: {
        ...fakeCryptoWalletComplete(),
        balance: faker.number.int({ min: 10, max: 100000 }),
        id: undefined,
        userId: user.id,
        cryptoId: cryptocurrency.id,
      },
    });

    // Create FiatWallet
    const fiatWallet = await prisma.fiatWallet.create({
      data: {
        ...fakeFiatWalletComplete(),
        balance: faker.number.int({ min: 10, max: 100000 }),
        id: undefined,
        userId: user.id,
        fiatId: fiatCurrency.id,
      },
    });

    // Create Transaction
    const transaction = await prisma.transaction.create({
      data: {
        ...fakeTransaction(),
        userId: user.id,
        cryptoId: cryptocurrency.id,
        fiatId: fiatCurrency.id,
      },
    });

    // Create Transfer
    const transfer = await prisma.transfer.create({
      data: {
        ...fakeTransfer(),
        userId: user.id,
        senderWalletId: cryptoWallet.id,
        receiverWalletId: fiatWallet.id,
      },
    });

    // Create ExternalTransfer
    const externalTransfer = await prisma.externalTransfer.create({
      data: {
        ...fakeExternalTransfer(),
        externalAddress: faker.finance.ethereumAddress(),
        transferId: transfer.id,
      },
    });

    console.log(`Seeded ${i + 1} of ${seedVolume}...`);
  }
}

main(10)  // Replace 10 with any desired seed volume
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
