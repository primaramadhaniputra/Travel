import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Map({ setCoordinates, setBounds, coordinates, defCords, place }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div
      style={{
        height: "85vh",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD9itSPo_TQ24cOxHO4oKonnufxFoktVwE" }}
        defaultCenter={defCords}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onClick={''}
      >
        {place &&
          place.map((place, i) => (
            <div
              // className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {" "}
                    {place.name}
                  </Typography>
                  <img
                    // className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                    style={{ maxWidth: "50px" }}
                  />
                  {/* <Rating name="read-only" size="small" value={Number(place.rating)} readOnly /> */}
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
