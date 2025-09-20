// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const description = 'Magmastream is an easy-to-use and useful music module for your discord app.';
const baseUrl = 'https://magmastream.com';
const title = 'Magmastream - Ignite the Symphony of Sonic Harmony!';
const discordSupportLink = 'https://discord.gg/Nq5gTGUfwa';
const repoLink = "https://github.com/Magmastream-NPM";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Magmastream',
	tagline: description,
	favicon: 'img/logo.ico',

	customFields: {
		usedBy: [
			{
				name: 'Lava Jukebox',
				icon: '/usedbyimgs/lava-jukebox.png',
				link: 'https://discord.com/api/oauth2/authorize?client_id=887651843742793779',
				creator: 'Abel Purnwasy',
				creatorId: "809213892857167942"
			},
			{
				name: 'Lunio',
				icon: '/usedbyimgs/lunio.png',
				link: 'https://discord.com/oauth2/authorize?client_id=945030475779551415',
				creator: 'lethalfluff',
				creatorId: "337568120028004362"
			},
			{
				name: 'JukeDisc',
				icon: '/usedbyimgs/jukedisc.png',
				link: 'https://discord.com/oauth2/authorize?client_id=1109751797549105176',
				creator: 'mrdieselgr',
				creatorId: "794563552606289952"
			},
			{
				name: 'Cool Music',
				icon: '/usedbyimgs/cool-music.png',
				link: 'https://discord.com/oauth2/authorize?client_id=923529398425096193&scope=bot&permissions=12888394808',
				creator: 'random.js',
				creatorId: "878975596623986700"
			},
			{
				name: 'Bot muzyczny',
				icon: '/usedbyimgs/bot-muzyczny.png',
				link: 'https://discord.com/oauth2/authorize?client_id=840892428613320726',
				creator: 'kwelo',
				creatorId: "538675534754742292"
			},
			{
				name: 'HamBot',
				icon: '/usedbyimgs/hambot.png',
				link: 'https://discord.com/oauth2/authorize?client_id=1049314312776335390',
				creator: 'yanishamburger',
				creatorId: "447088005941952523"
			},
			{
				name: 'Miyu',
				icon: '/usedbyimgs/miyu.png',
				link: 'https://discord.com/oauth2/authorize?client_id=1277180179273482280',
				creator: 'god_rayan',
				creatorId: "977131375431913522"
			},
			{
				name: 'Savage Bot',
				icon: '/usedbyimgs/savage-bot.png',
				link: 'https://discord.com/oauth2/authorize?client_id=823703707522433054&permissions=8&scope=bot%20applications.commands',
				creator: 'savagefrvr',
				creatorId: "299552992980500480"
			},
			{
				name: "fume",
				icon: "/usedbyimgs/fume.png",
				link: "https://discord.com/oauth2/authorize?client_id=1279968947575328779",
				creator: "xrm0s",
				creatorId: "627991951857418261",
			},
			{
				name: "Pepper",
				icon: "/usedbyimgs/pepper.png",
				link: "https://discord.com/oauth2/authorize?client_id=871808444502540379&permissions=11594760&scope=applications.commands+bot",
				creator: "murlee",
				creatorId: "678402714765361182",
			}
		],
		versionGitLink: {
			current: 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.9.0',
			'2.8.7': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.8.7',
			'2.8.5': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.8.5',
			'2.8.4': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.8.4',
			'2.8.2': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.8.2',
			'2.8.1': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.8.1',
			'2.8.0': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.8.0',
			'2.7.5': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.7.5',
			'2.6.1': 'https://github.com/Magmastream-NPM/magmastream/releases/tag/v2.6.1',
		},
		repo: repoLink,
		discord: discordSupportLink
	},

	stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'],

	url: baseUrl,
	baseUrl: '/',
	onBrokenLinks: 'ignore',
	onBrokenAnchors: 'ignore',
	onBrokenMarkdownLinks: 'ignore',
	onDuplicateRoutes: 'throw',
	organizationName: 'Magmastream-NPM',
	projectName: 'magmastream',

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					lastVersion: 'current',
					versions: {
						current: {
							label: 'v2.9.0 (current)',
						},
						'2.8.7': {
							label: 'v2.8.7',
							path: '2.8.7',
							banner: 'none',
							noIndex: false,
						},
						'2.8.5': {
							label: 'v2.8.5',
							path: '2.8.5',
							banner: 'none',
							noIndex: false,
						},
						'2.8.4': {
							label: 'v2.8.4',
							path: '2.8.4',
							banner: 'none',
							noIndex: false,
						},
						'2.8.2': {
							label: 'v2.8.2',
							path: '2.8.2',
							banner: 'none',
							noIndex: true,
						},
						'2.8.1': {
							label: 'v2.8.1',
							path: '2.8.1',
							banner: 'none',
							noIndex: true,
						},
						'2.8.0': {
							label: 'v2.8.0',
							path: '2.8.0',
							banner: 'none',
							noIndex: true,
						},
						'2.7.5': {
							label: 'v2.7.5',
							path: '2.7.5',
							banner: 'unmaintained',
							noIndex: true,
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
					editUrl: 'https://github.com/magmastream-npm/magmastream_documentation/tree/main/',
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
					customCss: './src/css/custom.css',
				},
			}),
		],
	],
	future: {
		v4: {
			removeLegacyPostBuildHeadAttribute: true, // required
		},
		experimental_faster: {
			ssgWorkerThreads: true,
		},
	},
	themeConfig: {
		image: 'https://i.imgur.com/TCdtEF3.png',
		colorMode: {
			defaultMode: 'dark',
			respectPrefersColorScheme: true,
		},
		metadata: [
			{ name: 'apple-mobile-web-app-title', content: title },
			{ name: 'application-name', content: title },
			{ name: 'theme-color', content: '#ff8c00' },
			{ name: 'algolia-site-verification', content: 'C79C7151130DE594' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
			{ name: 'audience', content: 'all' },
			{ name: 'author', content: `Magmastream` },
			{ name: 'coverage', content: 'Worldwide' },
			{ name: 'description', content: description },
			{ name: 'designer', content: `realdarek` },
			{ name: 'distribution', content: 'Global' },
			{ name: 'googlebot', content: 'index,follow' },
			{ name: 'HandheldFriendly', content: 'True' },
			{ name: 'identifier-URL', content: baseUrl },
			{
				name: 'keywords',
				content:
					'discord, bot, discord music bot, documentation, guide, lavalink, magmastream, music, music bot, music module, music system, musicbot, musicmodule, musicstream, musicstreaming, musicstreamingbot',
			},
			{ name: 'owner', content: `sxm_abel` },
			{ name: 'rating', content: 'safe for kids' },
			{ name: 'revisit-after', content: '7 days' },
			{
				name: 'robots',
				content: 'archive,follow,imageindex,index,odp,snippet,translate',
			},
			{ name: 'shortlink', content: baseUrl },
			{
				name: 'subject',
				content: 'Documentation website for discord-api-types',
			},
			{ name: 'summary', content: description },
			{ name: 'target', content: 'all' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:creator', content: 'sxm_abel' },
			{ name: 'twitter:site', content: 'realdarek' },
			{
				name: 'twitter:title',
				content: 'Magmastream - Ignite the Symphony of Sonic Harmony!',
			},
			{ name: 'twitter:description', content: description },
			{ name: 'url', content: baseUrl },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ property: 'og:description', content: description },
			{ property: 'og:image', content: 'https://i.imgur.com/TCdtEF3.png' },
			{ property: 'og:locale', content: 'en_US' },
			{ property: 'og:site_name', content: title },
			{
				property: 'og:title',
				content: 'Magmastream - Ignite the Symphony of Sonic Harmony!',
			},
			{ property: 'og:type', content: 'article' },
			{ property: 'og:url', content: baseUrl },
		],
		navbar: {
			hideOnScroll: true,
			title: 'Magmastream',
			logo: {
				src: '/imgs/logo.svg',
			},
			items: [
				{
					to: '/docs/intro',
					label: 'Documentation',
					position: 'left',
					activeBaseRegex: '^/docs/(?!contributing).*',
				},
				{
					to: '/docs/contributing',
					label: 'Contributing',
					position: 'left',
					activeBasePath: '/docs/contributing',
				},
				{
					to: '/statistics',
					label: 'Statistics',
					position: 'left',
					activeBaseRegex: '^/statistics',
				},
				{
					to: '/usedby',
					label: 'Used by',
					position: 'left',
					activeBaseRegex: '^/usedby',
				},
				{
					type: 'docsVersionDropdown',
					position: 'right',
					dropdownItemsAfter: [
						{
							to: '/versions',
							label: 'All versions',
						},
					],
					dropdownActiveClassDisabled: true,
				},
				{
					href: discordSupportLink,
					position: 'right',
					className: 'fa-brands fa-discord fa-lg',
					'aria-label': 'Discord support server',
					target: '_blank',
				},
				{
					href: repoLink,
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
							to: '/docs/getting-started/installation',
						},
						{
							label: 'Contributing',
							to: '/docs/contributing',
						}
					]
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
						}
					]
				},
			],
			copyright: `Built in <a href="https://docusaurus.io/">Docusaurus</a><br>Made with <span style="color: red;">❤️</span> by <a href="https://github.com/realdarek">@realdarek</a><br> Copyright © ${new Date().getFullYear()} <b>Magmastream</b>`,
		},
		prism: {
			theme: prismThemes.oneLight,
			darkTheme: prismThemes.oneDark,
		},
		algolia: {
			appId: '0DINHQMAE4',
			apiKey: '1fc388650de4bef4176d19c8ee8a654c',
			indexName: 'magmastream',
			contextualSearch: true,
		},
	},
};

export default config;
