import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../b-pages/home/home';
import { FormPage } from '../../b-pages/form/formPage';
import { JustButtons } from '../../b-pages/justButtons/justButtons';
import { Scheme } from '../../b-pages/scheme/scheme';
import { Slider } from '../../b-pages/slider/slider';
import { Beauty } from '../../b-pages/beauty/beauty';

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '*', element: <Home/> },
    { path: '/text', element: <Home/> },
    { path: '/form', element: <FormPage/> },
    { path: '/buttons', element: <JustButtons/> },
    { path: '/scheme', element: <Scheme/> },
    { path: '/slider', element: <Slider/> },
    { path: '/beauty', element: <Beauty/> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
