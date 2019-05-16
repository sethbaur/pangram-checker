module.exports = {
  siteMetadata: {
    title: `Pangram Checker`,
    description: ``,
    author: `@sethbaur`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pangram Checker`,
        short_name: `pangram-checker`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F25F5C`,
        display: `minimal-ui`,
        icon: `src/images/pangram-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
