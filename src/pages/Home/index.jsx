import React, { useRef, useState } from 'react';
import { MagnifyingGlass, MapPinLine, Wind, Drop } from 'phosphor-react';
import './styles.css';

const apiKey = "b072e26a69514cb56cd85d4af7587e1e";

export function Home() {
    const inputRef = useRef(null);
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = async () => {
        const cidade = inputRef.current.value;
        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

        try {
            const res = await fetch(apiWeatherURL);
            const data = await res.json();
            setWeatherData(data);
            document.getElementById("weather-data").classList.remove("hide");
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div className='Clima'>          
            <div className="container-clima">

                <div className="form-clima">
                    
                    <h4>Confira o clima de uma cidade:</h4>
                </div>

                <div className="input-clima-container">
                    <input
                        type="text"
                        placeholder="Digite o nome da cidade"
                        id="input-cidade"
                        ref={inputRef}
                    />

                    <button id="busca" onClick={getWeatherData}>
                        <MagnifyingGlass size={16} />
                    </button>
                </div>

                <div id="weather-data" className="hide">
                    
                    <h3>
                        <MapPinLine size={22}/>
                        <span id="cidade">{weatherData ? weatherData.name : ''}</span>
                    </h3>

                    <p id="temperature"><span>{weatherData ? parseInt(weatherData.main.temp) + "°C" : ''}</span></p>

                    <div id="container-description">
                        <p id="description">{weatherData ? weatherData.weather[0].description : ''}</p>
                        <img
                            src={weatherData ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png` : ''}
                            alt="Condições do tempo"
                            id="weather-icon"
                        />
                    </div>

                    <div id="details">
                        <p id="humidity">
                            <Drop size={20} />
                            <span>{weatherData ? `${weatherData.main.humidity}%` : ''}</span>
                        </p>
                        <p id="wind">
                            <Wind size={20} />
                            <span>{weatherData ? `${weatherData.wind.speed} km/h` : ''}</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
