<template>
  <section class="mt-20 wrapper">
    <WalletHeader />
    <div class="wallet-main-wrapper">
      <WalletMain
        v-for="item in store.filterWalletList"
        :key="item.id"
        :currencyData="item"
        :currentCurrency="item.currency"
      />

      <h1
        v-if="store.filterWalletList.length === 0"
        class="empty-currency-list-message"
      >
        No currencies found, check filters or contact support
      </h1>
    </div>

    <WalletFooter />
  </section>
</template>

<script lang="ts">
export default { name: 'WalletBlock' };
</script>

<script setup lang="ts">
import WalletHeader from './partials/WalletHeader/WalletHeader.vue';
import WalletMain from './partials/WalletMain/WalletMain.vue';
import WalletFooter from './partials/WalletFooter/WalletFooter.vue';
import { useWalletStore } from '@/store/useWalletStore';

const store = useWalletStore();
</script>

<style scoped>
.wrapper {
  width: min(100% - 25px, 640px);
  margin-inline: auto;
}

.wallet-main-wrapper {
  @apply bg-contrast-blue p-10 pb-5 w-full flex flex-col gap-5 min-h-[440px];
}

.empty-currency-list-message {
  @apply text-white text-4xl flex text-center font-raleway w-full my-auto;
}
</style>
