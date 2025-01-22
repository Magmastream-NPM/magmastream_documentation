# PlayerStateUpdateEvent

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Fields           | Type                                                                                                                                                                                                                                                                                                                                                             | Description                   |
|------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| `changeType`        | [PlayerStateEventType](#playerstateeventtype)                                                                                                                                                                                                                                                                                                                    | `Type of the change`          |
| `details`      | [AutoplayChangeEvent](#autoplaychangeevent) \| [ConnectionChangeEvent](#connectionchangeevent) \| [RepeatChangeEvent](#autoplaychangeevent)\<br/>[PauseChangeEvent](#pausechangeevent) \| [QueueChangeEvent](#queuechangeevent) \| [TrackChangeEvent](#trackchangeevent)\<br/>[VolumeChangeEvent](#volumechangeevent) \| [ChannelChangeEvent](#channelchangeevent) | `Change details`              |

### PlayerStateEventType

> Value: `playerAutoplay` `playerConnection` `playerRepeat` `playerPause` `playerCreate` `playerDestroy` `queueChange` `trackChange` `volumeChange` `channelChange`

### AutoplayChangeEvent

> | Fields             | Type      |
> |--------------------|:----------|
> | `previousAutoplay` | `boolean` |
> | `currentAutoplay`  | `boolean` |

### ConnectionChangeEvent

> | Fields               | Type                      |
> |----------------------|:--------------------------|
> | `changeType`         | [ChangeType](#changetype) |
> | `previousConnection` | `boolean`                 |
> | `currentConnection`  | `boolean`                 |

### RepeatChangeEvent

> | Fields           | Type                      |
> |------------------|:--------------------------|
> | `changeType`     | [ChangeType](#changetype) |
> | `previousRepeat` | `string` \| `null`        |
> | `currentRepeat`  | `string` \| `null`        |

### PauseChangeEvent

> | Fields          | Type                |
> |-----------------|:--------------------|
> | `previousPause` | `boolean` \| `null` |
> | `currentPause`  | `boolean` \| `null` |

### QueueChangeEvent

> | Fields       | Type                                                                              |
> |--------------|:----------------------------------------------------------------------------------|
> | `changeType` | [ChangeType](#changetype)                                                         |
> | `tracks`     | ([Track](../typedefs/track) \| [UnresolvedTrack](../typedefs/unresolvedtrack))\[] |

### TrackChangeEvent

> | Fields         | Type                           |
> |----------------|:-------------------------------|
> | `changeType`   | [ChangeType](#changetype)      |
> | `track`        | [Track](../typedefs/track)     |
> | `previousTime` | `number` \| `null`             |
> | `currentTime`  | `number` \| `null`             |

### VolumeChangeEvent

> | Fields           | Type               |
> |------------------|:-------------------|
> | `previousVolume` | `number` \| `null` |
> | `currentVolume`  | `number` \| `null` |

### ChannelChangeEvent

> | Fields            | Type                      |
> |-------------------|:--------------------------|
> | `changeType`      | [ChangeType](#changetype) |
> | `previousChannel` | `string` \| `null`        |
> | `currentChannel`  | `string` \| `null`        |

### ChangeType

> | PlayerStateEventType    | Type               | Value                                                                    |
> |-------------------------|:-------------------|:-------------------------------------------------------------------------|
> | `ConnectionChangeEvent` | `string`           | `connect` \| `disconnect`                                                |
> | `RepeatChangeEvent`     | `string` \| `null` | `dynamic` \| `track` \| `queue` \| `null`                                |
> | `QueueChangeEvent`      | `string`           | `add` \| `remove` \| `clear` \| `shuffle` \| `roundRobin` \| `userBlock` |
> | `ChannelChangeEvent`    | `string`           | `text` \| `voice`                                                        |