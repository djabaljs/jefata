import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';


import useStyles from './styles';
import { Marker } from '@react-google-maps/api';
import { Paper, Typography } from '@material-ui/core';

const Map = ({setCoords, setBounds, coords, adverts, setChildClicked}) => {
    const classes = useStyles();    
    return (
       <div className={classes.mapContainer}>
           <GoogleMapReact
             bootstrapURLKeys={{ key: 'AIzaSyCV0fwaxcIODNSeKnxTrNP0pYh8zeTRTiA' }}
             center={coords}
             defaultZoom={14}
             margin={[50, 50, 50, 50]}
             options={''}
             onChildClick={(child) => setChildClicked(child)}
             onChange={(e) => {
                 setCoords({ lat: e.center.lat, lng: e.center.lng })
                 setBounds({ sw: e.marginBounds.nw, ne: e.marginBounds.ne })
             }}
           >
               {adverts?.map((advert, i) => (
                   <div
                    lat={Number(advert.lat)}
                    lng={Number(advert.lng)}
                    className={classes.markerContainer}
                    key={i}
                   >
                     <Paper elevation={3} style={{ padding:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                        <Typography variant='p'> 
                            {advert.name}
                        </Typography>
                        <img 
                          src={advert.images[0]}
                          style={{ width: '100%'}}
                        />
                     </Paper>
                   </div>
               ))}
           </GoogleMapReact>
       </div>
    )
}

export default Map;