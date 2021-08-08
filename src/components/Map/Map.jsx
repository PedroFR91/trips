import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map=()=>{
    const classes=useStyles();
    const isMobile=useMediaQuery('(min-width:600px');

    const coordinates={lat:36.72,lng:-4.42};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyDc2aggf9e7uYjy14eaaEStrG7Hohfd898'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={15}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}>
                
            </GoogleMapReact>

        </div>
    );
}

export default Map;