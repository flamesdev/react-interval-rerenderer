# react-interval-rerenderer

[![Version](https://img.shields.io/npm/v/react-interval-rerenderer?style=for-the-badge&labelColor=080808&color=f7f7f7)](https://www.npmjs.com/package/react-interval-rerenderer)
[![License](https://img.shields.io/npm/l/react-interval-rerenderer?style=for-the-badge&labelColor=080808&color=f7f7f7)](./LICENSE)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/react-interval-rerenderer?style=for-the-badge&labelColor=080808&color=f7f7f7)](https://bundlephobia.com/package/react-interval-rerenderer)

A React component for rerendering elements at set intervals.
Similar to [`react-interval-rerender`](https://github.com/jcoreio/react-interval-rerender) but has TypeScript definitions, different syntax, and a smaller bundle size.

## Installation

```
yarn add react-interval-rerenderer
```

## Usage

```tsx
import IntervalRerenderer from 'react-interval-rerenderer';

const Time: React.FC = () => (
  <IntervalRerenderer duration={1000} render={Date.now} />
);
```

## Props

### `duration: number`

The duration of rerender intervals in milliseconds.

### `render: () => React.ReactNode`

Returns the content to be rendered.
