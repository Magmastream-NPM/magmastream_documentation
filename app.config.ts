export default defineAppConfig({
  docus: {
    title: 'Magmastream',
    titleTemplate: "Magmastream",
    description: 'Magmastream is an easy-to-use and useful music module for your discord app',
    url: 'https://docs.magmastream.com/',
    image: 'https://i.imgur.com/jeqFLp3.png',
    github: {
      edit: false,
      owner: "Blackfort-Hosting",
      repo: "magmastream",
      branch: "docs",
    },
    socials: {
      github: 'Magmastream-NPM/magmastream',
      discord: {
        label: 'Discord support server',
        icon: 'simple-icons:discord',
        href: 'https://discord.gg/Nq5gTGUfwa'
      }
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
