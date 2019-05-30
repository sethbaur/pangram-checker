import React from 'react';
import Checker from './checker';
import { render } from 'react-testing-library';

test('Checker shows valid message for complete pangram', () => {
  const pangram = 'The quick brown fox jumps over the lazy dog.';
  const { queryByText } = render(
    <Checker text={pangram} />
  );
  expect(queryByText(/Valid/)).toBeTruthy();
});

test('Checker shows invalid message for incomplete pangram', () => {
  const pangram = 'The quick brown frog jumps over the lazy dog.';
  const { queryByText } = render(
    <Checker text={pangram} />
  );
  expect(queryByText(/Invalid/)).toBeTruthy();
});
