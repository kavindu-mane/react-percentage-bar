# <p align = "center">React Percentage Bar</p>
<div align = "center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kavindu-mane/react-percentage-bar">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-percentage-bar">
<img alt="GitHub" src="https://img.shields.io/github/license/kavindu-mane/react-percentage-bar?color=success">
<img alt="npm" src="https://img.shields.io/npm/v/react-percentage-bar?label=npm%20version">
</div>

## Installation
_Install with npm:_

```bash
npm i react-percentage-bar
```
    
## Usage
 _Import the progress bar components:_

```javascript
import { CircularProgressBar } from "react-percentage-bar";
import { LinearProgressBar } from "react-percentage-bar";
```
Now you can use both components like bellow.

 _Use with default styles:_
 
 ```jsx
<CircularProgressBar/>
 ```
  ```jsx
<LinearProgressBar/>
 ```
 
  _Use with props:_
 
 ```jsx
<CircularProgressBar
  size={"2rem"}
  radius={"10rem"}
  roundLineCap={false}
  styles="separators"
  text={"Python"}
/>
```

 ```jsx
<LinearProgressBar
  percentage={90}
  percentagePosition={"onright"}
  text={"Python"}
  percentageColor={"white"}
/>
```

## Props
#### _Common props:_

This props are work with both `<CircularProgressBar/>` and `<LinearProgressBar/>`.

| Name                  | Description                                                        | Default   | Req. Data Types            |
|-----------------------|--------------------------------------------------------------------|-----------|----------------------------|
| `text`                | Text to display inside the component.                              | `null`    | `string`                   |
| `textClass`           | Custom CSS class for styling the `text` value.                     | `null`    | `string`                   | 
| `percentage`          | Percentage of the progress bar.                                    | `75`      | `number`                   |
| `showPercentage`      | Percentage value show or not inside component.                     | `true`    | `boolean`                  |
| `color`               | Color or color gradient of progress bar.                           | `#0ea5e9` | `string` or `string array` |
| `trackColor`          | Color of the progress bar track.                                   | `#efefef` | `string`                   |
| `duration`            | Forward animation total duration in `ms`. 1% get `duration / 100`  | `2000`    | `number`                   |
| `animation`           | Progress bar animated or not.                                      | `true`    | `boolean`                  |
| `percentageAnimation` | Presentage value animated or not.                                  | `true`    | `boolean`                  |
| `roundLineCap`        | Progress bar start and end points rounded or not.                  | `true`    | `boolean`                  |

#### _LinearProgressBar only props:_

This props are work with only `<LinearProgressBar/>` components.


| Name                  | Description                                                                                           | Default   | Req. Data Types         |
|-----------------------|-------------------------------------------------------------------------------------------------------|-----------|-------------------------|
| `percentageColor`     | Color of the `percentage` value.                                                                      | `#00235B` | `string`                |
| `width`               | Maximum width (100%) of the progress bar. It must be one of `number` , `em` , `px` , `rem` value.     | `20rem`   | `string` or `number`    | 
| `height`              | Height of the progress bar.It must be one of `number` , `em` , `px` , `rem` value.                    | `0.8rem`  | `string` or `number`    |
| `percentagePosition`  | Percentage value show position. Value must be one of `left` , `right` , `onleft` or `onright`         | `right`   | `string`                |
| `startDirection`      | Progress bar 0% based direction.It must be a `left` or `right`                                        | `left`    | `string`                |

#### _CircularProgressBar only props:_

This props are work with only `<CircularProgressBar/>` components.
