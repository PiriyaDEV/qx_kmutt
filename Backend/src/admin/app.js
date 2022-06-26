import QX_Logo from "./extensions/qx-logo.png";
import Favicon from './extensions/favicon.ico';

export default {
  config: {
    auth: {
      logo: QX_Logo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: QX_Logo,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
