const path = require("path");

const PAGES_DIR = path.join(__dirname, "src", "pages");
const IMAGES_DIR = path.join(__dirname, "static", "images");
const CMS_FILE = path.join(__dirname, "src", "cms", "cms.js");

module.exports = {
  siteMetadata: {
    title: "Green Glow",
    description:
      "Green glow is a website created to shine the green glow of technology to the population of Ethiopia.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: IMAGES_DIR,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: PAGES_DIR,
        name: "pages",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "images",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: CMS_FILE,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
