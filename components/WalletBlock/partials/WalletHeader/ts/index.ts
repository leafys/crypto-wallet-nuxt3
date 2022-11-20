import IconsShow from '@/components/Icons/Show.vue';
import HideShow from '@/components/Icons/HideShow.vue';

interface IFilterData {
  actionTitle: string;
  icon: unknown;
  actionType: string;
}

export const filterData: IFilterData[] = [
  { actionTitle: 'Show only Fiat', icon: IconsShow, actionType: 'fiat' },
  { actionTitle: 'Show only Crypto', icon: IconsShow, actionType: 'crypto' },
  {
    actionTitle: 'Hide currency zero balance',
    icon: HideShow,
    actionType: 'hide',
  },
];
