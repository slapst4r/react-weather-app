import React from 'react'
import {About} from '../components/About';
import {Layout} from '../components/Layout';
import Loader from '../components/Loader';
import WeatherComp from '../components/WeatherComp';
import {useWeather} from '../hooks/useWeather';


export function WeatherPage() {
    const {weatherData, loading} = useWeather()

    return (
        <div className="flex text-center flex-col justify-items-center">
            <Layout/>
            {loading && <Loader/>}
            <WeatherComp weatherData={weatherData}/>
            <About/>
        </div>
    )
};


