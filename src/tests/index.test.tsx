import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import IntervalRerenderer from '../index';

// Interval child component
const IntervalChildComponent: React.FC = () => {
  const renders = useRef(0);
  renders.current++;

  return <p data-testid='text'>{renders.current}</p>;
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

test('no early rerender', () => {
  render(<IntervalTestComponent />);
  act(() => jest.advanceTimersByTime(950));
  expect(screen.getByTestId('text')).toHaveTextContent('1');
});

test('repeated renders', () => {
  render(<IntervalTestComponent />);
  act(() => jest.advanceTimersByTime(1000));
  expect(screen.getByTestId('text')).toHaveTextContent('2');

  act(() => jest.advanceTimersByTime(1200));
  expect(screen.getByTestId('text')).toHaveTextContent('3');
});

test('dynamic duration', () => {
  const { rerender } = render(<IntervalTestComponent duration={500} />);
  act(() => jest.advanceTimersByTime(560));
  expect(screen.getByTestId('text')).toHaveTextContent('2');

  rerender(<IntervalTestComponent duration={20} />);
  act(() => jest.advanceTimersByTime(50));
  expect(screen.getByTestId('text')).toHaveTextContent('5');
});
