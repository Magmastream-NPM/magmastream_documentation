# TrackData

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Properties   | Type                            | Description                                |
| ------------ | ------------------------------- | ------------------------------------------ |
| `encoded`    | `string`                        | The base64 encoded track.                  |
| `info`       | [TrackDataInfo](#trackdatainfo) | The detailed information of the track.     |
| `pluginInfo` | `Record\<string, string>`        | Additional track info provided by plugins. |

## TrackDataInfo

| Properties   | Type      |
| ------------ | --------- |
| `author`     | `string`  |
| `identifier` | `string`  |
| `isSeekable` | `boolean` |
| `isStream`   | `boolean` |
| `length`     | `number`  |
| `title`      | `string`  |
| `uri`        | `string`  |
| `artworkUrl` | `string`  |
| `sourceName` | `string`  |
