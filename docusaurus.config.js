// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OSWP',
  tagline: 'Open Source With Pradumna',
  favicon: 'img/favicon.ico',
  url: 'https://os.pradumnasaraf.dev',
  baseUrl: '/',
  organizationName: 'Pradumnasaraf',
  projectName: 'open-source-with-pradumna',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/Pradumnasaraf/open-source-with-pradumna/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-WGC6Z2DF',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: '60c99b249d7feccb2a8e5b336a9b7070',
        indexName: 'os',
        appId: 'UE1UAJS39Y', // Ensure you have the correct App ID if using a multi-application setup
        contextualSearch: true, // Optional: contextual search
        // Optional: see doc section below
        // searchParameters: {},
        //... other algolia configuration
      },
      image: 'img/oswp-repo-card.png',
      navbar: {
        title: 'OSWP',
        logo: {
          alt: 'OSWP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/Pradumnasaraf/open-source-with-pradumna',
            label: 'GitHub',
            position: 'right',
          }, 
          {
            href: 'https://twitter.com/pradumna_Saraf',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'OSWP Logo',
          src: 'img/logo.svg',
          href: 'https://os.pradumnasaraf.dev',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Pradumna Saraf.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
