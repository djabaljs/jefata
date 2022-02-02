import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';

import { AdvertsCollection } from '../api/AdvertsCollection';
import Header from './components/Header/Header';
import { theme } from './theme';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import AdvertDetails from './pages/AdvertDetails';

export const App = () => {

  const adverts = useTracker(() => AdvertsCollection.find({}, { sort:{ createdAt: -1 }}).fetch());
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /***Get current position */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
      setCoords({ lat: latitude, lng: longitude });
    })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Routes>
        <Route path='/' element={
          <Home
             setCoords={setCoords}
             setBounds={setBounds}
             coords={coords}
             adverts={adverts}
             childClicked={childClicked}
             setChildClicked={setChildClicked}
             setIsLoading={setIsLoading}
             isLoading={isLoading}
          />
        }/>
        <Route path='/advert/post' element={<Post setCoords={setCoords} setBounds={setBounds} coords={coords} />}/>
        <Route path='/advert/:_id' element={<AdvertDetails adverts={adverts}/>}/>
      </Routes>
    </ThemeProvider>
  )
}