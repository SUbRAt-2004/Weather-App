import React from 'react'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Infobox({info}) {
    const INI_URL='https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXIlMjBmb3JlY2FzdHxlbnwwfHwwfHx8MA%3D%3D'
     const HOT_IMG="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D"   
     const COLD_IMG="https://images.unsplash.com/photo-1529017342279-ca5eb1c54bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGR8ZW58MHx8MHx8fDA%3D" 
     const RAIN_URL="https://images.unsplash.com/photo-1428592953211-077101b2021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D"
    return (
    <div className='infobox'>
       <h2>weather info</h2> 
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_IMG:COLD_IMG}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" conponent={"span"}>
          <p>temarature-{info.temp}</p>
          <p>min_temp-{info.min_temp}</p>
          <p>max_temp-{info.max_temp}</p>
          <p>humidity-{info.humidity}</p>
          <p>feels like {info.feels_like}</p>

        </Typography>
      </CardContent>
    
    </Card>
        
        </div>
  )
}
