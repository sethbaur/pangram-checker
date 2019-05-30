import React from 'react';
import MissingLetters from './missing-letters';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const letters = 'abcdefghijklmnopqrstuvwxyz';

test('Missing letters should show all letters if text is empty', () => {
  const { container } = render(
    <MissingLetters text="" />
  );
  const missing = container.querySelectorAll('li');
  expect(missing.length).toBe(26);
});

test('Missing letters should show only missing letters for invalid pangram', () => {
  const invalidPangram = "The quick brown frog jumps over the lazy dog";
  const { container } = render(
    <MissingLetters text={invalidPangram} />
  );
  const missing = container.querySelectorAll('li');
  expect(missing.length).toBe(1);
  expect(missing[0].textContent).toBe('x');
});

test('Missing letters should show no letters for valid pangram', () => {
  const pangram = "The quick brown fox jumps over the lazy dog";
  const { container } = render(
    <MissingLetters text={pangram} />
  );
  const missing = container.querySelectorAll('li');
  expect(missing.length).toBe(0);
});
