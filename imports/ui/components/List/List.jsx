import React, { useEffect, createRef, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from '@material-ui/core';

import useStyles from './styles';
import AdvertDetails from '../AdvertDetails/AdvertDetails';


const List = ({ adverts, childClicked }) => {
    
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
      const refs =  Array(adverts?.length).fill().map((_, i) => elRefs[i] || createRef())

      setElRefs(refs)
    }, [adverts])
    return (
        <Grid container spacing={1} elevation={5}>
          {adverts?.map((advert, i) => (
            <Grid ref={elRefs[i]} item xs={12} md={4} key={i}>
              <AdvertDetails
                advert={advert}
                classes={classes}
                selected={Number(childClicked == i)}
                refProp={elRefs[i]}
              />
            </Grid>
          ))}
        </Grid>
    )
}

export default List;