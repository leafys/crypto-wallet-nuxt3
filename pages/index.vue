<template>
  <WalletBlock />
</template>

<script setup lang="ts">
import WalletBlock from '@/components/WalletBlock/WalletBlock.vue';
import { useWalletStore } from '@/store/useWalletStore';

const store = useWalletStore();

await useAsyncData('getWalletData', () => store.getWalletList());
</script>
