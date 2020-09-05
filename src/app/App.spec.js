import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  it('shoud render', () => {
    render(App);
    screen.debug();
  });
});
