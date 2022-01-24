import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';

import useStyles from './styles';
import LeftPanel from './components/LeftPanel/LeftPanel';
import List from './components/List/List';
import SearchPanel from './components/SearchPanel/SearchPanel';
import { AdvertsCollection } from '../api/AdvertsCollection';
import { theme } from './theme';

export const App = () => {
  const classes = useStyles();

  const adverts = useTracker(() => AdvertsCollection.find({}, { sort:{ createdAt: -1 }}).fetch());
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  /***Get current position */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
      setCoords({ lat: latitude, lng: longitude });

      console.log(coords);
    })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
        <Grid item xs={12}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
          />
          <SearchPanel/>
      </Grid>
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
           <LeftPanel/>
        </Grid>
        <Grid item xs={12} md={8}>
          <List
            adverts={adverts}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}