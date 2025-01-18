// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: '✨ Introduction',
      link: {
        type: "generated-index",
        description: "5 minutes to learn the most important Docusaurus concepts."
      },
      items: [
          'Introduction/getting-started',
          {
            type: 'category',
            label: '👀 Basics',
            link: {
              type: "generated-index",
              description: "5 minutes to learn the most important Docusaurus concepts."
            },
            items: [
              'Introduction/Basics/index-js',
              'Introduction/Basics/play-command'
            ],
          }
      ],
    }
  ],

  // But you can create a sidebar manually
  // tutorialSidebar: [
  //   {
  //     type: 'category',
  //     label: '✨ Introduction',
  //     items: ['getting-started'],
  //   },
  // ],
};

export default sidebars;
