import { screen, render } from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  it('shoud render', () => {
    render(App);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
