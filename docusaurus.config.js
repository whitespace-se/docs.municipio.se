const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

const config = {
  title: "Municipio",
  tagline: "Documentation",
  url: "https://docs.municipio.se",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "whitespace-se", // Usually your GitHub org/user name.
  projectName: "docs.municipio.se", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  staticDirectories: ["static", "files"],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
          editUrl:
            "https://github.com/whitespace-se/docs.municipio.se/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/whitespace-se/docs.municipio.se/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      // disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      // title: "Municipio",
      logo: {
        alt: "Municipio",
        src: "img/logo.svg",
        srcDark: "img/logo-inverted.svg",
      },
      items: [
        {
          to: "/editor/",
          label: "Redaktör",
          position: "left",
          activeBaseRegex: `/editor/`,
        },
        {
          to: "/admin/",
          label: "Administratör",
          position: "left",
          activeBaseRegex: `/admin/`,
        },
        {
          to: "/developer/",
          label: "Utvecklare",
          position: "left",
          activeBaseRegex: `/developer/`,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "External",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/whitespace-se",
            },
          ],
        },
        {
          title: "More",
          items: [],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Whitespace AB.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["php"],
    },
  },
};

module.exports = config;
