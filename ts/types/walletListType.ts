export type WalletListType = {
  [key: string]: {
    [key: string]: {
      total: number;
      reserved: number;
    };
  } & {
    currency: string;
    type: string;
    id: number;
  };
};
