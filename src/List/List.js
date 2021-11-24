import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

function List({ place }) {
   const [type, setType] = useState('restorants')
   const [rating, setRating] = useState(0)
   console.log(place);
   return (
      <div>
         <Typography variant='h5' >
            Food & dining around you
         </Typography>

         {
            !place && <p>maaf batas requestnya lagi abis...maklum gratisan</p>
         }
         <Grid container spacing={3} overflow='scroll' style={{ height: '80vh' }}>

            {
               place?.map((place, i) => {
                  return <Grid xs={12} key={i} item>
                     <PlaceDetails place={place} />
                  </Grid>
               })
            }
         </Grid>

      </div >
   )
}

export default List
