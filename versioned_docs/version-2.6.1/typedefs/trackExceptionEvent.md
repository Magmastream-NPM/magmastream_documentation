# TrackExceptionEvent

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

### Overview

| Properties  | Type                    | Value                 |
| ----------- | ----------------------- | --------------------- |
| `exception` | [Exception](#exception) |                       |
| `guildId`   | `string`                |                       |
| `op`        |                         | `event`               |
| `type`      |                         | `TrackExceptionEvent` |

### Exception

> | Properties | Type                  |
> | ---------- | --------------------- |
> | cause      | string                |
> | message    | string                |
> | severity   | [Severity](#severity) |

### Severity

> **Value:** `common` `suspicious` `fault`
