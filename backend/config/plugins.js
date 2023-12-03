module.exports = ({ env }) => ({
  'vercel-deploy': {
    enabled: true
  },
  ckeditor5: {
    enabled: true
    // resolve: "./src/plugins/strapi-plugin-ckeditor"
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
