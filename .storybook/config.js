import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import { jsxDecorator } from 'storybook-addon-jsx';

import results from '../.jest-test-results.json';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(jsxDecorator);

addDecorator(
  withTests({
    results,
  })
);
