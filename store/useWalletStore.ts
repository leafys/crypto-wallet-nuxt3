import Decimal from 'decimal.js';
import { WalletListType } from '@/ts/types/walletListType';

export const useWalletStore = defineStore('wallet', () => {
  const route = useRoute();

  const walletList = ref<WalletListType | null>(null);
  const selectedCurrency = ref<string>('EUR');
  const fiatCurrencies = ref<string[]>([]);

  const filterWalletList = computed((): WalletListType | [] => {
    if (route.query.filter === 'hide') return [];

    if (route.query.filter) {
      return Object.fromEntries(
        Object.entries(walletList.value!).filter(
          (wallet) => wallet[1].type === route.query.filter
        )
      );
    }

    return walletList.value!;
  });

  const totalBalanceCalc = computed((): number => {
    if (filterWalletList.value.length === 0) return 0;

    const localTotalBalance: number = Object.values(filterWalletList.value)
      .map((item) => item[selectedCurrency.value].total)
      .reduce((acc, curr) => acc + curr, 0);

    if (fiatCurrencies.value.includes(selectedCurrency.value)) {
      return Number(new Decimal(localTotalBalance).toFixed(2));
    }

    return localTotalBalance;
  });

  async function getWalletList(): Promise<void> {
    await $fetch<WalletListType>(
      'http://localhost:3000/_nuxt/static/wallet.json'
    )
      .then((data) => useRoundIncomingValues(data))
      .then((data) => (walletList.value = data));
  }

  function onSelectCurrentCurrency(currency: string): void {
    if (currency === selectedCurrency.value) return;

    selectedCurrency.value = currency;
  }

  function getFiatCurrencies(): void {
    for (const item of Object.values(walletList.value!)) {
      if (item.type === 'fiat') {
        fiatCurrencies.value.push(item.currency);
      }
    }
  }

  onMounted(() => {
    getFiatCurrencies();
  });

  return {
    walletList,
    filterWalletList,
    selectedCurrency,
    totalBalanceCalc,
    getWalletList,
    onSelectCurrentCurrency,
  };
});
