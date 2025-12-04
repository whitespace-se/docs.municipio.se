const {
  vscLightPlusTheme,
  vscDarkPlusTheme,
} = require("./src/utils/prismTheme.js");
const rehypeFormat = require("rehype-format");

const config = {
  title: "Municipio",
  tagline: "Documentation",
  url: "https://docs.municipio.se",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "sv",
    locales: ["sv"],
  },
  favicon: "img/favicon.ico",
  organizationName: "whitespace-se", // Usually your GitHub org/user name.
  projectName: "docs.municipio.se", // Usually your repo name.
  markdown: {
    mermaid: true,
    format: "detect",
  },
  themes: ["@docusaurus/theme-mermaid"],
  staticDirectories: ["static", "files"],
  clientModules: [require.resolve("./src/clientModules/leadfeeder.js")],
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
    // Matomo plugin with Tag Manager configuration
    [
      "@whitespace-se/docusaurus-plugin-matomo",
      {
        matomoUrl: "https://premium.analys.cloud",
        tagManagerContainerId: "KTFMBVp2",
        trackingEnabled: true,
      },
    ],
    // Standard Matomo tracking (commented out for Tag Manager test)
    // [
    //   require.resolve('./packages/docusaurus-plugin-matomo'),
    //   {
    //     siteId: '85',
    //     matomoUrl: 'https://premium.analys.cloud',
    //     trackingEnabled: true,
    //     respectDoNotTrack: false,
    //     anonymizeIp: false,
    //   },
    // ],
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
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Resurser",
          items: [
            {
              label: "Municipio.se",
              href: "https://www.municipio.se/",
            },
            {
              label: "Municipio från Whitespace",
              href: "https://whitespace.se/municipio/",
            },
            {
              label: "GetMunicipio.com",
              href: "https://getmunicipio.com/",
            },
          ],
        },
        {
          title: "Öppen källkod",
          items: [
            {
              label: "Municipio på Github",
              href: "https://github.com/municipio-se",
            },
            {
              label: "Municipio LTS",
              href: "https://github.com/municipio-se/municipio-lts",
            },
            {
              label: "Municipio Deployment",
              href: "https://github.com/municipio-se/municipio-deployment",
            },
          ],
        },
        {
          title: "Om Whitespace",
          items: [
            {
              html: `Whitespace har arbetat med Municipio i snart 10 år och hjälper verksamheter med höga krav på sin digitala närvaro att bygga och förvalta robusta webbplatser. Kommuner som Eslöv, Höör, Trelleborg och SKR har redan valt att arbeta med Municipio tillsammans med oss.`,
            },
          ],
        },
        {
          title: "Om Municipio Dokumentation",
          items: [
            {
              html: `Här samlar vi guider och stöd som gör det enklare för redaktörer, administratörer och utvecklare att arbeta med webbplatser byggda på Municipio.`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Whitespace AB.`,
    },
    prism: {
      theme: vscDarkPlusTheme,
      darkTheme: vscDarkPlusTheme,
      additionalLanguages: [
        "php",
        "bash",
        "javascript",
        "json",
        "yaml",
        "markup",
      ],
      defaultLanguage: "javascript",
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
      ],
    },
  },
};

module.exports = config;
