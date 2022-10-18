import React from 'react';
import './styles/App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Map, mapLoader} from "./pages/Map";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Map/>} loader={mapLoader}/>
))

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
