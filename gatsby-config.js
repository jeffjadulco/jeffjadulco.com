module.exports = {
  siteMetadata: {
    title: `Jeff Jadulco`,
    description: `Jeff Jadulco is a game and javascript developer`,
    author: `Jeff Jadulco`,
    url: `https://jeffjadulco.com`,
    image: `/images/og-card.png`,
    twitterUsername: `@jeffjadulco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeff Jadulco`,
        short_name: `Jeff Jadulco`,
        start_url: `/`,
        background_color: `#2d3748`,
        theme_color: `#81E6D9`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
