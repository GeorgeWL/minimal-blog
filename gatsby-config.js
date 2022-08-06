require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    author: 'GeorgeWL',
    siteImage: `/logo.png`,
    siteTitle: `GeorgeWL`,
    siteTitleAlt: `georgewl.dev - George WL`,
    siteDescription: `The personal blog and portfolio of George WL, Software Developer and general tech-nerd`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: 'Home',
            slug: '/#',
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/georgewlangham/`,
          },
          {
            name: `Github`,
            url: `https://github.com/GeorgeWL`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `georgewl.dev - George WL`,
        short_name: `georgewl.dev`,
        description: `The personal blog and portfolio of George WL, Software Developer and general tech-nerd`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
