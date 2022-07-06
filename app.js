let searchValue = document.getElementById('search-box');
let searchBtn = document.getElementById('search-btn');

const getWeather = () => {
    result.innerHTML = `<h4 class="msg">Loading...</h4>`
    const cityName = searchValue.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    if(cityName <= 0)
    {
        result.innerHTML=`<h3 class="msg">Please Enter A City Name</h3>`
    }
    else
    {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            if(data.cod == 200)
            {
                result.innerHTML = `<div class="info">
                <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>
                <h3 class="detail">${data.name}, ${data.sys.country}</h3>
                <h1 class="detail">${data.main.temp}&degC</h1>
                <p class="detail">Min:${data.main.temp_min}&degC | Max:${data.main.temp_max}&degC</p>
                <h4 class="detail">Status: ${data.weather[0].main}</h4>
                <p class="detail">Description: ${data.weather[0].description}</p>
                <h4 class="detail">Wind Speed:${data.wind.speed} | Direc:${data.wind.deg}</h4>
                `
            }
            else
            {
                result.innerHTML = `<h3 class="msg">City Not Found</h3>`
            }
        })
        .catch(()=>{
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`
        })
    }
}

searchBtn.addEventListener("click", getWeather);