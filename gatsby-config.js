/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `I like Google fonts`
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Exo\:700`,
          `Yrsa\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap',
        subset: 'latin-ext'
      }
    }
  ]
}
