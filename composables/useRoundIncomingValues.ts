import Decimal from 'decimal.js';
import { WalletListType } from '@/ts/types/walletListType';

export const useRoundIncomingValues = (
  data: WalletListType
): WalletListType => {
  const fiatArr: string[] = [];
  const cryptoArr: string[] = [];

  for (const item of Object.values(data)) {
    if (item.type === 'fiat') {
      fiatArr.push(item.currency);
    }

    if (item.type === 'crypto') {
      cryptoArr.push(item.currency);
    }
  }

  for (const item of Object.values(data)) {
    for (const key of Object.keys(item)) {
      const total = item[key].total;
      const reserved = item[key].reserved;

      if (fiatArr.includes(key)) {
        item[key].total = Number(new Decimal(total).toFixed(2));
        item[key].reserved = Number(new Decimal(reserved).toFixed(2));
      }
      if (cryptoArr.includes(key)) {
        item[key].total = Number(new Decimal(total).toFixed(6));
        item[key].reserved = Number(new Decimal(reserved).toFixed(6));
      }
    }
  }

  return data;
};
