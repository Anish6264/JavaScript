document.addEventListener("DOMContentLoaded",()=>{
const cityinput=document.getElementById("city-input");
const getweatherbtn = document.getElementById("get-weather-btn");
const weatherinfo = document.getElementById("weather-info");
const citynamedisplay = document.getElementById("city-name");
const temperaruedisplay = document.getElementById("temperature");
const discriptiondisplay = document.getElementById("discription");
const errormessage = document.getElementById("error-message");

const API_KEY = "aa3dd4d3658d2e8162b070ef2d1e0c59";  // my personal API key

getweatherbtn.addEventListener("click", async ()=>{
   const city = cityinput.value.trim()
   if(city==="") return;
   
     // server may through an error or it take time to fetch data from database so we use async and await

     try {
       const weatherdata=await fetchweatherdata(city)
       displaydata(weatherdata);
     } catch (error) {
        showerror()
     }

})

async function fetchweatherdata(city){
    // get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response= await fetch(url) // this is an object

    if(!response.ok){
        throw new Error("City not found")// .ok is a property of that object means true and we are using this message if the API we call is not working or not found so we throw an error.
    }
    const data = await response.json()
    return data
}

function displaydata(data){
   
   const {name,main,weather}=data
   citynamedisplay.textContent=name
 temperaruedisplay.textContent=`Temperature: ${main.temp}`;
 discriptiondisplay.textContent=`weather: ${weather[0].description}`

  weatherinfo.classList.remove("hidden");
  errormessage.classList.add("hidden")
   // we are unlocking the display
  
}

function showerror(){

    weatherinfo.classList.add("hidden")
    errormessage.classList.remove("hidden")
}

})