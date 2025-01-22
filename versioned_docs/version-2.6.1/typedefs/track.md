# Track

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Properties                | Methods                                   |
| ------------------------- | :---------------------------------------- |
| [author](#author)         | [displayThumbnail](#displaythumbnailsize) |
| [duration](#duration)     |                                           |
| [identifier](#identifier) |                                           |
| [isSeekable](#isSeekable) |                                           |
| [isStream](#isStream)     |                                           |
| [requester](#requester)   |                                           |
| [thumbnail](#thumbnail)   |                                           |
| [title](#title)           |                                           |
| [track](#track)           |                                           |
| [uri](#uri)               |                                           |
| [artworkUrl](#artworkurl) |                                           |
| [sourceName](#sourcename) |                                           |
| [customData](#customdata) |                                           |

### Properties

#### • author

> The author of the track.
>
> | Type   |
> | ------ |
> | string |

#### • duration

> The duration of the track.
>
> | Type   |
> | ------ |
> | number |

#### • identifier

> The identifier of the track.
>
> | Type   |
> | ------ |
> | string |

#### • isSeekable

> If the track is seekable.
>
> | Type    |
> | ------- |
> | boolean |

#### • isStream

> If the track is a stream.
>
> | Type    |
> | ------- |
> | boolean |

#### • requester

> The user that requested the track.
>
> | Type           |
> | -------------- |
> | string or null |

#### • thumbnail

> The thumbnail of the track or null if it's a unsupported source.
>
> | Type           |
> | -------------- |
> | string or null |

#### • title

> The title of the track.
>
> | Type   |
> | ------ |
> | string |

#### • track

> The base64 encoded track.
>
> | Type   |
> | ------ |
> | string |

#### • uri

> The uri of the track.
>
> | Type   |
> | ------ |
> | string |

#### • artworkUrl

> The image of the track.
>
> | Type   |
> | ------ |
> | string |

#### • sourceName

> The platform name that the track is from.
>
> | Type   |
> | ------ |
> | string |

#### • customData

> Add your own data to the track.
>
> | Type                     |
> | ------------------------ |
> | Record\<string, unknown> |

### Methods

#### • displayThumbnail(size)

> Displays the track thumbnail with optional size or null if it's a unsupported source.
>
> | Parameter       | Type            |
> | --------------- | --------------- |
> | `Optional` size | [Sizes](#sizes) |

### Sizes

> **Value:** `0` `1` `2` `3` `default` `mqdefault` `hqdefault` `maxresdefault`
