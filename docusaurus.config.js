// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const description =
  "Magmastream is an easy-to-use and useful music module for your discord app.";
const baseUrl = "https://magmastream.com";
const title = "Magmastream - Ignite the Symphony of Sonic Harmony!";
const discordSupportLink = "https://discord.gg/Nq5gTGUfwa";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Magmastream",
  tagline: description,
  favicon: "img/logo.ico",

  customFields: {
    usedBy: [
      {
        name: "Lava Jukebox",
        icon: "/usedbyicons/lava-jukebox.png",
        link: "https://discord.com/api/oauth2/authorize?client_id=887651843742793779&permissions=-1&redirect_uri=https%3A%2F%2Fdiscord.gg%2F4ZaXbbYSTZ&response_type=code&scope=guilds.join%20bot%20applications.commands",
        creator: "Abel Purnwasy",
      },
      {
        name: "Stal",
        icon: "/usedbyicons/stal.png",
        link: "https://discord.com/oauth2/authorize?client_id=923938180263182356&scope=bot%20applications.commands&permissions=27648861246",
        creator: "memte",
      },
      {
        name: "Lunio",
        icon: "/usedbyicons/lunio.png",
        link: "https://discord.com/oauth2/authorize?client_id=945030475779551415&permissions=61991952&scope=bot+applications.commands",
        creator: "vexi",
      },
      {
        name: "JukeDisc",
        icon: "/usedbyicons/jukedisc.png",
        link: "https://discord.com/oauth2/authorize?client_id=1109751797549105176&permissions=968552214080&scope=bot+applications.commands",
        creator: "Theo",
      },
      {
        name: "Cool Music",
        icon: "/usedbyicons/cool-music.png",
        link: "https://discord.com/oauth2/authorize?client_id=923529398425096193&permissions=12888394808&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fcool-music-support-925619107460698202&response_type=code&scope=bot%20identify%20applications.commands",
        creator: "Itz Random",
      },
      {
        name: "Soundy",
        icon: "/usedbyicons/soundy.png",
        link: "https://discord.com/oauth2/authorize?client_id=1168385371294420992&scope=bot&permissions=298818334009",
        creator: "iaMJ",
      },
      {
        name: "Bot muzyczny",
        icon: "/usedbyicons/bot-muzyczny.png",
        link: "https://discord.com/oauth2/authorize?client_id=840892428613320726&permissions=8&scope=bot%20applications.commands",
        creator: "kwelo",
      },
      {
        name: "HamBot",
        icon: "/usedbyicons/hambot.png",
        link: "https://discord.com/oauth2/authorize?client_id=1049314312776335390",
        creator: "yanishamburger",
      },
      {
        name: "Miyu",
        icon: "/usedbyicons/miyu.png",
        link: "https://discord.com/oauth2/authorize?client_id=1277180179273482280&permissions=572851999731703&response_type=code&integration_type=0&scope=identify+applications.commands+bot",
        creator: "Kenver"
      },
      {
        name: "Savage Bot",
        icon: "/usedbyicons/savage-bot.png",
        link: "https://discord.com/oauth2/authorize?client_id=823703707522433054&permissions=8&scope=bot%20applications.commands",
        creator: "Savage"
      }
    ],
  },

  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
  ],

  url: baseUrl,
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenAnchors: "ignore",
  onBrokenMarkdownLinks: "ignore",
  onDuplicateRoutes: "throw",
  organizationName: "Magmastream-NPM",
  projectName: "magmastream",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: "current",
          versions: {
            dev: {
              label: "v2.9.0 (dev)",
              path: "dev",
              banner: "unreleased",
              noIndex: true,
            },
            current: {
              label: "v2.8.4 (current)",
            },
            "2.8.2": {
              label: "v2.8.2",
              path: "2.8.2",
              banner: "none",
              noIndex: false,
            },
            "2.8.1": {
              label: "v2.8.1",
              path: "2.8.1",
              banner: "none",
              noIndex: false,
            },
            "2.8.0": {
              label: "v2.8.0",
              path: "2.8.0",
              banner: "none",
              noIndex: false,
            },
            "2.7.5": {
              label: "v2.7.5",
              path: "2.7.5",
              banner: "none",
              noIndex: false,
            },
            "2.6.1": {
              label: "v2.6.1",
              path: "2.6.1",
              banner: "unmaintained",
              noIndex: true,
            },
          },

          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            "https://github.com/magmastream-npm/magmastream_documentation/tree/main/",
        },
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
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
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: {
    image: "https://i.imgur.com/TCdtEF3.png",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: "apple-mobile-web-app-title", content: title },
      { name: "application-name", content: title },
      { name: "theme-color", content: "#ff8c00" },
      { name: "algolia-site-verification", content: "C79C7151130DE594"},
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      { name: "audience", content: "all" },
      { name: "author", content: `Magmastream` },
      { name: "coverage", content: "Worldwide" },
      { name: "description", content: description },
      { name: "designer", content: `realdarek` },
      { name: "distribution", content: "Global" },
      { name: "googlebot", content: "index,follow" },
      { name: "HandheldFriendly", content: "True" },
      { name: "identifier-URL", content: baseUrl },
      {
        name: "keywords",
        content:
          "discord, bot, discord music bot, documentation, guide, lavalink, magmastream, music, music bot, music module, music system, musicbot, musicmodule, musicstream, musicstreaming, musicstreamingbot",
      },
      { name: "owner", content: `sxm_abel` },
      { name: "rating", content: "safe for kids" },
      { name: "revisit-after", content: "7 days" },
      {
        name: "robots",
        content: "archive,follow,imageindex,index,odp,snippet,translate",
      },
      { name: "shortlink", content: baseUrl },
      {
        name: "subject",
        content: "Documentation website for discord-api-types",
      },
      { name: "summary", content: description },
      { name: "target", content: "all" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "sxm_abel" },
      { name: "twitter:site", content: "realdarek" },
      {
        name: "twitter:title",
        content: "Magmastream - Ignite the Symphony of Sonic Harmony!",
      },
      { name: "twitter:description", content: description },
      { name: "url", content: baseUrl },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://i.imgur.com/TCdtEF3.png" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: title },
      {
        property: "og:title",
        content: "Magmastream - Ignite the Symphony of Sonic Harmony!",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: baseUrl },
    ],
    navbar: {
      hideOnScroll: true,
      title: "Magmastream",
      logo: {
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          label: "Homepage",
          position: "left",
          activeBaseRegex: "^/$",
        },
        {
          to: "/docs/intro",
          label: "Documentation",
          position: "left",
          activeBaseRegex: "^/docs",
        },
        {
          to: "/statistics",
          label: "Statistics",
          position: "left",
          activeBaseRegex: "^/statistics",
        },
        {
          to: "/usedby",
          label: "Used by",
          position: "left",
          activeBaseRegex: "^/usedby",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "All versions",
            },
          ],
          dropdownActiveClassDisabled: true,
        },
        {
          href: discordSupportLink,
          position: "right",
          className: "fa-brands fa-discord fa-lg",
          "aria-label": "Discord support server",
          target: "_blank",
        },
        {
          href: "https://github.com/magmastream-npm",
          position: "right",
          className: "fa-brands fa-github fa-lg",
          "aria-label": "GitHub company",
          target: "_blank",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Powered By Docusaurus",
        src: "/img/docusaurus.png",
        target: "_blank",
        href: "https://docusaurus.io/",
        width: 180,
        height: 90,
      },
      links: [
        {
          title: "Documentations",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/getting-started/installation",
            },
            {
              label: "Migrations (nothing there for now)",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: discordSupportLink,
            },
            {
              label: "Github",
              href: "https://github.com/magmastream-npm",
            },
            {
              label: "Credits",
              href: "https://github.com/MenuDocs/erela.js",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <b>Magmastream</b>, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
    algolia: {
      appId: "0DINHQMAE4",
      apiKey: "1fc388650de4bef4176d19c8ee8a654c",
      indexName: "magmastream",
      contextualSearch: true,
    },
  },
};

export default config;
