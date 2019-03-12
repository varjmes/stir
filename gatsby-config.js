module.exports = {
  siteMetadata: {
    title: 'Stir',
    description: 'Learning to cook delicious meals, one step at a time. Experimenting with tried and true recipes and defining our own',
    author: 'James Spencer'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
  ],
}
