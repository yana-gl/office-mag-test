import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../b-pages/home/home';
import { FormPage } from '../../b-pages/form/formPage';

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '*', element: <Home/> },
    { path: '/text', element: <Home/> },
    { path: '/form', element: <FormPage/> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
