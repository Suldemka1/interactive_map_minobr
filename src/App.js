import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Map, mapLoader} from "./pages/Map";
import Administration from "./pages/Administration";

const router = createBrowserRouter(createRoutesFromElements(
    <Route >
        <Route path={'/'} element={<Map/>} loader={mapLoader}/>,
        <Route path='/administration' element={<Administration />} loader={mapLoader} />
    </Route>
))

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
