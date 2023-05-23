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
    app.component('IconFeature', IconFeature);
    app.component('LineFeature', LineFeature);
    app.component('Map', Map);
  },
};

export { HelloWorld, MyButton, IconFeature, LineFeature, Map };
