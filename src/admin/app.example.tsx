import type { StrapiApp } from '@strapi/strapi/admin';
import AuthLogo from './extensions/logo.svg';
import MenuLogo from './extensions/logomark.svg';
import Favicon from './extensions/favicon.png';

export default {
  config: {
    head: {
      favicon: Favicon,
    },
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    theme: {
      light: {
        colors: {
          primary600: "#000",
          buttonPrimary500: "#000",
          buttonPrimary600: "#000",
        },
      },
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
