import type { App } from 'vue';
import {
  HelloWorld,
  MyButton,
  IconFeature,
  Map,
  LineFeature,
} from '@/components';

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('MyButton', MyButton);
    app.component('wfc-icon', IconFeature);
    app.component('wfc-line', LineFeature);
    app.component('wfc-map', Map);
  },
};

export { HelloWorld, MyButton };
