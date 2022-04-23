/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      // resolve: `gatsby-source-strapi`,
      // options: {
      //   apiURL: `http://localhost:1337`,
      //   queryLimit: 1000, // Defaults to 100
      //   collectionTypes: [`jobs`],
      //   // singleTypes: [`home-page`, `contact`],
      //   // Possibility to login with a strapi user, when content types are not publically available (optional).
      //   loginData: {
      //     identifier: "",
      //     password: "",
      //   },
      // },

      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337/`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `job`,
            endpoint: `jobs/?populate=desc`,
          },
        ],
        // singleTypes: [`home-page`, `contact`],
      },
    },
  ],
};
