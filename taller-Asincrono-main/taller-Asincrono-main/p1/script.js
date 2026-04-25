let inputbox=document.querySelector(".search-bar input");
let searchBtn=document.querySelector(".search-bar button");
let  weatheIcon=document.querySelector(".weather-icon");
let weather=document.querySelector(".weather");
let errorMesage=document.querySelector(".error");


async function checkWeather(city){
    try {
        let apiKey="8a212d09425b33d7ddc6fa1a5479a6a3";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   let response= await fetch(apiUrl);

    if(!response.ok){
        throw new Error("ciudad no encontrada");
    }



   let data= await response.json();

   console.log(data);
   updateWeatherUI(data);

    } catch (error) {
        console.error(error.message);
        weather.style.display="none";
        errorMesage.style.display="block";
    }



    
}

function updateWeatherUI(data){
    document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}&deg;C`;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML=`${data.wind.speed} km/h`;

    let weatherIcon={
        clear:"images/clear.png",
        rain:"images/rain.png",
        snow:"images/snow.png",
        clouds:"images/clouds.png",
    }
    weather.src=weatherIcon[data.weather[0].main] || "/images/rain.png";
    weather.style.display="block";
    errorMesage.style.display="none";
}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputbox.value);
})


