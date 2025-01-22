# Stats

<br/><br/><br/>

:::danger
🚨 THIS DOCUMENTATION IS FOR VERSION =\<2.6.1. WE RECOMMEND USING THE LATEST VERSION FOR SUPPORT REASONS. WE ALSO WARN THAT THIS OLDER DOCUMENTATION MAY NOT BE COMPLETE OR POORLY READABLE.
:::

<br/><br/><br/>

#### CPUStats

| Properties     | Type     | Description                             |
| -------------- | :------- | --------------------------------------- |
| `cores`        | `number` | `The core amount the host machine has.` |
| `lavalinkLoad` | `number` | `The lavalink load.`                    |
| `systemLoad`   | `number` | `The system load.`                      |

#### FrameStats

| Properties | Type     | Description                     |
| ---------- | :------- | ------------------------------- |
| `deficit`  | `number` | `The amount of deficit frames.` |
| `nulled`   | `number` | `The amount of nulled frames.`  |
| `sent`     | `number` | `The amount of sent frames.`    |

#### MemoryStats

| Properties   | Type     | Description                                |
| ------------ | :------- | ------------------------------------------ |
| `allocated`  | `number` | `The total allocated memory.`              |
| `free`       | `number` | `The free memory of the allocated amount.` |
| `reservable` | `number` | `The reservable memory.`                   |
| `used`       | `number` | `The used memory of the allocated amount.` |
