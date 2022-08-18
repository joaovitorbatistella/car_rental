import React from 'react';
import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom';

import Home from './pages/Home';
import Cars from './pages/Cars';
import CreateCars from './pages/Cars/create';
import Brands from './pages/Brands';
import Models from './pages/Models';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars/create" element={<CreateCars />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/models" element={<Models />} />
            </Switch>
        </BrowserRouter>
    )
}