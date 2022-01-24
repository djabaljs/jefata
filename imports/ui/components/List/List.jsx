import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';




const List = ({ adverts }) => {
    console.log(adverts)
    return (
        <Grid container spacing={1} elevation={5}>
          {adverts?.map((advert, i) => (
            <Grid item xs={12} md={4}>
                  <Card key={i}>
                  <CardMedia
                    image='https://media.jumiadeals.com/ci_live/6051fdadc161ea600388a75.desktop-gallery-large.jpg'
                    style={{ height: '200px'}}
                  />
                  <CardContent>
                      <Box display='flex' alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' color='textPrimary'>{advert.name}</Typography>
                         <Typography variant='body2' color='textPrimary'>{advert.price}</Typography>
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
                        <Button variant='contained' color='primary'>Contacter</Button>
                      </Box>
                  </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    )
}

export default List;