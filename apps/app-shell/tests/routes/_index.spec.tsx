import { createRoutesStub } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';
import { Home } from '../../app/routes/home';

test('renders loader data', async () => {
  const ReactRouterStub = createRoutesStub([
    {
      path: '/',
      Component: Home,
    },
  ]);

  render(<ReactRouterStub />);

  await waitFor(() => screen.findByText('Hello there,'));
});
