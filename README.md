<div align = "center">
<img src = "https://github.com/kavindu-mane/react-percentage-bar/blob/main/rpb_cover.png" alt = "cover"/>
</div>
                                                                                                      
# <p align = "center">🚀 React Percentage Bar.</p>
<div align = "center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kavindu-mane/react-percentage-bar">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-percentage-bar">
<img alt="npm" src="https://img.shields.io/npm/v/react-percentage-bar?label=npm%20version">
<br/>
<img alt="GitHub" src="https://img.shields.io/github/license/kavindu-mane/react-percentage-bar?color=success">
<img alt="npm" src="https://img.shields.io/npm/dt/react-percentage-bar">
</div>


<br/>
<div align = "center">
<a href = "https://www.kavindu.me/projects/react-percentage-bar" alt = "demo" ><img src = "https://img.shields.io/badge/_DEMO_-%2303C988.svg?style=for-the-badge&&logoColor=white" alt = "demo"/></a>
 </div>
 
## Installation
_Install with npm:_

```bash
npm i react-percentage-bar
```

_Install with bun:_

```bash
bun add react-percentage-bar
```

_Install with yarn:_

```bash
yarn add react-percentage-bar
```

_Install with pnpm:_

```bash
pnpm add react-percentage-bar
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
| `textStyle`           | Add Custom styles for styling the `text` value.                    | `null`    | `object`                   | 
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


| Name                  | Description                                                            | Default   | Req. Data Types     |
|-----------------------|------------------------------------------------------------------------|-----------|---------------------|
| `percentageColor`     | Color of the `percentage` value.                                       | `#00235B` | `string`            |
| `width`               | Maximum width (100%) of the progress bar.★                             | `20rem`   | `string` or `number`| 
| `height`              | Height of the progress bar.★                                           | `0.8rem`  | `string` or `number`|
| `percentagePosition`  | Percentage value show position.★★                                      | `right`   | `string`            |
| `startDirection`      | Progress bar 0% based direction.Value must be a `left` or `right`      | `left`    | `string`            |


<b>❇️ NOTE :</b> 

> ★ All measurements must be one of `number` , `em` , `px` , `rem` value. <br/>
> ★★ Value must be one of `left` , `right` , `onleft` or `onright`


#### _CircularProgressBar only props:_

This props are work with only `<CircularProgressBar/>` components.

| Name               | Description                                                                                                                                 | Default                                           | Req. Data Types       |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|-----------------------|
| `radius`           | Radius value of the progress circle.★                                                                                                       | `5rem`                                            | `string` or `number`  |
| `styles`           | Progress circle style.★★                                                                                                                    | `solid`                                           | `string`              | 
| `size`             | Progress circle stroke width.★                                                                                                              | `1rem`                                            | `string` or `number`  |
| `startPosition`    | Progress circle 0% based position (0 is top most point). `+ values` clockwisely and `- values` anti-clockwisely change the start position.  | `0`                                               | `string` or `number`  |
| `shadow`           | Shadows add or not for progress circle.                                                                                                     | `false`                                           | `boolean`             |
| `innerShadowStyle` | Add Custom styles for progress circle inside shadow.                                                                                        | `null`                                            | `object`              |
| `outerShadowStyle` | Add Custom styles for progress circle outside shadow.                                                                                       | `null`                                            | `object`              |
| `percentageStyle`  | Add Custom styles for percentage value.                                                                                                     | `null`                                            | `object`              |
| `reverse`          | Progress circle reverse animation add or not.                                                                                               | `true`                                            | `boolean`             |
| `reverseDuration`  | Duration of the reverse animation.(follow `duration`prop constraints)                                                                       | `2000`                                            | `number`              |
| `loopCount`        | Progress circle animations iterations count.                                                                                                | `0`                                               | `number` or `Infinity`|
| `startDelay`       | Forward animation start delay. (Not affect to 1st iteration)                                                                                | `100`                                             | `number`              |
| `reverseDelay`     | Backward animation start delay.                                                                                                             | `100`                                             | `number`              |
| `antiClockWise`    | Progress circle `forward` direction is anti-clockwise or not.                                                                               | `false`                                           | `boolean`             |
| `padding`          | Gap between progress circle and background circle.                                                                                          | `0`                                               | `string` or `number`  |
| `backgroundColor`  | Color of the background circle.                                                                                                             | `transparent`                                     | `string`              |
| `separator`        | If `styles` is `separators` , customize separators width , count and color.✦                                                                | `[5, 12, "#fff"]`                                 | `array`               |
| `chartValue`       | If `styles` is `pie-chart` , customize sections end percentages and color.✦✦                                                                | `{ 20: "#9CB4CC", 60: "#0EA293", 100: "#FFA559" }`| `object`              |

<b>❇️ NOTE :</b> 

> ★ All measurements must be one of `number` , `em` , `px` , `rem` value. <br/>
> ★★ Value must be one of `solid` , `pie-chart` or `separators`<br/>
> ✦ `Separator` require array follow this format `[width , count , color]` <br/>
> ✦✦ `chartValue` require object follow this format `{percentage-1:color , percentage-2:color}`

## CircularProgressBar with children.
  
`<CircularProgressBar/>` component allows to work with childrens. It's allows to use more than `percentage` and `text` value inside the circular progress bar.

```jsx
<CircularProgressBar>
    <ChildrenComponent/>
<CircularProgressBar/>
```

## License

[![View License](https://img.shields.io/github/license/kavindu-mane/react-percentage-bar?color=success)](LICENSE)
