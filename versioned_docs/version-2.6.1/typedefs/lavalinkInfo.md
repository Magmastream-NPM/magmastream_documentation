# LavalinkInfo

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Fields           | Type               | Description                   |
|------------------|:-------------------|-------------------------------|
| `version`        | [object](#version) | `Version information`         |
| `buildTime`      | `number`           | `Build time`                  |
| `git`            | [object](#git)     | `Git information`             |
| `jvm`            | `string`           | `Jvm information`             |
| `lavaplayer`     | `string`           | `Lavaplayer information`      |
| `sourceManagers` | `string[]`         | `Source managers`             |
| `filters`        | `string[]`         | `Enabled filters in lavalink` |
| `plugins`        | [object](#plugins) | `Enabled plugins in lavalink` |

### Version

| Fields       | Type     |
|--------------|:---------|
| `semver`     | `string` |
| `major`      | `number` |
| `minor`      | `number` |
| `patch`      | `number` |
| `preRelease` | `string` |

### Git

| Fields       | Type     |
|--------------|:---------|
| `branch`     | `string` |
| `commit`     | `string` |
| `commitTime` | `number` |

### Plugins

| Fields       | Type     |
|--------------|:---------|
| `name`       | `string` |
| `version`    | `string` |