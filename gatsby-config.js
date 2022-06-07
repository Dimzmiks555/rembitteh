module.exports = {
  siteMetadata: {
    title: `REMBITTEH`,
    siteUrl: `https://www.yourdomain.tld`
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
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/images/LOGO.svg',
      },
    }
  ]
};