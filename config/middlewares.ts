export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
          useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public/cms',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public/cms/',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public/'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public/cms',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public/cms/',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public',
            'https://guzwpdivooduepqbdftt.supabase.co/storage/v1/object/public/'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
