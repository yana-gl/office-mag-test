import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../b-pages/home/home';
import { FormPage } from '../../b-pages/form/formPage';
import { JustButtons } from '../../b-pages/justButtons/justButtons';
import { Scheme } from '../../b-pages/scheme/scheme';
import { Slider } from '../../b-pages/slider/slider';
import { Beauty } from '../../b-pages/beauty/beauty';
import { BlackPage } from '../../b-pages/blackPage/blackPage';
import { Text } from '../../b-pages/text/text';

const router = createHashRouter([
    { path: '/', element: <Home/> },
    { path: '*', element: <Home/> },
    { path: '/text', element: <Text/> },
    { path: '/form', element: <FormPage/> },
    { path: '/buttons', element: <JustButtons/> },
    { path: '/scheme', element: <Scheme/> },
    { path: '/slider', element: <Slider/> },
    { path: '/beauty', element: <Beauty/> },
    { path: '/black-page', element: <BlackPage/> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
