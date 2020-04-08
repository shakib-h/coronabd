module.exports = {
  siteMetadata: {
    title: "করোনা ভাইরাসের পরিসংখ্যান",
    author: "Shakib Hassan",
    description: "Corona Virus Tracker Bangladesh"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'করোনা ভাইরাস',
        short_name: 'করোনা',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Baloo Da 2', // you can also specify font weights and styles
        ],
        display: 'swap'
      },
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-71769911-5',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
