# Manager

Magmastream's Manager, the ultimate command post for unleashing the power of Lavalink like a boss, guaranteed to make you go "Whoa!" like the most mind-blowing meme.

### Constructor

::code-group

::code-block{label="Manager" code}

```js
new Magmastream.Manager(options: ManagerOptions)
```

## Properties

| Options                     | Type                                       | Description                                                                                                                                                                    |
|-----------------------------|:-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cliendId`                  | `string`                                   | The client ID to use.                                                                                                                                                          |
| `nodes`                     | [`nodeOptions[]`](../classes/node)         | The array of nodes to connect to.                                                                                                                                              |
| `autoPlay`                  | `boolean`                                  | Whether players should automatically play the next song.                                                                                                                       |
| `usePriority`               | `boolean`                                  | Whether to use priority mode for selecting nodes.                                                                                                                              |
| `useNode`                   | [useNodeOption](../typedefs/usenodeoption) | Which node should the manager use in first?                                                                                                                                    |
| `plugins`                   | [`plugin[]`](../classes/plugin)            | An array of plugins to use.                                                                                                                                                    |
| `trackPartial`              | `string[]`                                 | An array of track properties to keep. `track` will always be present.                                                                                                          |
| `defaultSearchPlatform`     | `string`                                   | The search platform to use to query songs.                                                                                                                                     |
| `replaceYouTubeCredentials` | `boolean`                                  | Whether the YouTube video titles should be replaced if the Author does not exactly match.                                                                                      |
| `lastFmApiKey`              | `string`                                   | The last.fm API key. If you need to create one go [here](https://www.last.fm/api/account/create) or if you already have one, get it from [here](https://www.last.fm/api/accounts) |
| `send`                      | [`function`](#send)                        | Function to send data to the websocket.                                                                                                                                        |

#### send

> Function to send data to the websocket.
> <br/>Returns: `void`
>
> | Parameter | Type                             |
> |-----------|:---------------------------------|
> | `id`      | `string`                         |
> | `payload` | [Payload{}](../typedefs/payload) |

::
::

## Overview

| Properties                        | Methods                               | Events                                  |
|-----------------------------------|:--------------------------------------|-----------------------------------------|
| [nodes](#nodes)                   | [create](#create)                     | [debug](#debug)                         |
| [options](#options)               | [createNode](#createnode)             | [nodeCreate](#nodecreate)               |
| [players](#players)               | [decodeTrack](#decodetrack)           | [nodeDestroy](#nodedestroy)             |
| [useableNodes](#get-useablenodes) | [decodeTracks](#decodetracks)         | [nodeConnect](#nodeconnect)             |
|                                   | [destroy](#destroy)                   | [nodeReconnect](#nodereconnect)         |
|                                   | [destroyNode](#sdestroynode)          | [nodeDisconnect](#nodedisconnect)       |
|                                   | [get](#get)                           | [nodeError](#nodeerror)                 |
|                                   | [init](#init)                         | [nodeRaw](#noderaw)                     |
|                                   | [search](#search)                     | [playerCreate](#playercreate)           |
|                                   | [updateVoiceState](#updatevoicestate) | [playerDestroy](#playerdestroy)         |
|                                   |                                       | [playerStateUpdate](#playerstateupdate) |
|                                   |                                       | [playerMove](#playermove)               |
|                                   |                                       | [playerDisconnect](#playerdisconnect)   |
|                                   |                                       | [queueEnd](#queueend)                   |
|                                   |                                       | [trackStart](#trackstart)               |
|                                   |                                       | [trackEnd](#trackend)                   |
|                                   |                                       | [trackStuck](#trackstuck)               |
|                                   |                                       | [trackError](#trackerror)               |
|                                   |                                       | [socketClosed](#socketclosed)           |
|                                   |                                       | [playerStateUpdate](#playerstateupdate) |
|                                   |                                       | [segmentsLoaded](#segmentsloaded)       |
|                                   |                                       | [segmentSkipped](#segmentskipped)       |
|                                   |                                       | [chapterStarted](#chapterstarted)       |
|                                   |                                       | [chaptersLoaded](#chaptersloaded)       |

### Properties

#### • nodes

> The map of nodes.
>
> | Type                                        | Value                          |
> | ------------------------------------------- | :----------------------------- |
> | Collection<string, [Node](../classes/node)> | new Collection<string, [Node](../classes/node)>() |

#### • options

> The options that were set.
>
> | Type                           |
> |--------------------------------|
> | [ManagerOptions](#constructor) |

#### • players

> The map of players.
>
> | Type                                            | Value                                                 |
> |-------------------------------------------------|:------------------------------------------------------|
> | Collection<string, [Player](../classes/player)> | new Collection<string, [Player](../classes/player)>() |

#### • `get` useableNodes

> | Type                    |
> | ----------------------- |
> | [Node](../classes/node) |

### Methods

#### • create()

> Creates a player or returns one if it already exists.
>
> Returns: [Player](../classes/player)
>
> | Parameter | Type                                           |
> | --------- | :--------------------------------------------- |
> | options   | [PlayerOptions](../classes/player#constructor) |

#### • createNode()

> Creates a node or returns one if it already exists.
>
> Returns: [Node](../classes/node)
>
> | Parameter | Type                                       |
> | --------- | :----------------------------------------- |
> | options   | [NodeOptions](../classes/node#constructor) |

#### • decodeTrack()

> Decodes the base64 encoded track and returns a TrackData.
>
> Returns: Promise<[TrackData](../typedefs/trackdata)>
>
> | Parameter | Type   |
> | --------- | :----- |
> | track     | `string` |

#### • decodeTracks()

> Decodes the base64 encoded tracks and returns a TrackData array.
>
> Returns: Promise<[TrackData](../typedefs/trackdata)`[]`>
>
> | Parameter | Type       |
> | --------- |:-----------|
> | tracks    | `string[]` |

#### • destroy()

> Destroys a player if it exists.
>
> Returns: `void`
>
> | Parameter | Type   |
> | --------- | :----- |
> | guild     | `string` |

#### • destroyNode()

> Destroys a node if it exists.
>
> Returns: `void`
>
> | Parameter  | Type   |
> | ---------- | :----- |
> | identifier | `string` |

#### • get()

> Returns a player or undefined if it does not exist.
>
> Returns: [Player](../classes/player) | `undefined`
>
> | Parameter | Type   |
> | --------- | :----- |
> | guild     | `string` |

#### • init()

> Initiates the Manager.
>
> Returns: `this`
>
> | Parameter | Type   |
> | --------- | :----- |
> | clientId  | `string` |

#### • search()

> Searches the enabled sources based off the URL or the `source` property.
>
> Returns: Promise<[SearchResult](../typedefs/searchresult)>
>
> | Parameter            | Type                                               |
> | -------------------- |:---------------------------------------------------|
> | query                | [SearchQuery](../typedefs/searchquery) \| `string` |
> | `Optional` requester | `unknown`                                            |

#### • updateVoiceState()

> Sends voice data to the Lavalink server.
>
> Returns: `void`
>
> | Parameter | Type                                   |
> | --------- | :------------------------------------- |
> | data      | [VoicePacket](../typedefs/voicepacket) |

### Events

#### • debug

> Emitted when the Manager has a debug message.
>
> | Parameter | Type     |
> |-----------|:---------|
> | info      | `string` |

#### • nodeCreate

> Emitted when a Node is created.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeDestroy

> Emitted when a Node is destroyed.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeConnect

> Emitted when a Node connects.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeReconnect

> Emitted when a Node reconnects.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeDisconnect

> Emitted when a Node disconnects.
>
> | Parameter | Type                              |
> | --------- | :-------------------------------- |
> | node      | [Node](../classes/node)           |
> | reason    | `{ code: number , reason: string }` |

#### • nodeError

> Emitted when a Node has an error.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |
> | error     | `Error`                   |

#### • nodeRaw

> Emitted whenever any Lavalink event is received.
>
> | Parameter | Type    |
> | --------- | :------ |
> | payload   | `unknown` |

#### • playerCreate

> Emitted when a player is created.
>
> | Parameter | Type                        |
> | --------- | :-------------------------- |
> | player    | [Player](../classes/player) |

#### • playerDestroy

> Emitted when a player is destroyed.
>
> | Parameter | Type                        |
> | --------- | :-------------------------- |
> | player    | [Player](../classes/player) |

#### • playerStateUpdate

> Emitted when a player was updated.
>
> | Parameter | Type                                                         |
> |-----------|:-------------------------------------------------------------|
> | oldPlayer | [Player](../classes/player)                                  |
> | newPlayer | [Player](../classes/player)                                  |
> | event     | [PlayerStateUpdateEvent](../typedefs/playerstateupdateevent) |

#### • playerMove

> Emitted when a player is moved to a new voice channel.
>
> | Parameter  | Type                        |
> |------------| :-------------------------- |
> | player     | [Player](../classes/player) |
> | intChannel | string                      |
> | newChannel | string                      |

#### • playerDisconnect

> Emitted when a player is moved to a new voice channel.
>
> | Parameter  | Type                        |
> |------------| :-------------------------- |
> | player     | [Player](../classes/player) |
> | oldChannel | string                      |

#### • queueEnd

> Emitted when a player queue ends.
>
> | Parameter | Type                                                                         |
> |-----------|:-----------------------------------------------------------------------------|
> | player    | [Player](../classes/player)                                                  |
> | track     | [Track](../typedefs/track) \| [UnresolvedTrack](../typedefs/unresolvedtrack) |
> | payload   | [TrackEndEvent](../typedefs/trackendevent)                                   |

#### • trackStart

> Emitted when a track starts.
>
> | Parameter | Type                                           |
> | --------- | :--------------------------------------------- |
> | player    | [Player](../classes/player)                    |
> | track     | [Track](../typedefs/track)                     |
> | payload   | [TrackStartEvent](../typedefs/trackstartevent) |

#### • trackEnd

> Emitted when a track ends.
>
> | Parameter | Type                                       |
> | --------- | :----------------------------------------- |
> | player    | [Player](../classes/player)                |
> | track     | [Track](../typedefs/track)                 |
> | payload   | [TrackEndEvent](../typedefs/trackendevent) |

#### • trackStuck

> Emitted when a track gets stuck during playback.
>
> | Parameter | Type                                           |
> | --------- | :--------------------------------------------- |
> | player    | [Player](../classes/player)                    |
> | track     | [Track](../typedefs/track)                     |
> | payload   | [TrackStuckEvent](../typedefs/trackstuckevent) |

#### • trackError

> Emitted when a track has an error during playback.
>
> | Parameter | Type                                                   |
> | --------- | :----------------------------------------------------- |
> | player    | [Player](../classes/player)                            |
> | track     | [Track](../typedefs/track)                             |
> | payload   | [TrackExceptionEvent](../typedefs/trackexceptionevent) |

#### • socketClosed

> Emitted when a voice connection is closed.
>
> | Parameter | Type                                                     |
> | --------- | :------------------------------------------------------- |
> | player    | [Player](../classes/player)                              |
> | payload   | [WebSocketClosedEvent](../typedefs/websocketclosedevent) |

#### • segmentsLoaded

> Emitted when a track has loaded segments.
>
> | Parameter | Type                                                                 |
> | --------- | :------------------------------------------------------------------- |
> | player    | [Player](../classes/player)                                          |
> | track     | [Track](../typedefs/track)                                           |
> | payload   | [SponsorBlockSegmentsLoaded](../typedefs/sponsorblocksegmentsloaded) |

#### • segmentSkipped

> Emitted when a track has skipped a segment.
>
> | Parameter | Type                                                                 |
> | --------- | :------------------------------------------------------------------- |
> | player    | [Player](../classes/player)                                          |
> | track     | [Track](../typedefs/track)                                           |
> | payload   | [SponsorBlockSegmentSkipped](../typedefs/sponsorblocksegmentskipped) |

#### • chapterStarted

> Emitted when a track has started a chapter.
>
> | Parameter | Type                                                                 |
> | --------- | :------------------------------------------------------------------- |
> | player    | [Player](../classes/player)                                          |
> | track     | [Track](../typedefs/track)                                           |
> | payload   | [SponsorBlockChapterStarted](../typedefs/sponsorblockchapterstarted) |

#### • chaptersLoaded

> Emitted when a track has loaded chapters.
>
> | Parameter | Type                                                                 |
> | --------- | :------------------------------------------------------------------- |
> | player    | [Player](../classes/player)                                          |
> | track     | [Track](../typedefs/track)                                           |
> | payload   | [SponsorBlockChaptersLoaded](../typedefs/sponsorblockchaptersloaded) |