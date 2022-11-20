<template>
  <div class="bg-contrast-blue rounded-b p-5 pt-0">
    <div
      class="max-w-[600px] mx-auto w-full bg-blue bg-opacity-[0.06] h-[60px] rounded-sm flex flex-col justify-center items-center"
    >
      <div
        class="flex gap-2 text-blue font-roboto text-lg items-center relative"
      >
        <span>{{ store.totalBalanceCalc }}</span>
        <span>{{ store.selectedCurrency }}</span>
        <i
          @click.stop="selectedBalanceisOpen = !selectedBalanceisOpen"
          class="w-0 h-0 border-[4px] rotate-[135deg] border-b-transparent border-l-transparent cursor-pointer top-[6px] right-[-15px] transition-transform select-none"
          :class="{ 'rotate-[-45deg]': selectedBalanceisOpen }"
        />

        <Transition>
          <div
            v-if="selectedBalanceisOpen"
            class="flex flex-col text-sm gap-1 bg-violet-blue max-w-[100px] min-w-[60px] w-full p-3 items-center absolute rounded-md right-[-90px] top-[-90px] select-none"
            ref="selectedCurrRef"
          >
            <span
              v-for="(item, index) in currencyData"
              :key="index"
              class="cursor-pointer"
              @click="store.onSelectCurrentCurrency(item)"
            >
              {{ item }}
            </span>
          </div>
        </Transition>
      </div>
      <span class="text-white font-roboto text-sm">Total balance</span>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'WalletFooter' };
</script>

<script setup lang="ts">
import { useWalletStore } from '@/store/useWalletStore';
import { currencyData } from './ts/index';
import { Ref } from 'vue';

const store = useWalletStore();

const selectedBalanceisOpen = ref<boolean>(false);
const selectedCurrRef = ref<Ref<null> | null>(null);

useClickOutside(selectedCurrRef, () => {
  selectedBalanceisOpen.value = false;
});

watch(
  () => store.selectedCurrency,
  () => {
    selectedBalanceisOpen.value = false;
  }
);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
