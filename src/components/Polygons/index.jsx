import React from 'react';
import {GeoJSON} from "react-leaflet";
import polygons from '../../data.json'

const Polygons = () => {

    const renderRepublicBoundaries = polygons.map(item => {
        return <GeoJSON key={item.id} data={item} style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 0.1,
        })}/>
    })

    return (
        <div>
            {renderRepublicBoundaries}
        </div>

    );
};

export default Polygons;