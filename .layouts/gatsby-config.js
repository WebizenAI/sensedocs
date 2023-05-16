const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Sense Development Documentation.",
  shortName: "Sense-docs",
  description:
    "This is development related documentation for the sense system.",
  twitterName: "webcivics",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://sense-docs.webizen.au",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/WebizenAI/sensedocs",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/webcivics",
          },
        ],
        editUrl:
          "https://github.com/WebizenAI/sense-docs/tree/main/",
        },
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: siteMetadata.title,
          short_name: siteMetadata.shortName,
          start_url: pathPrefix,
          background_color: `#f7f0eb`,
          editUrlText: "Suggest Edit on Github", // edit url text
          display: `standalone`,
          shouldSupportTags: true,
          tagText: "Tags",
          icon: path.resolve(__dirname, "./static/logo.png"),
        },
      },
      {
        resolve: `gatsby-plugin-sitemap`,
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: siteMetadata.siteUrl,
          sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [],
        },
      },
    ],
  };
