# Filters

## Constructor

::code-group

::code-block{label="Filters" code}

```js
new Magmastream.Filters(player: Player)
```

#### Properties

| :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="fluent:text-description-16-filled" width="18" height="18" color="white"} Description |
|:------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
| `player`                                                                      | [Player](../classes/player)                                                            | The guild player                                                                                 |

::
::

#### Table of Contents

| :icon{name="carbon:pen" width="18" height="18" color="white"} Properties | :icon{name="carbon:carbon" width="18" height="18" color="white"} Methods | 
|--------------------------------------------------------------------------|:-------------------------------------------------------------------------|
| [distortion](#distortion)                                                | [bassBoost()](#bassboost)                                                |
| [equalizer](#equalizer)                                                  | [clearFilters()](#clearfilters)                                          |
| [karaoke](#karaoke)                                                      | [distort()](#distart)                                                    |
| [player](#player)                                                        | [eightD()](#eightd)                                                      |
| [rotation](#rotation)                                                    | [getFilterStatus()](#getfilterstatus)                                    |
| [timescale](#timescale)                                                  | [setDistortion()](#setdistortion)                                        |
| [vibrato](#vibrato)                                                      | [setEqualizer()](#setequalizer)                                          |
| [volume](#volume)                                                        | [setKaraoke()](#setkaraoke)                                              |
|                                                                          | [setRotation()](#setrotation)                                            |
|                                                                          | [setTimescale()](#settimescale)                                          |
|                                                                          | [setVibrato()](#setvibrato)                                              |
|                                                                          | [slowmo()](#slowmo)                                                      |
|                                                                          | [soft()](#soft)                                                          |
|                                                                          | [trebleBass()](#treblebass)                                              |
|                                                                          | [tv()](#tv)                                                              |
|                                                                          | [vaporwave()](#vaporwave)                                                |


## Properties

### • distortion

> Get distortion settings
>
>  Returns: [`DistortionOptions{}`](#distortionoptions) \| `null`

### • equalizer

> Get equalizer settings
> 
> Returns: [`Band[]`](../typedefs/band)

### • karaoke

> Get karaoke settings
>
> Returns: [`KaraokeOptions{}`](#karaokeoptions) \| `null`

### • player

> Get player
>
> Returns: [`Player`](../classes/player)

### • rotation

> Get rotation settings
>
> Returns: [`RotationOptions{}`](#rotationoptions) \| `null`

> ### • timescale

> Get timescale settings
>
> Returns: [`TimescaleOptions{}`](#timescaleoptions) \| `null`

### • vibrato

> Get vibrato settings
>
> Returns: [`VibratoOptions{}`](#vibratooptions) \| `null`

### • volume

> Get volume
>
> Returns: `number`

## Methods

### • bassBoost()

> Applies the bass boost effect.
>
> Returns: [`this`](#properties-1)

### • clearFilters()

> Removes the audio effects and resets the filters status.
>
> Returns: [`Promise<this>`](#properties-1)

### • distort()

> Applies the distortion audio effect.
>
> Returns: [`this`](#properties-1)

### • eightD()

> Applies the eight dimension audio effect.
>
> Returns: [`this`](#properties-1)

### • getFilterStatus()

> Returns the status of the specified filter.
>
> Returns: [`this`](#properties-1)
>
> | :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="icon-park-solid:optional" width="18" height="18" color="white"} Optional |
> |-------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
> | `filter`                                                                        | [`AvailableFilters`](#availablefilters)                                                | :icon{name="fa6-solid:xmark" width="22" height="22" color="white"}                   |

### • nightcore()

> Applies the nightcore effect.
>
> Returns: [`this`](#properties-1)

### • setDistortion()

> Applies the distortion options specified by the filter.
>
> Returns: [`this`](#properties-1)
>
> | :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="icon-park-solid:optional" width="18" height="18" color="white"} Optional |
> |-------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
> | `distortion`                                                                    | [`DistortionOptions{}`](#distortionoptions)                                            | :icon{name="fa6-solid:xmark" width="22" height="22" color="white"}                   |

### • setEqualizer()

> Sets the equalizer bands and updates the filters.
>
> Returns: [`this`](#properties-1)
>
> | :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="icon-park-solid:optional" width="18" height="18" color="white"} Optional |
> |-------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
> | `bands`                                                                         | [`Band[]`](../typedefs/band)                                                           | :icon{name="fa6-solid:xmark" width="22" height="22" color="white"}                   |

### • setKaraoke()

> Applies the karaoke options specified by the filter.
>
> Returns: [`this`](#properties-1)
> 
> | :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="icon-park-solid:optional" width="18" height="18" color="white"} Optional |
> |-------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
> | `karaoke`                                                                       | [`KaraokeOptions{}`](#karaokeoptions)                                                  | :icon{name="fa6-solid:xmark" width="22" height="22" color="white"}                   |

### • setTimescale()

> Applies the timescale options specified by the filter.
>
> Returns: [`this`](#properties-1)
>
> | :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="icon-park-solid:optional" width="18" height="18" color="white"} Optional |
> |-------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
> | `timescale`                                                                     | [`TimescaleOptions{}`](#timescaleoptions)                                              | :icon{name="fa6-solid:xmark" width="22" height="22" color="white"}                   |

### • setVibrato()

> Applies the vibrato options specified by the filter.
>
> Returns: [`this`](#properties-1)
>
> | :icon{name="carbon:parameter" width="18" height="18" color="white"} Parameter | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="icon-park-solid:optional" width="18" height="18" color="white"} Optional |
> |-------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
> | `vibrato`                                                                       | [`VibratoOptions{}`](#vibratooptions)                                                  | :icon{name="fa6-solid:xmark" width="22" height="22" color="white"}                   |

### • slowmo()

> Applies the slow motion audio effect.
>
> Returns: [`this`](#properties-1)

### • soft()

> Applies the soft audio effect.
>
> Returns: [`this`](#properties-1)

### • trebleBass()

> Applies the treble bass effect.
>
> Returns: [`this`](#properties-1)

### • tv()

> Applies the television audio effect.
>
> Returns: [`this`](#properties-1)

### • vaporwave()

> Applies the vaporwave effect.
>
> Returns: [`this`](#properties-1)

## Filter Options

### • AvailableFilters

> `bassboost` `distort` `eightD` `karaoke` `nightcore` `slowmo` `soft` `trebleBass` `tv` `vaporwave`

### • DistortionOptions{}

> Options for applying distortion effect to audio.
> 
> | :icon{name="carbon:pen" width="18" height="18" color="white"} Properties | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="fluent:text-description-16-filled" width="18" height="18" color="white"} Description |
> |--------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
> | `sinOffset`                                                                | number                                                                                 | The offset value for the sine wave distortion.                                                   |
> | `sinScale`                                                                 | number                                                                                 | The scale factor for the sine wave distortion.                                                   |
> | `cosOffset`                                                                | number                                                                                 | The offset value for the cosine wave distortion.                                                 | 
> | `cosScale`                                                                 | number                                                                                 | The scale factor for the cosine wave distortion.                                                 | 
> | `tanOffset`                                                                | number                                                                                 | The offset value for the tangent wave distortion.                                                |
> | `tanScale`                                                                 | number                                                                                 | The scale factor for the tangent wave distortion.                                                | 
> | `offset`                                                                   | number                                                                                 | The general offset applied to the distortion effect.                                             |
> | `scale`                                                                    | number                                                                                 | The general scale factor applied to the distortion effect.                                       |

### • KaraokeOptions

> Options for applying karaoke effect to audio.
> 
> | :icon{name="carbon:pen" width="18" height="18" color="white"} Properties | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="fluent:text-description-16-filled" width="18" height="18" color="white"} Description |
> |--------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
> | `level`                                                                    | number                                                                                 | The level of karaoke effect.                                                                     |
> | `monoLevel`                                                                | number                                                                                 | The mono level of karaoke effect.                                                                |
> | `filterBand`                                                               | number                                                                                 | The filter band of karaoke effect.                                                               |
> | `filterWidth`                                                              | number                                                                                 | The filter width of karaoke effect.                                                              |

### • RotationOptions

> Options for applying rotation effect to audio.
> 
> | :icon{name="carbon:pen" width="18" height="18" color="white"} Properties | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="fluent:text-description-16-filled" width="18" height="18" color="white"} Description |
> |--------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
> | `rotationHz`                                                               | number                                                                                 | The rotation speed in Hertz (Hz).                                                                |

### • TimescaleOptions

> Options for adjusting the timescale of audio.
>
> | :icon{name="carbon:pen" width="18" height="18" color="white"} Properties | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="fluent:text-description-16-filled" width="18" height="18" color="white"} Description |
> |--------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
> | `speed`                                                                    | number                                                                                 | The speed factor for the timescale.                                                              |
> | `pitch`                                                                    | number                                                                                 | The pitch factor for the timescale.                                                              |
> | `rate`                                                                     | number                                                                                 | The rate factor for the timescale.                                                               |

### • VibratoOptions

> Options for applying vibrato effect to audio.
> 
> | :icon{name="carbon:pen" width="18" height="18" color="white"} Properties | :icon{name="material-symbols:type-specimen" width="18" height="18" color="white"} Type | :icon{name="fluent:text-description-16-filled" width="18" height="18" color="white"} Description |
> |--------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
> | `speed`                                                                    | number                                                                                 | The speed factor for the timescale.                                                              |
> | `pitch`                                                                    | number                                                                                 | The pitch factor for the timescale.                                                              |
> | `rate`                                                                     | number                                                                                 | The rate factor for the timescale.                                                               |


