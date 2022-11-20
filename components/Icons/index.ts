import Vue from 'vue';
import Usd from '~/components/Icons/Usd.vue';
import Euro from '~/components/Icons/Euro.vue';
import Eth from '~/components/Icons/Eth.vue';
import Btc from '~/components/Icons/Btc.vue';
import Coin from '~/components/Icons/Coin.vue';
import Settings from '~/components/Icons/Settings.vue';
import Show from '~/components/Icons/Show.vue';
import HideShow from '~/components/Icons/HideShow.vue';

const icons = {
  Usd,
  Euro,
  Eth,
  Btc,
  Coin,
  Settings,
  Show,
  HideShow,
};

Object.entries(icons).forEach(([name, component]) => {
  Vue.defineComponent({ name, component });
});

export default icons;
