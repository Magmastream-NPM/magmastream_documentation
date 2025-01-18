// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const description = "Magmastream is an easy-to-use and useful music module for your discord app.";
const baseUrl = 'https://docs.magmastream.com';
const title = 'magmastream documentation';
const discordSupportLink = "https://discord.gg/Nq5gTGUfwa";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Magmastream',
  tagline: description,
  favicon: 'img/logo.ico',

  url: baseUrl,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'Magmastream-NPM', // Usually your GitHub org/user name.
  projectName: 'magmastream', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2.7.2 (current)',
            },
            '2.6.1': {
              label: 'v2.6.1',
              path: '2.6.1',
              banner: 'unmaintained',
              noIndex: true,
            },
          },

          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/magmastream-npm/magmastream_documentation/tree/main/',
        },
        blog: false,
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
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/magmastream-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    metadata: [
      {name: 'apple-mobile-web-app-title', content: title},
      {name: 'application-name', content: title},
      {name: 'msapplication-TileColor', content: '#2563EB'},
      {name: 'msapplication-TileImage', content: '/mstile-144x144.png'},
      {name: 'theme-color', content: '#2563EB'},

      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
      {name: 'audience', content: 'all'},
      {name: 'author', content: `Vlad Frangu`},
      {name: 'coverage', content: 'Worldwide'},
      {name: 'description', content: description},
      {name: 'designer', content: `Vlad Frangu`},
      {name: 'distribution', content: 'Global'},
      {name: 'googlebot', content: 'index,follow'},
      {name: 'HandheldFriendly', content: 'True'},
      {name: 'identifier-URL', content: baseUrl},
      {name: 'keywords', content: 'discord, bot, discord api, documentation, guide, discord-api-types'},
      {name: 'owner', content: `Vlad Frangu`},
      {name: 'rating', content: 'safe for kids'},
      {name: 'revisit-after', content: '7 days'},
      {name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate'},
      {name: 'shortlink', content: baseUrl},
      {name: 'subject', content: 'Documentation website for discord-api-types'},
      {name: 'summary', content: description},
      {name: 'target', content: 'all'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:creator', content: '@WolfgalVlad'},
      {name: 'twitter:site', content: '@WolfgalVlad'},
      {name: 'twitter:title', content: 'discord-api-types - Imagine typings'},
      {name: 'twitter:description', content: description},
      {name: 'url', content: baseUrl},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {property: 'og:description', content: description},
      {property: 'og:image:alt', content: 'OpenGraphImage'},
      {property: 'og:image:height', content: '512'},
      {property: 'og:image:width', content: '1024'},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:site_name', content: title},
      {property: 'og:title', content: 'discord-api-types - Imagine typings'},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: baseUrl}
    ],
    navbar: {
      hideOnScroll: true,
      title: 'Magmastream',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Homepage',
          position: 'left',
          activeBaseRegex: '^/$'
        },
        {
          to: '/docs/intro',
          label: 'Documentation',
          position: 'left',
          activeBaseRegex: '^/docs'
        },
        {
          to: '/statistics',
          label: 'Statistics',
          position: 'left',
          activeBaseRegex: '^/statistics'
        },
        {
          to: '/usedby',
          label: 'Used by',
          position: 'left',
          activeBaseRegex: '^/usedby'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions'
            }
          ],
          dropdownActiveClassDisabled: true,
        },
        /*{
          type: 'localeDropdown',
          position: 'right',
        },*/
        {
          href: discordSupportLink,
          position: 'right',
          className: 'fa-brands fa-discord fa-lg',
          'aria-label': 'Discord support server',
          target: '_blank',
        },
        {
          href: 'https://github.com/magmastream-npm',
          position: 'right',
          className: 'fa-brands fa-github fa-lg',
          'aria-label': 'GitHub company',
          target: '_blank',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Powered By Docusaurus',
        src: '/img/docusaurus.png',
        target: '_blank',
        href: 'https://docusaurus.io/',
        width: 180,
        height: 90
      },
      links: [
        {
          title: 'Documentations',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'Migrations',
              to: '/docs/migrations',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: discordSupportLink,
            },
            {
              label: 'Github',
              href: 'https://github.com/magmastream-npm',
            },
            {
              label: 'Credits',
              href: 'https://github.com/MenuDocs/erela.js',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <b>Magmastream</b>, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
  }
};

export default config;
