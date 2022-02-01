import { Container, Grid } from '@material-ui/core';
import React from 'react'
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Map from '../../components/Map/Map';
import List from '../../components/List/List';


const Home = ({ setCoords, setBounds, coords, adverts}) => {
    return (
     <>
     <Container maxWidth={'lg'} style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            adverts={adverts}
          />
          <SearchPanel/>
      </Grid>
      </Container>
      <Container maxWidth={'md'} style={{ marginTop: 10 }}>
        <Grid container spacing={2} style={{ width: '100%' }}>
            <Grid item xs={12} md={4} lg={3}>
            <LeftPanel/>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
            <List
                adverts={adverts}
            />
            </Grid>
        </Grid>
       </Container>
     </>
    )
}

export default Home;