// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Примеры использования паттернов в 1С',
  tagline: 'Улучши свой код',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://leobrn.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ones-patterns',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'leobrn', // Usually your GitHub org/user name.
  projectName: 'ones-patterns', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/leobrn/ones-patterns/tree/main/packages/create-docusaurus/templates/shared/',
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
      docs:{
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        },
      },
      navbar: {
        title: 'Паттерны в 1С',
        logo: {
          alt: 'Паттерны в 1С',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Введение',
          },
          {
            href: 'https://github.com/leobrn/ones-patterns',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Введение',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Профиль Infostart',
                href: 'https://infostart.ru/profile/350139/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/ovmst',
              }
            ],
          },
          {
            title: 'Еще',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/leobrn/ones-patterns',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ochakovsky Vladimir`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
