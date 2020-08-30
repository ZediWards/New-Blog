require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `ZediWards`,
    // Default title of the page
    siteTitleAlt: `ZediWards`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Portfolio & Blog - ZediWards`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/Avatar.jpg`,
    // Twitter Handle
    author: `@ZediWards`,
    // Used for SEO
    siteDescription: `portfolio, blog, web development, science, music, javaScript, HTML, CSS, data, 100 days of code, Code Newbie,`,
    // Will be used to generate absolute URLs for og:image etc.
    // siteUrl: `https://minimal-blog.lekoarts.de`,
    // Will be set on the <html /> tag
    // siteLanguage: `en`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/ZediWards`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/ZediWards`,
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
        name: `ZediWards Portfolio & Blog`,
        short_name: `Zediwards`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
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
