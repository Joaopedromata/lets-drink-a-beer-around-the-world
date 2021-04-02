import styled from 'styled-components'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet, { LatLngExpression } from 'leaflet';
import mapMarker from '../assets/beer.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
})


interface Props {
    className?: string
    coordinates: LatLngExpression
    markerText: string
}

const BeerMap = ({ className, coordinates, markerText }: Props) => {

    return (
        <Map 
            center={coordinates}
            zoom={14}
            className={className}
        >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker 
                position={coordinates}
                icon={mapIcon}
            >
                <Popup>
                    {markerText}
                </Popup>
            </Marker>
        </Map>
    )
}

export default styled(BeerMap)`
    height: 700px;
    width: 600px;
    border-radius: 8px;
`