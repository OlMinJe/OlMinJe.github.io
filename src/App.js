import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from 'app/components/Layout';
import ErrorPage from 'app/pages/Error';
import Main from 'app/pages/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ path: '', element: <Main /> }],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </RouterProvider>
  );
};

export default App;
