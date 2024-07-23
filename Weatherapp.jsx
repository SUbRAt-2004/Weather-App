import React from 'react'
import Searchbox from './Searchbox'
import Infobox from './Infobox'
import { useState } from 'react'
export default function Weatherapp() {
    const [weatherinfo,setwetherinfo]=useState({
        city:"Delhi",
        temp:21,
        min_temp:17,
        max_temp:24,
        humidity:45,
        weather:"haze",
        feels_like:20
    })
    function updateweather(result){
      setwetherinfo(result);
    }
  return (
    <div>
        <h3>Weather App By swarajji</h3>
        <Searchbox updateweather={updateweather}/>
        <Infobox info={weatherinfo}/>
    </div>
  )
}
