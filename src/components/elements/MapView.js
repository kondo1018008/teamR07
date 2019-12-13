import React from "react";
import '../../styles/MapView.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet";
import marker_icon from '../../images/chapel.png';
class MapView extends React.Component {

    render() {
        const hukuonkan = [41.776143, 140.730720]
        const harisutosu = [41.762986, 140.712168]
        const yohane = [41.762650, 140.712801]
        const katorikku = [41.763690, 140.713262]
        const kyoudan = [41.764786, 140.713445]
        const bey = [41.767788, 140.717532]
        const perfect = [41.770700, 140.72477]
        const myIcon = L.icon({
            // /Users/wakamatsutaketo/Desktop/teamR07/src/components/elements/MapView.js
            // / Users / wakamatsutaketo / Desktop / teamR07 / src / images / pin.jpeg
            iconUrl: marker_icon,
            iconSize: [30, 30],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });
        return (
            <div className="MapView">
                <Map center={this.props.position} zoom={13} maxZoom={20}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />

                    <Marker position={hukuonkan} icon={myIcon} >
                        <Popup>函館キリスト伏音福音館</Popup>
                    </Marker>
                    <Marker position={harisutosu} icon={myIcon} >
                        <Popup>函館ハリストス正教</Popup>
                    </Marker>
                    <Marker position={yohane} icon={myIcon} >
                        <Popup>函館聖ヨハネ教会</Popup>
                    </Marker>
                    <Marker position={katorikku} icon={myIcon} >
                        <Popup>カトリック函館元町教会</Popup>
                    </Marker>
                    <Marker position={kyoudan} icon={myIcon} >
                        <Popup>日本基督教団函館教会</Popup>
                    </Marker>
                    <Marker position={bey} icon={myIcon} >
                        <Popup>リラノートチャーチ ベイ函館</Popup>
                    </Marker>
                    <Marker position={perfect} icon={myIcon} >
                        <Popup>パーフェクトリバティー教団函館教会</Popup>
                    </Marker>

                </Map>
            </div>
        );
    }
}
export default MapView;