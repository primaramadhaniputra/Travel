import { Container, CssBaseline, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header'
import List from './List/List'
import Map from './Map/Map'
import getPlaceData from './API/index'
function App() {
  const [place, setPlace] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState([])
  const [defCords, setDefCords] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
      setDefCords({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlaceData(bounds.sw, bounds.ne)
      .then(data => {
        setPlace(data)
      })
  }, [coordinates, bounds])


  return (
    <Container>
      <Header />
      <Grid container my={3}>
        <Grid item xs={12} md={4}>
          <List place={place} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            defCords={defCords}
            place={place}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
