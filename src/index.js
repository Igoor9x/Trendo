import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import User from './Pages/User';
import Favorites from './Pages/Favorites'
import CartShopping from './Pages/CartShopping'
import Produtos from './Pages/Produtos';
import NossaMarca from './Pages/NossaMarca';
import Contact from './Pages/Contact';
import ProdutoDetail from './Pages/ProdutoDetail';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path: 'produtos',
        element: <Produtos />,
      },
      {
        path: 'produto/:id',
        element: <ProdutoDetail />
      },
      {
        path: 'nossaMarca',
        element: <NossaMarca />

      },
      {
        path: 'contato',
        element: <Contact />
      },
      {
        path: 'favoritos',
        element: <Favorites />
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'carrinhoDeCompras',
        element: <CartShopping />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

