

# Information

# CURRENT VERSION

You can find the files (for editing documentation) of the latest version in the **docs/\*** folder.

If you want to change the sidebar settings, take a peek at the sidebars.js file. There you can change the names of categories, etc. In the documentation files, on the other hand, you have the option to change the name of the page, example:

```
---
id: getting-started // id to use in sidebars.js
title: getting-started // title of the page
description: my document description // document description for category view
slug: /intro // url path
sidebar_position: 2 // position in sidebar
sidebar_label: 🚀 Getting started // name in sidebar
---
```

# THE REST OF THE VERSIONS

You can find the files (for editing documentation) of the latest version in the **versioned_docs/version-{version}/\*** folder.

The rest work very similarly with such exceptions:

- sidebar can be customized in **versioned_sidebars/version-{version}-sidebars.json**.

<br>

# Auto generated information from docusaurus:

## Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

