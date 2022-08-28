import axios from "axios";
import React, { useEffect, useState } from 'react'



export function useWeather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');


  

  // console.log(typeof lat)

  // console.log(lat)
  // useEffect(() => {
  //   const fetchData = async() => {
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   setLat(position.coords.latitude);
  //   console.log("check")
  //   setLong(position.coords.longitude);
  //   console.log(typeof lat)

  // });
  // await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  //   .then(res => res.json())
  //   .then(result => {
  //     setWheather(result)
  //     console.log(result)
  //   });
  // }
  // fetchData()
  // }, [lat, long])

  // async function getLocation() {
  //       await navigator.geolocation.getCurrentPosition(function(position) {
  //         setLat(position.coords.latitude);
  //         setLong(position.coords.longitude);
  //       })};

  // async function fetchData() {
  //   try {
  //     setError('')
  //     console.log('shit')
  //     getLocation();
  //     setLoading(true)
  //     // const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  //     const response = await axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${long}`)
  //     setWheather(response.data)
  //     console.log(response.data)
  //     setLoading(false)
  //   }
  //   catch (err) {
  //     //  todo Rewrite in TS
  //     // const error = e as AxiosError
  //     console.log('shit')
  //     setLoading(false)
  //     setError(err)
  //     alert(err)
  //   }
  // }
  useEffect(() => {
    console.log('check');
    // getLocation();
    //fetchData();
    const fetchData = async() => {

       navigator.geolocation.getCurrentPosition(async function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(position.coords.latitude)
      });
        // setError('')
        //getLocation();
        setLoading(true)
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        
        const response = await axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${long}`)
        setWeather(response.data)
        //console.log(response)
        setLoading(false)
    };
    console.log(weatherData)
    fetchData()}
  ,[lat, long])

  return {weatherData, loading};
}


