//*vamos a usar esta api: https://openweathermap.org/api
//https://openweathermap.org/current

const city = "rosario";

const getCityWeather = async(city) => {
    //la api creen la suya propia! no usen la mía
    const APIkey = "haganlasuya";

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIkey}`;

    const response = await fetch(api);
    const data = await response.json();

    console.log(response);
    console.log(data);
};

getCityWeather(city);