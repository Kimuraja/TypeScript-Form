import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Category from './components/Forms/Category';
import Product from './components/Forms/Product';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import './App.css'
import './i18n';

const router = createBrowserRouter([
  {path: '/', element: <Menu />},
  {path: '/product', element: <Product />},
  {path: '/category', element: <Category />},
])

export default function App() {
  return (
    <>
      <div className="language">
        <LanguageSwitcher />
      </div>
      <RouterProvider router={router}/>
    </>
  )
}

