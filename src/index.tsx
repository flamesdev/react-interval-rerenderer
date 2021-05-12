import React, { memo, useEffect } from 'react';
import useForceUpdate from 'use-force-update';

export interface IntervalRerendererProps {
  /** The duration of rerender intervals in milliseconds. */
  duration: number;
  /** Returns the content to be rendered. */
  render: () => React.ReactNode;
}

const IntervalRerenderer: React.FC<IntervalRerendererProps> = ({
  duration,
  render
}) => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    const interval = setInterval(forceUpdate, duration);
    return () => clearInterval(interval);
  }, [duration]);

  return <>{render()}</>;
};

export default memo(IntervalRerenderer);
