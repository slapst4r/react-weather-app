import React from 'react'

const WeatherComp = (props) => {
  // const {weather, loading} = useWeather()
  const weatherData = props.weatherData || "" 
  console.log(props)
  return (
    <div className="font-semibold p-6 space-y-3 relative mx-auto my-5 rounded-3xl text-xl bg-white text-gray-600 shadow-xl py-5 min-w-max">
       {<h2>City: {weatherData?.name}</h2>} 
      {<p>Temperature: {Math.round(weatherData?.main?.temp*10)/10}&deg;C</p>}
      <p>Feels like: {Math.round(weatherData?.main?.feels_like*10)/10}&deg;C</p>
       <img 
        className='mx-auto'
        src={weatherData?.weather?.[0].icon}
        alt={props.weatherData?.weather?.name}
        />
        <p>{weatherData.weather?.[0].description}</p>
      <p>Wind: {props?.weatherData?.wind?.speed} m/sec</p>
    </div>
  )
}
export default WeatherComp