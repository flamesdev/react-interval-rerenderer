# react-interval-rerenderer

[![License](https://shields.io/npm/l/react-interval-rerenderer?style=flat-square)](./LICENSE)
[![Version](https://shields.io/npm/v/react-interval-rerenderer?style=flat-square)](https://www.npmjs.com/package/react-interval-rerenderer)
[![Bundle size](https://shields.io/bundlephobia/minzip/react-interval-rerenderer?style=flat-square)](https://bundlephobia.com/result?p=react-interval-rerenderer)

A React component for rerendering elements at set intervals.
Similar to [`react-interval-rerender`](https://github.com/jcoreio/react-interval-rerender) but has TypeScript definitions, different syntax, and a smaller bundle size.

# Installation

`yarn add react-interval-rerenderer`

# Usage

```tsx
import IntervalRerenderer from 'react-interval-rerenderer';

const Time: React.FC = () => (
  <IntervalRerenderer duration={1000} render={Date.now} />
);
```

# Props

## `duration: number`

The duration of rerender intervals in milliseconds.

## `render: () => React.ReactNode`

Returns the content to be rendered.
