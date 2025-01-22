# SearchResult

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Properties | Type                           | Description                                                  |
| ---------- | ------------------------------ | ------------------------------------------------------------ |
| `loadType` | [LoadType](#loadtype)          | The load type of the result.                                 |
| `tracks`   | [`Track[]`](../typedefs/track) | If load type is `track` or `search`, return array of tracks. |
| `playlist` | [PlaylistData](#playlistdata)  | If load type is `playlist`, the resulting playlist data.     |

### LoadType

> Value: `track` `playlist` `search` `empty` `error`

### PlaylistData

| Properties | Type                           | Description                             |
| ---------- | ------------------------------ | --------------------------------------- |
| `name`     | `string`                       | `The playlist name.`                    |
| `duration` | `number`                       | `The length of the playlist.`           |
| `tracks`   | [`Track[]`](../typedefs/track) | `An array of tracks from the playlist.` |
