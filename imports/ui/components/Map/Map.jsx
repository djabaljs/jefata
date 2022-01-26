import React from 'react';
import GoogleMapReact from 'google-map-react';


import useStyles from './styles';

const Map = ({setCoords, setBounds, coords}) => {
    const classes = useStyles();

    return (
       <div className={classes.mapContainer}>
           <GoogleMapReact
             bootstrapURLKeys={{ key: 'AIzaSyCV0fwaxcIODNSeKnxTrNP0pYh8zeTRTiA' }}
             center={coords}
             defaultZoom={14}
             margin={[50, 50, 50, 50]}
             options={''}
             onChildClick={''}
             onChange={(e) => {
                 setCoords({ lat: e.center.lat, lng: e.center.lng })
                 setBounds({ sw: e.marginBounds.nw, ne: e.marginBounds.ne })
             }}
           >
           </GoogleMapReact>
       </div>
    )
}

export default Map;