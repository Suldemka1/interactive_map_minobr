import React, {useEffect} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import {useLoaderData} from "react-router-dom";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { MarkerCluster } from "leaflet";
import Polygons from "../components/polygons";
import CustomPopup from "../components/CustomPopup";
import Controls from "../components/controls";
import {useSelector} from "react-redux";
import "leaflet/dist/leaflet.css";
import "../styles/App.css";

const Map = () => {
    const mapData = useLoaderData()
    const state = useSelector((state) => state.types)

    const filteredGroup = () => {
        let regex = []

        if (state.podved) regex.push('podved')
        if (state.spo) regex.push('spo')
        if (state.school) regex.push('school')
        if (state.dop) regex.push('dop')
        if (state.dou) regex.push('dou')

        if (!state.school && !state.spo && !state.dop && !state.podved && !state.dou && !state.trosta && !state['cos'] && !state.itcube && !state.kvant && state.mastery != null) {
            regex.push('\o')
            regex = new RegExp(regex).exec()
            return regex
        } else {
            regex = regex.join('|')
            regex = new RegExp(regex)
            return regex
        }
    }

    const filteredGroupByProps = () => {
        const props = []

        if (state.trosta) {
            props.push('trosta')
        }
        if (state['cos']) {
            props.push('cos')
        }
        if (state.kvant) {
            props.push('kvant')
        }
        if (state.itcube) {
            props.push('itcube')
        }
        if (state.mastery) {
            props.push('mastery')
        }

        return props
    }

    useEffect(() => {
        filteredGroup()
    }, [state.podved, state.spo, state.school, state.dop, state.dou])

    const filterOrgByType = () => {
        let result = []

        if (state.podved || state.spo || state.school || state.dop || state.dou) {
            result = mapData.organizations.filter((item) => item.type.match(filteredGroup()))
            return result
        } else {
            result = mapData.organizations.filter((item) => {
                let expression = ''

                filteredGroupByProps().map((item) => {
                    expression = item
                    return expression
                })
                return item[expression]
            })
            return result
        }
    }

    const renderAllOrganizations = filterOrgByType().map((item) => <CustomPopup key={item.id} data={item}/>)

    // eslint-disable-next-line
    const createClusterCustomIcon = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'custom-marker-cluster',
            iconSize: L.point(33, 33, true),
        })
    }

    return (
        <MapContainer
            className="main"
            center={[51.9, 93.4]}
            zoom={6}
            scrollWheelZoom={true}
            doubleClickZoom={false}
            bounds={mapData.polygons}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                opacity={1}
            />

            <Controls/>

            <MarkerClusterGroup
                iconCreateFunction={createClusterCustomIcon}
                // maxClusterRadius={50}
                spiderfyOnMaxZoom={true}
                polygonOptions={{
                    fillColor: '#ffffff',
                    color: '#282c34',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8,
                }}
                showCoverageOnHover={true}
                chunkedLoading
            >
                {renderAllOrganizations}
            </MarkerClusterGroup>

            <Polygons data={mapData.polygons}/>
        </MapContainer>
    )
};


// предзагрузка данных
const mapLoader = async () => {

    const mapdata = {
        organizations: [],
        polygons: null
    }

    const polygons = await fetch('http://95.167.178.158:3000/api/polygons')
        .then(data => data.json())
    mapdata.polygons = polygons

    const organizations = await fetch('http://95.167.178.158:3000/api/datalist')
        .then(data => data.json())
    mapdata.organizations = organizations

    return mapdata
}

export {Map, mapLoader} ;