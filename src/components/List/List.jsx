import React,{useState} from 'react';
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List=({places})=>{
    const classes=useStyles();
    const [type,setType]=useState('restaurants');
    const [rating,setRating]=useState('');

    
    return (
       <div className={classes.container}>
           <Typography variant="h4">Restaurantes, Hoteles y lugares de interés</Typography>
           <FormControl className={classes.formControl}>
               <InputLabel>Type</InputLabel>
               <Select value={type} onChange={(e)=>setType(e.target.value)}>
                   <MenuItem value="restaurants">Restaurantes</MenuItem>
                   <MenuItem value="hotel">Hoteles</MenuItem>
                   <MenuItem value="attractions">Lugares de interés</MenuItem>
               </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
               <InputLabel>Valoración</InputLabel>
               <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                   <MenuItem value={0}>Todos</MenuItem>
                   <MenuItem value={3}>Más de 3</MenuItem>
                   <MenuItem value={4}>Más de 4</MenuItem>
                   <MenuItem value={4.5}>Más de 4.5</MenuItem>
               </Select>
           </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid item key={i} xs={12}>
                    <PlaceDetails place={place}/>
                    </Grid>
                ))}
                </Grid>
       </div>
    );
}

export default List;