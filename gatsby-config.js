module.exports = {
  siteMetadata: {
    title: `BEKAP s.r.o. | Postaráme se o Vaše účetnictví`,
    description: `Účetnictví není žádná sranda, když zrovna nejste účetní. 
    Dobrý účetní přichází s řešením a nápady, jak vám ušetřit 
    peníze. My si vždy víme rady, jsme na drátě i online a rádi 
    vám pokaždé vše vysvětlíme lidskou řečí.`,
    author: `Michal Hromas`,
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
        name: `BEKAP s.r.o. | Účetnictví`,
        short_name: `BEKAP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1CB1D5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
