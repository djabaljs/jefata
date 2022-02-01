import React, { useState } from 'react'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import PlaceIcon from '@material-ui/icons/Place';
import ImageUploading from "react-images-uploading";
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import useStyles from './styles';

const Post = ({ setCoords, setBounds, coords}) => {

    const classes = useStyles();
    const [advert, setAdvert] = useState({
        title: '',
        price: '',
        description: '',
        images: [],
        coords: null,
        bounds: null,
    });
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        if (images.length === 0) return;

        console.log(images);
    }
    return (
        <Container maxWidth='lg' className={classes.postContainer}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className={classes.postPaper}>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                            <Typography  variant='h6' color='textSecondary'>
                                Créer une annonce gratuitement
                            </Typography>
                    </Box>
                    <Box mt={5} mb={5} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                       <form onSubmit={handleSubmit}>
                       <TextField
                                type='text'
                                label='Titre'
                                className={classes.postTextField}
                                variant='outlined'
                                value={coords.lat}
                            />
                            <TextField
                                type='text'
                                label='Description'
                                className={classes.postTextField}
                                variant='outlined'
                                value={coords.lng}
                                multiline
                                rows={5}
                            />
                        <Box className={classes.postImageUploadingContainer}>
                            <ImageUploading
                                    multiple
                                    value={images}
                                    onChange={onChange}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                    style={{ marginTop: 5 }}
                                    >
                                    {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                    }) => (
                                    // write your building UI
                                    <div className="upload__image-wrapper">
                                        <Button
                                        style={isDragging ? { color: 'red' } : undefined}
                                        variant='contained'
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                        Selectionner des images
                                        </Button>
                                        &nbsp;
                                        <Button variant='contained' color='primary' onClick={onImageRemoveAll}>Tout supprimer</Button>
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                            <Button style={{ marginRight: 5 }} variant='contained' color='primary' onClick={() => onImageUpdate(index)}><UpdateIcon/></Button>
                                            <Button variant='contained' color='primary' onClick={() => onImageRemove(index)}><DeleteIcon/></Button>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    )}
                            
                            </ImageUploading>
                        </Box>
                        <Button type='submit' variant='contained' color='primary'>Publier</Button>
                       </form>
                    </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} style={{ width: '100%', height: '80vh'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCV0fwaxcIODNSeKnxTrNP0pYh8zeTRTiA'}}
                        center={coords}
                        defaultCenter={coords}
                        defaultZoom={14}
                        options={''}

                        onChange={(e) => {
                            setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
                            setCoords({ lat: e.center.lat, lng: e.center.lng })
                        }}
                    >
                     <div
                       lat={coords.lat}
                       lng={coords.lng}
                     >
                       <PlaceIcon className={classes.placeIcon}/>
                     </div>
                    </GoogleMapReact>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Post;