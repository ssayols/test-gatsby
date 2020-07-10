module.exports = {
  pathPrefix: "/test-gatsby",
  siteMetadata: {
    title: `gatsby-example-using-csv`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        extensions: ['csv','txt'],
        delimiter: ','
      },
    },
  ],
}
