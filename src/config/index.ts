const siteMetadata = {
  title: `Jeff Jadulco`,
  description: `Jeff Jadulco is a game and javascript developer`,
  author: `Jeff Jadulco`,
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? `https://dev.jeffjadulco.com`
      : `https://jeffjadulco.com`,
  image: `/static/og/default.png`,
  twitterUsername: `@jeffjadulco`,
}

export { siteMetadata }
