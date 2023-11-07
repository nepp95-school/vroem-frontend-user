import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { Articles } from "./Pages/Articles";
import { Home } from "./Pages/Home";
import { Login } from './Pages/Login';

export class Routes extends React.Component
{
    render()
    {
        return (
            <ReactRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/Artikelen' element={<Articles />} />
                <Route path='/Inloggen' element={<Login />} />
            </ReactRoutes>
        );
    }
}