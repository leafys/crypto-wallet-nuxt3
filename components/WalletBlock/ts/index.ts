import Usd from '@/components/icons/Usd.vue';
import Euro from '@/components/icons/Euro.vue';
import Eth from '@/components/icons/Eth.vue';
import Btc from '@/components/icons/Btc.vue';

interface ICorrectCurrencyData {
  fullTitle: string;
  shortTitle: string;
  icon: unknown;
}

export const correctCurrencyData: ICorrectCurrencyData[] = [
  { fullTitle: 'Dollar', shortTitle: 'USD', icon: Usd },
  { fullTitle: 'Euro', shortTitle: 'EUR', icon: Euro },
  { fullTitle: 'Bitcoin', shortTitle: 'BTC', icon: Eth },
  { fullTitle: 'Ethereum', shortTitle: 'ETH', icon: Btc },
];
