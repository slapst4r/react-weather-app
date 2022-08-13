import './App.css';
import React from "react";
import {WeatherPage} from './pages/WeatherPage';


export default function App() {
  
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(result)
  //       console.log(result);
  //     });
  //   }
  //   fetchData();
  // }, [lat,long])
  
  return (
    <div className="bg-center bg-slate-300 flex-col justify-center overflow-hidden min-h-screen min-w-screen">
      
      <WeatherPage />
    </div>
  );
}