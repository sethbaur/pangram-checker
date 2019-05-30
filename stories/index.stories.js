import React from 'react';

import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import Checker from '../src/components/checker';
import MissingLetters from '../src/components/missing-letters';

const pangram = 'The quick brown fox jumps over the lazy dog.';
const partial = 'The quick brown fox';

storiesOf('Checker', module)
  .addParameters({ jest: ['checker.test.js'] })
  .add('initial state', () => <Checker />)
  .add('valid', () => <Checker text={pangram} />);

storiesOf('Missing letters', module)
  .addParameters({ jest: ['missing-letters.test.js'] })
  .add('initial state', () => <MissingLetters text="" />)
  .add('partial pangram', () => <MissingLetters text={partial} />);
