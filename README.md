# react-interval-rerenderer

![License](https://shields.io/apm/l/react-interval-rerenderer?style=flat-square)
![Version](https://shields.io/npm/v/react-interval-rerenderer?style=flat-square)
![Bundle size](https://shields.io/bundlephobia/minzip/react-interval-rerenderer?style=flat-square)

A React component for rerendering elements at set intervals.
Similar to [`react-interval-rerender`](https://github.com/jcoreio/react-interval-rerender), but has TypeScript definitions and different syntax.

# Installation

`yarn add react-interval-rerenderer`

# Usage

```tsx
import IntervalRerenderer from 'react-interval-rerenderer';

const Time: React.FC = () => (
  <IntervalRerenderer duration={100} render={Date.now} />
);
```

# Props

## `duration: number`

The duration of rerender intervals in milliseconds.

## `render: () => React.ReactNode`

Returns the content to be rendered.
