import axios from 'axios';

const API_KEY='9d506fef62dc7b2b8dd134d828644c67';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';//to keep our action type consistent b/w action creators and reducers

export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
 

  return {
    type:FETCH_WEATHER,
    payload:request
  };
}
