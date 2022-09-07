import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Todo } from './Todo';

const fixActWarnings = async () => {
  const promise = Promise.resolve();
  await act(() => promise);
};

test('loads and displays hello todo', async () => {
  render(<Todo />);
  expect(screen.getByTestId('hello')).toHaveTextContent('hello todo');
  fixActWarnings();
});
