/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/dtprosusa`,
  siteMetadata: {
    title: "React Gatsby Technology & Blog Template",
    titleTemplate: `DT Pros`,
    description: `Award-winning IT Development & Consulting firm.`,
    author: `@dtpros`,
    twitterUsername: `@dtprosusa`,
    image: 'landing.png',
    siteUrl: 'https://dtprosusa.com/',
    canonical: "https://dtprosusa.com/",
    getform: "https://getform.io/f/22b43bd4-29a7-4795-ba95-6abfe8bf1f39",
    copyright: "DT Professional Services LLC. <a href='https://dtprosusa.com/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    siteLanguage: "en",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    },
    contact: {
      phone: '190068668',
      address: "21515 Vanowen Street, Suite 218 Canoga Park, CA 91303",
      email: 'info@dtprosusa.com',
      website: "https://dtprosusa.com",
      rating: "4.9",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "los-angeles",
          "state": "Los Angeles",
          "address": "21515 Vanowen Street, Suite 218 Canoga Park, CA 91303",
          "email": "info@dtprosusa.com",
          "phone": "(818) 233-8330"
        },
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "DT Pros",
        "short_name": "dt",
        "theme_color": "#086ad8",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.png",
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dtprosusa.com/',
        sitemap: 'https://dtprosusa.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
