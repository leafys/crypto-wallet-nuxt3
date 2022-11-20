<template>
  <div
    class="font-raleway text-white flex items-center justify-between gap-5 flex-wrap sm:justify-center"
  >
    <div class="flex flex-col gap-3">
      <div class="flex gap-2 items-center sm:justify-center">
        <div
          class="bg-blue w-[26px] h-[26px] flex items-center justify-center bg-opacity-[0.06] relative"
        >
          <div
            class="shadow-wallet-elips w-[18px] h-[18px] absolute bg-blue rounded-[50%]"
          >
            <component
              class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]"
              :is="correctCurrency?.icon"
            />
          </div>
        </div>
        <span>{{ correctCurrency?.fullTitle }}</span>
        <span class="text-gray">({{ currencyData.currency }})</span>
      </div>

      <div class="flex gap-3">
        <button
          class="py-2 px-8 max-w-[130px] text-xs font-bold w-full bg-blue bg-opacity-[0.2] rounded-sm text-blue uppercase"
        >
          withdraw
        </button>
        <button
          class="py-2 px-8 shadow-neon-blue max-w-[130px] text-xs font-bold w-full text-blue-dark rounded-sm bg-blue uppercase"
        >
          deposit
        </button>
      </div>
    </div>

    <div
      class="flex flex-col font-roboto font-normal text-sm max-w-[130px] w-full leading-4 gap-2 sm:text-center"
    >
      <span>Всего: {{ infoAboutBalance.total }}</span>
      <span>В заявках: {{ infoAboutBalance.reserved }}</span>
      <span class="text-blue"
        >{{ balanceFromSelectedCurrency }} {{ store.selectedCurrency }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'WalletMain' };
</script>

<script setup lang="ts">
import { correctCurrencyData } from '../../ts/index';
import { useWalletStore } from '@/store/useWalletStore';

type CurrencyDataType = {
  currency: string;
  type: string;
  id: number;
} & {
  [key: string]: {
    total: number;
    reserved: number;
  };
};

interface IProps {
  currencyData: CurrencyDataType;
  currentCurrency: string;
}

const props = defineProps<IProps>();
const store = useWalletStore();

const correctCurrency = computed(() => {
  return correctCurrencyData.find(
    (item) => item.shortTitle === props.currentCurrency
  );
});

const infoAboutBalance = computed(() => {
  return props.currencyData[props.currentCurrency];
});

const balanceFromSelectedCurrency = computed(() => {
  return props.currencyData[store.selectedCurrency].total;
});
</script>
