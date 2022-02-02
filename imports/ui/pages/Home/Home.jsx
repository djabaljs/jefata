import { CircularProgress, Container, Grid } from '@material-ui/core';
import React from 'react'
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Map from '../../components/Map/Map';
import List from '../../components/List/List';


const Home = ({ setCoords, setBounds, coords, adverts, setChildClicked, childClicked, setIsLoading, isLoading }) => {
    return (
     <>
     <Container maxWidth={'lg'} style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            adverts={adverts}
            setChildClicked={setChildClicked}
          />
          <SearchPanel/>
      </Grid>
        <Grid container spacing={2} style={{ width: '100%' }}>
            <Grid item xs={12} md={4} lg={3}>
            <LeftPanel/>  
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
            <List
                adverts={adverts}
                childClicked={childClicked}
            />
            </Grid>
        </Grid>
       </Container>
     </>
    )
}

export default Home;