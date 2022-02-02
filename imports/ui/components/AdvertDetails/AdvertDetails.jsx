import {  Box, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


const AdvertDetails = ({ advert, classes, selected, refProp }) => {

    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"})

    return (
        <Card>
        <CardMedia
          image={advert.images[0]}
          style={{ height: '300px'}}
        />
        <CardContent>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Typography variant='body2' color='textPrimary' className={classes.advertTitle}>{advert.name}</Typography>
                <Typography variant='body2' color='textPrimary' className={classes.advertPrice}>{advert.price}</Typography>
            </Box>
            <Box mt={2}>
              <Typography  variant='body2' color='textSecondary'>
                  {advert.description}
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' mt={2}>
              <img 
                  src='https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' 
                  alt='user'
                  style={{ width: '30px'}}
              />
              <Button variant='contained' color='primary'><Link to={`/advert/${advert._id}`} >Details</Link></Button>
            </Box>
        </CardContent>
    </Card>
    )
}

export default AdvertDetails;