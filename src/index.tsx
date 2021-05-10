import React from 'react';
import useAsyncEffect from 'use-async-effect';
import useForceUpdate from 'use-force-update';

export interface IntervalRerendererProps {
  duration: number;
  render: () => React.ReactNode;
}

const IntervalRerenderer: React.FC<IntervalRerendererProps> = ({
  duration,
  render,
}) => {
  const forceUpdate = useForceUpdate();

  useAsyncEffect((isMounted) =>
    setTimeout(() => {
      if (isMounted()) {
        forceUpdate();
      }
    }, duration)
  );

  return <>{render()}</>;
};

export default React.memo(IntervalRerenderer);
