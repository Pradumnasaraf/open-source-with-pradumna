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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OSWP',
        logo: {
          alt: 'OSWP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/Pradumnasaraf/DevOps',
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
        copyright: `Copyright © ${new Date().getFullYear()} Pradumna Saraf.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
