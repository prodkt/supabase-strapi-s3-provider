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
          neutral0: "#fff",
          neutral200: "#ccc",
          neutral600: "#333",
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
    translations: {
      en: {
        "Homepage.title": "Fully-managed Cloud Hosting for your NexSale Project",
        "Homepage.subTitle": "Follow this 2 steps process to get Everything You Need to Run NexSale in Production.",
        "Homepage.githubBox.title.versioned": "Project pushed to GitHub",
        "Homepage.githubBox.title.not-versioned": "Push your project on GitHub",
        "Homepage.githubBox.subTitle.versioned": "You did it! You're just one step ahead of having your project hosted online.",
        "Homepage.githubBox.subTitle.not-versioned": "Your project has to be versioned on GitHub before deploying on NexSale Cloud.",
        "Homepage.githubBox.buttonText": "Upload to GitHub",
        "Homepage.cloudBox.title": "Deploy to NexSale Cloud",
        "Homepage.cloudBox.subTitle": "Enjoy a NexSale-optimized stack including database, email provider, and CDN.",
        "Homepage.cloudBox.buttonText": "Deploy to NexSale Cloud",
        "Homepage.textBox.label.versioned": "Try NexSale Cloud for Free!",
        "Homepage.textBox.label.not-versioned": "Why uploading my project to GitHub?",
        "Homepage.textBox.text.versioned": "NexSale Cloud offers a 14 days free trial for you to experiment with your project on the cloud including all features.",
        "Homepage.textBox.text.not-versioned": "NexSale Cloud will fetch and deploy your project from your GitHub repository. This is the best way to version, manage and deploy your project. Follow the steps on GitHub to successfully upload it.",
        "Auth.form.button.login.strapi": "Log in via NexSale",
        "Auth.form.register.subtitle": "Credentials are only used to authenticate in NexSale. All saved data will be stored in your database.",
        "Auth.form.username.placeholder": "e.g. Bryan_Funk",
        "Auth.form.welcome.subtitle": "Log in to your NexSale account",
        "Auth.form.welcome.title": "Welcome to NexSale!",
        "Deploy.plugin.Homepage.title": "Fully-managed Cloud Hosting for your NexSale Project",
        "Deploy.plugin.Homepage.subTitle": "Follow this 2 steps process to get Everything You Need to Run NexSale in Production.",
        "Deploy.plugin.Homepage.githubBox.title.versioned": "Project pushed to GitHub",
        "Deploy.plugin.Homepage.githubBox.title.not-versioned": "Push your project on GitHub",
        "Deploy.plugin.Homepage.githubBox.subTitle.versioned": "You did it! You're just one step ahead of having your project hosted online.",
        "Deploy.plugin.Homepage.githubBox.subTitle.not-versioned": "Your project has to be versioned on GitHub before deploying on NexSale Cloud.",
        "Deploy.plugin.Homepage.githubBox.buttonText": "Upload to GitHub",
        "Deploy.plugin.Homepage.cloudBox.title": "Deploy to NexSale Cloud",
        "Deploy.plugin.Homepage.cloudBox.subTitle": "Enjoy a NexSale-optimized stack including database, email provider, and CDN.",
        "Deploy.plugin.Homepage.cloudBox.buttonText": "Deploy to NexSale Cloud",
        "Deploy.plugin.Homepage.textBox.label.versioned": "Try NexSale Cloud for Free!",
        "Deploy.plugin.Homepage.textBox.label.not-versioned": "Why uploading my project to GitHub?",
        "Deploy.plugin.Homepage.textBox.text.versioned": "NexSale Cloud offers a 14 days free trial for you to experiment with your project on the cloud including all features.",
        "Deploy.plugin.Homepage.textBox.text.not-versioned": "NexSale Cloud will fetch and deploy your project from your GitHub repository. This is the best way to version, manage and deploy your project. Follow the steps on GitHub to successfully upload it.",
        "Deploy.plugin.Auth.form.button.login.strapi": "Log in via NexSale",
        "Deploy.plugin.Auth.form.register.subtitle": "Credentials are only used to authenticate in NexSale. All saved data will be stored in your database.",
        "Deploy.plugin.Auth.form.username.placeholder": "e.g. Bryan_Funk",
        "Deploy.plugin.Auth.form.welcome.subtitle": "Log in to your NexSale account",
        "Deploy.plugin.Auth.form.welcome.title": "Welcome to NexSale!",
      }
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
