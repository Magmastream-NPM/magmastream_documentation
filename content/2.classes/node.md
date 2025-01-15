# Node

### Constructor

::code-group

::code-block{label="Node" code}

```js
new Magmastream.Node(options: NodeOptions)
```

## Properties

| Options         | Type      | Description                                                                 |
|-----------------|:----------|-----------------------------------------------------------------------------|
| `host`          | `string`  | The host for the node.                                                      |
| `identifier`    | `string`  | The identifier for the node.                                                |
| `password`      | `string`  | The password for the node.                                                  |
| `port`          | `number`  | The port for the node.                                                      |
| `retryAmount`   | `number`  | How many tries connect to the node if connection failed.                    |
| `retryDelay`    | `number`  | Timeout to retry connecting to the node if connection failed.               |
| `resumeStatus`  | `boolean` | Whether to resume the previous session. If false music will halt instantly. |
| `resumeTimeout` | `number`  | The time the lavalink server will wait before it removes the player.        |
| `secure`        | `boolean` | Whether the host uses SSL.                                                  |
| `priority`      | `number`  | Set the priority level of your node.                                        |

::
::

## Overview

| Properties                  | Methods                                   |
|-----------------------------|:------------------------------------------|
| [manager](#manager)         | [connect](#connect)                       |
| [options](#options)         | [destroy](#destroy)                       |
| [socket](#socket)           | [fetchInfo](#fetchinfo)                   |
| [stats](#stats)             | [setSponsorBlock](#setsponsorblock)       |
| [connected](#get-connected) | [getSponsorBlock](#getsponsorblock)       |
| [address](#get-address)     | [deleteSponsorBlock](#deletesponsorblock) |
| [info](#info)               |                                           |

### Properties

#### • manager

> The main hub for interacting with Lavalink.
>
> | Type                          |
> | ----------------------------- |
> | [Manager](../classes/manager) |

#### • options

> The object that must be created to connect to a Lavalink server.
>
> | Type                        |
> | --------------------------- |
> | [NodeOptions](#constructor) |

#### • socket

> The socket for the node.
>
> | Type              |
> | ----------------- |
> | WebSocket or null |

#### • stats

> The stats for the node.
>
> | Properties     | Type                                         | Description                                |
> | -------------- | -------------------------------------------- | ------------------------------------------ |
> | cpu            | [CPUStats](../typedefs/stats#cpustats)       | The cpu stats for the node.                |
> | frameStats     | [FrameStats](../typedefs/stats#framestats)   | The frame stats for the node.              |
> | memory         | [MemoryStats](../typedefs/stats#memorystats) | The memory stats for the node.             |
> | players        | number                                       | The amount of players on the node.         |
> | playingPlayers | number                                       | The amount of playing players on the node. |
> | uptime         | number                                       | The uptime for the node.                   |

#### • `get` connected

> Whether the node is connected.
>
> | Type    |
> | ------- |
> | boolean |

#### • `get` address

> Returns the address for this node.
>
> | Type   |
> |--------|
> | string |

#### • info

> Actual Lavalink information of the node.
>
> | Type                                             |
> |--------------------------------------------------|
> | [LavalinkInfo](../typedefs/LavalinkInfo) or null |

### Methods

#### • connect()

> Connects to the Node.
>
> Returns: `void`

#### • destroy()

> Destroys the Node and all players connected with it.
> 
> Returns: `void`

#### • fetchInfo()

> Fetch information about lavalink in this node
> 
> Returns: Promise<[LavalinkInfo](../typedefs/lavalinkinfo)>

#### • setSponsorBlock()

> Sets the sponsorblock for the player.
> 
> Returns: `Promise<void>`
>
> | Parameter | Type                                                     |
> |-----------|----------------------------------------------------------|
> | player    | [Player](../classes/player)                              |
> | segments  | [SponsorBlockSegment](../typedefs/sponsorblocksegment)[] |

#### • getSponsorBlock()

> Gets the sponsorblock for the player.
> 
> Returns Promise<[SponsorBlockSegment](../typedefs/sponsorblocksegment)>
>
> | Parameter | Type                                                     |
> |-----------|----------------------------------------------------------|
> | player    | [Player](../classes/player)                              |
> | segments  | [SponsorBlockSegment](../typedefs/sponsorblocksegment)[] |

#### • deleteSponsorBlock()

> Deletes the sponsorblock for the player.
>
> Returns: `Promise<void>`
> 
> | Parameter | Type                                                     |
> |-----------|----------------------------------------------------------|
> | player    | [Player](../classes/player)                              |