import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Municipio',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.municipio.se',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docs.municipio.se', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/whitespace-se/docs.municipio.se/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Municipio',
      logo: {
        alt: 'Municipio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'editorSidebar',
          position: 'left',
          label: 'Redaktör',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Utvecklare',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   // links: [
    //   //   {
    //   //     title: 'Docs',
    //   //     items: [
    //   //       {
    //   //         label: 'Tutorial',
    //   //         to: '/docs/intro',
    //   //       },
    //   //     ],
    //   //   },
    //   //   {
    //   //     title: 'Community',
    //   //     items: [
    //   //       {
    //   //         label: 'Stack Overflow',
    //   //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //   //       },
    //   //       {
    //   //         label: 'Discord',
    //   //         href: 'https://discordapp.com/invite/docusaurus',
    //   //       },
    //   //       {
    //   //         label: 'Twitter',
    //   //         href: 'https://twitter.com/docusaurus',
    //   //       },
    //   //     ],
    //   //   },
    //   //   {
    //   //     title: 'More',
    //   //     items: [
    //   //       {
    //   //         label: 'Blog',
    //   //         to: '/blog',
    //   //       },
    //   //       {
    //   //         label: 'GitHub',
    //   //         href: 'https://github.com/facebook/docusaurus',
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
