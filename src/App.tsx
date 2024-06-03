import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import './App.css'
import './i18n';

const router = createBrowserRouter([
  {path: '/', element: <Menu />},
  {path: '/product', element: <Product />},
  {path: '/category', element: <Category />}
])

export default function App() {
  return <RouterProvider router={router}/>
};

