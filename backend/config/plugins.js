module.exports = ({ env }) => ({
  'vercel-deploy': {
    enabled: true
  },
  ckeditor5: {
    enabled: true
  },
  // resolve: "./src/plugins/strapi-plugin-ckeditor"
  'vercel-deploy': {
    enabled: true,
    config: {
      deployHook:
        'https://api.vercel.com/v1/integrations/deploy/prj_EO46oJiLmvqfJhgqO4R8XHied3Rz/uWjQbwLFmA',
      apiToken: 'y4IB0WDRW4XLplS9cAXBRKUd',
      appFilter: 'pokeradmin',
      roles: ['strapi-super-admin']
    }
  },
  publisher: {
    enabled: true,
    config: {
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          console.log('beforePublish')
        },
        afterPublish: async ({ strapi, uid, entity }) => {
          console.log('afterPublish')
        },
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          console.log('beforeUnpublish')
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {
          console.log('afterUnpublish')
        }
      }
    }
  }
})
// ./config/plugins.js
// if change, run `npm run build --clean`
