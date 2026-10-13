module.exports = {
  siteMetadata: {
    title: `REMBITTEH`,
    siteUrl: `https://gorgeous-figolla-768936.netlify.app`
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ремонт бытовой техники',
        short_name: 'Ремонт бытовой техники',
        start_url: '/',
        background_color: '#f5f7fa',
        theme_color: '#f5f7fa',
        display: 'standalone',
        icon: 'src/images/LOGO.svg',
      },
    }
  ]
};