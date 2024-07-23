import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Searchbox({updateweather}) {
    let [city,setcity]=useState("");
    let [error,seterror]= useState(false);
    let API_URL='https://api.openweathermap.org/data/2.5/weather';
    let API_KEY='e04de8218c0ced43502b529cd98c9ce8';
   
    let getwetherinfo=async ()=>{
      try{let responce=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jesonresponce=await responce.json();
      
        console.log(jesonresponce);
        let responces={
         city:city,
         temp:jesonresponce.main.temp,
         min_temp:jesonresponce.main.temp_min,
         max_temp:jesonresponce.main.temp_max,
         feelslike:jesonresponce.main.feels_like,
         humidity:jesonresponce.main.humidity,
         weather:jesonresponce.weather[0].discription
        }
        seterror(false);
        return responces;
      }catch(err){
        throw err
      }
     
    };

    function handelchange  (event){
    setcity(event.target.value);
    }
    let handelsubmit= async(event)=> {
      try{event.preventDefault();
        setcity("");
        
        let newinfo=await getwetherinfo();
        updateweather(newinfo);
      } catch(err){
        seterror(true);
      }
        

    }
  return (
    <div>
       
     <form onSubmit={handelsubmit}>
        <TextField id="city" label="city name" variant="filled" required value={city} onChange={handelchange} />
        <br/> <br/>
        <Button variant="contained"  type="submit">
        search
      </Button>
      {error&&<p style={{color:"red"}}>no such city exist</p>}
      
       </form>
    </div>
  )
}
