export default () => ({
    upload: {
      config: {
        provider: 'upload-aws-s3',
        providerOptions: {
          credentials: {
            accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY,
          },
          forcePathStyle: true,
          region: process.env.SUPABASE_S3_REGION,
          endpoint: process.env.SUPABASE_S3_ENDPOINT_URL,
          params: {
            Bucket: process.env.SUPABASE_S3_BUCKET,
          },
        },
      },
    },
    navigation: {
        enabled: true,
        config: {
            additionalFields: ['audience', { name: 'my_custom_field', type: 'boolean', label: 'My custom field' }],
            contentTypes: ['api::page.page'],
            contentTypesNameFields: {
                'api::page.page': ['title']
            },
            pathDefaultFields: {
                'api::page.page': ['slug']
            },
            allowedLevels: 4,
            // gql: {...},
        }
    },
    seo: {
      enabled: true,
    },
});
