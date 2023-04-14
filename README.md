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
