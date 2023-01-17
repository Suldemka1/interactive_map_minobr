import React from 'react';
import { Marker } from "react-leaflet";
import L from "leaflet";
import { useDispatch } from 'react-redux';
import { setData } from '../../store/slices/detailsSlice';
import { fetchData } from '../../store/slices/detailsSlice/service';

const ClusterMarker = (params) => {
    const dispatch = useDispatch()
    const customIcon = new L.Icon({
        iconUrl: require('../../location.png').default,
        iconSize: new L.Point(50, 50),
    })

    return (
        <Marker key={params.data.id} position={[params.data.k1, params.data.k2]} icon={customIcon} eventHandlers={{
            click: () => {
                dispatch(setData())
                dispatch(fetchData(params.data.id))
                console.log('marker clicked')
            }
        }}>
        </Marker>
    );
};

export default ClusterMarker;