import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import IntervalRerenderer from '../index';

// Interval child component
const IntervalChildComponent: React.FC = () => {
  const renderCount = useRef(0);
  renderCount.current++;

  return <p data-testid='renderCount'>{renderCount.current}</p>;
};

// Interval test component
interface IntervalTestComponentProps {
  duration?: number;
}

const IntervalTestComponent: React.FC<IntervalTestComponentProps> = ({
  duration = 1000,
}) => (
  <IntervalRerenderer
    duration={duration}
    render={() => <IntervalChildComponent />}
  />
);

// Tests
jest.useFakeTimers();

function advanceTimers(milliseconds: number) {
  act(() => jest.advanceTimersByTime(milliseconds));
}

function expectRenderCount(count: number) {
  expect(screen.getByTestId('renderCount')).toHaveTextContent(String(count));
}

test('no early rerender', () => {
  render(<IntervalTestComponent />);
  advanceTimers(950);
  expectRenderCount(1);
});

test('multiple renders', () => {
  render(<IntervalTestComponent />);
  advanceTimers(1000);
  expectRenderCount(2);

  advanceTimers(1200);
  expectRenderCount(3);
});

test('dynamic duration', () => {
  const { rerender } = render(<IntervalTestComponent duration={500} />);
  advanceTimers(560);
  expectRenderCount(2);

  rerender(<IntervalTestComponent duration={20} />);
  advanceTimers(50);
  expectRenderCount(5);
});
