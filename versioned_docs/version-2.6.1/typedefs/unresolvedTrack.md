# UnresolvedTrack

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Properties                     | Methods             |
| ------------------------------ | :------------------ |
| [author](#optional-author)     | [resolve](#resolve) |
| [duration](#optional-duration) |                     |
| [title](#title)                |                     |

### Properties

#### • `Optional` author

> The author to search against.
>
> | Type   |
> | ------ |
> | string |

#### • `Optional` duration

> The duration to search within 1500 milliseconds of the results.
>
> | Type   |
> | ------ |
> | number |

#### • title

> The title to search against.
>
> | Type   |
> | ------ |
> | string |

### Methods

#### • resolve()

> The title to search against.
>
> | Description            | Returns          |
> | ---------------------- | ---------------- |
> | Resolves into a Track. | `Promise\<void>` |
