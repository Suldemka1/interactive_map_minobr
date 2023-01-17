import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import MarkerClusterGroup from "react-leaflet-cluster";
import Polygons from "../components/Polygons";
import ClusterMarker from "../components/Marker";
import Controls from "../components/Controls";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoPopup from '../components/InfoPopup';
import ClusterIcon from '../components/ClusterIcon';

const Map = () => {

    const details = useSelector((state) => state.details)
    const mobile = useSelector((state) => state.mobile)
    const mapData = useLoaderData()
    const state = useSelector((state) => state.types)

    const { podved, spo, school, dop, dou, trosta, cos, itcube, kvant, mastery } = state

    const filteredGroup = () => {
        let regex = []

        if (podved) regex.push('podved')
        if (spo) regex.push('spo')
        if (school) regex.push('school')
        if (dop) regex.push('dop')
        if (dou) regex.push('dou')

        if (!school && !spo && !dop && !podved && !dou && !trosta && !cos && !itcube && !kvant && mastery != null) {
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

        if (trosta) {
            props.push('trosta')
        }
        if (cos) {
            props.push('cos')
        }
        if (kvant) {
            props.push('kvant')
        }
        if (itcube) {
            props.push('itcube')
        }
        if (mastery) {
            props.push('mastery')
        }

        return props
    }

    useEffect(() => {
        filteredGroup()
    }, [podved, spo, school, dop, dou])

    const filterOrgByType = () => {
        let result = []

        if (podved || spo || school || dop || dou) {
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

    const renderAllOrganizations = filterOrgByType().map((item) => <ClusterMarker key={item.id} data={item} />)

    return (
        <>
            <Header />
            <div className='container'>
                {details.isOpen && <InfoPopup />}
                {mobile.isOpen && <Controls />}
                <MapContainer
                    className="main"
                    center={[51.9, 93.4]}
                    maxBounds={[[54, 99], [49.4, 88]]}
                    zoom={6}
                    minZoom={6}
                    scrollWheelZoom={true}
                    doubleClickZoom={false}
                    bounds={mapData.polygons}
                    attributionControl={false}
                    zoomControl={false}
                    dragging={!details.isOpen}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        opacity={1}
                    />
                    <MarkerClusterGroup
                        iconCreateFunction={ClusterIcon}
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
                    <Polygons />
                </MapContainer>
            </div>
            <Footer />
        </>
    )
};

// предзагрузка данных
const mapLoader = async () => {
    const mapdata = {
        organizations: [],
        polygons: null
    }
    const organizations = await fetch('http://95.167.178.158:3000/api/datalist')
        .then(data => data.json())
    mapdata.organizations = organizations
    return mapdata
}

export { Map, mapLoader };