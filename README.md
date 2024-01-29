
# useMouseLocation Hook
[View Demo](https://usemouselocation.vercel.app/)
## Description

   This is a simple react hook that returns the cursor coordinates.

### How to install

```bash
npm i use-mouse-location
yarn add use-mouse-location
pnpm add use-mouse-location
bun add use-mouse-location
```
### Quickstart

```javascript

import { useMouseLocation } from 'use-mouse-location'
function App() {
  const { x, y } = useMouseLocation();
  return (
    <div>
      {x + ' ' + y}
    </div>
  )
}

export default App

```
