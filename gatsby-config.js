module.exports = {
  siteMetadata: {
    title: 'Stir',
    description:
      'Learning to cook delicious meals, one step at a time. Experimenting with tried and true recipes and defining our own',
    author: 'James Spencer',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
