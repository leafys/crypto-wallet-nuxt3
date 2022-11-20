<template>
  <div
    class="h-[50px] bg-linear-dark-blue w-full flex items-center p-5 rounded-t justify-between"
  >
    <span class="text-blue text-lg font-raleway">Wallet</span>

    <div
      class="flex gap-3 relative max-w-[190px] w-full h-[32px] justify-center transition-all"
      :class="{
        'bg-bright-turquoise bg-opacity-[0.2] rounded-t-md': settingsIsOpen,
      }"
    >
      <div class="flex gap-1 items-center">
        <IconsSettings />
        <span
          class="uppercase font-roboto text-xs tracking-[0.04em] line leading-[14px] text-turquoise font-medium"
          >settings</span
        >
      </div>

      <i
        @click.stop="settingsIsOpen = !settingsIsOpen"
        class="w-0 h-0 border-[4px] rotate-[135deg] border-b-transparent border-l-transparent cursor-pointer transition-transform select-none border-bright-turquoise absolute right-8 top-1/2 translate-y-[-60%]"
        :class="{ 'rotate-[-45deg]': settingsIsOpen }"
      />

      <Transition>
        <div
          v-if="settingsIsOpen"
          class="flex flex-col text-xs font-normal gap-3 bg-violet-blue p-3 absolute w-[190px] rounded-b-md select-none text-white bottom-[-120px]"
          ref="settingsRef"
        >
          <div
            v-for="(item, index) in filterData"
            :key="index"
            class="flex gap-2 items-center cursor-pointer w-max"
            @click="onPutFilterInUrl(item.actionType)"
          >
            <component :is="item.icon" />
            <span>{{ item.actionTitle }}</span>
          </div>

          <span class="mx-auto cursor-pointer w-max" @click="onResetUrlFilter"
            >Reset filter</span
          >
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'WalletHeader' };
</script>

<script setup lang="ts">
import { filterData } from './ts/index';
import { Ref } from 'vue';

const route = useRoute();
const router = useRouter();

const settingsIsOpen = ref<boolean>(false);
const settingsRef = ref<Ref<null> | null>(null);

const onPutFilterInUrl = (filter: string) => {
  if (route.query.filter === filter) return;
  router.push({ query: { filter: filter } });
};

const onResetUrlFilter = (): void => {
  if (!route.query.filter) return;
  router.push(route.path);
};

useClickOutside(settingsRef, () => {
  settingsIsOpen.value = false;
});

watch(
  () => route.query.filter,
  () => {
    settingsIsOpen.value = false;
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
