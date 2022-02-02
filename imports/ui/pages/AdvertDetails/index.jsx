import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { AdvertsCollection } from '../../../api/AdvertsCollection';
import { useTracker } from 'meteor/react-meteor-data';
import useStyles from './styles';

const AdvertDetails = () => {
    
    const classes = useStyles();

    const { _id } = useParams();
    const [coords, setCoords] = useState(null);

    const advert = useTracker(() => AdvertsCollection.findOne({_id}))

    const changeMainImage = (element) => {
        const mainImage = document.getElementById('main_image');
        mainImage.src = element.target.currentSrc;
    }

    useEffect(() => {

    }, [])
    
    return (
        <Container maxWidth='lg' className={classes.advertDetailsContainer}>
            <Paper elevation={3}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={6} md={6}>
                              <img  src={advert?.images[0]} id='main_image'/>
                            </Grid>
                        <Grid item xs={6} md={6}>
                            <h3>{advert?.name}</h3>
                            <p>
                                {advert?.description}
                            </p>
                             <Box display='flex'flexDirection='column' justifyContent='end'>
                             
                            </Box>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{ width: '100%', height: '20vh'}}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyCV0fwaxcIODNSeKnxTrNP0pYh8zeTRTiA' }}
                                center={0}
                                defaultZoom={14}
                                margin={[50, 50, 50, 50]}
                                options={''}
                            >

                            </GoogleMapReact>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default AdvertDetails;