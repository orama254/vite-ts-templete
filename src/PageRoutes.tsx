import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './about';

import { HomePage } from './home';

import { RouteType }  from './types/routetypes';

const pageRoutes: RouteType[] = [{
    path: '/',
    Component: HomePage,
},
{
    path: '/about',
    Component: AboutPage,
}
];


export const PageRoutes = () => (
    <BrowserRouter>
            <Routes>
                {pageRoutes.map((pageRoute, index) => (
                    <Route 
                    key={index} 
                    path={pageRoute.path} 
                    element={<pageRoute.Component />}
                    />
                ))}
            </Routes>
        </BrowserRouter>

)
