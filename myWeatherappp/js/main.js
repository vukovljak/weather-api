/* Weather API Elements */
const apiKey = 'API KEY';
const url = 'https://api.openweathermap.org/data/2.5/';
/*Dom ELEMENTS*/
const belgrade = 'Belgrade'
const bozeman = 'Bozeman'
const chicago = 'Chicago'
const searchBox = document.querySelector('.search-box');
const weatherContainer = document.querySelector('.weather-container');
const newWeather = document.querySelector('.new-weather');
const homeButton = document.querySelector('.btn');
const searchButton = document.querySelector('.fas');
const wrap = document.querySelector('.wrap');
const footer = document.querySelector('footer');

/*BELGRADE Weather*/
fetch(`${url}weather?q=${belgrade}&units=metric&APPID=${apiKey}`)
    .then(res => res.json())
    .then(displayResultsBelgrade)
    .catch((err)=> {
        console.log(err);
    })

function displayResultsBelgrade(res) {
          
    let cityBelgrade =document.querySelector('.city-belgrade');
    cityBelgrade.innerText =`${res.name}, ${res.sys.country}`;

    let nowBelgrade = new Date();
    let dateBelgrade=document.querySelector('.date-belgrade');
    dateBelgrade.innerText = dateBuilder(nowBelgrade);
    let tempBelgrade = document.querySelector('.current .temp-belgrade');
    tempBelgrade.innerHTML = `${Math.round(res.main.temp)}<span>°c</span>`;

    let weatherBelgrade = document.querySelector('.current .weather-belgrade');
    weatherBelgrade.innerText = res.weather[0].main;

    let highBelgrade = document.querySelector('.hi-low-belgrade');
    highBelgrade.innerText = `${Math.round(res.main.temp_min)}°c / ${Math.round(res.main.temp_max)}°c`;
}

/*BOZEMAN Weather*/
fetch(`${url}weather?q=${bozeman}&units=metric&APPID=${apiKey}`)
.then(res => res.json())
.then(displayResultsBozeman)
.catch((err)=> {
    console.log(err);
})

function displayResultsBozeman(res) {
let cityBozeman =document.querySelector('.city-bozeman');
cityBozeman.innerText =`${res.name}, ${res.sys.country}`;

let nowBozeman = new Date();
let dateBozeman=document.querySelector('.date-bozeman');
dateBozeman.innerText = dateBuilder(nowBozeman);
let tempBozeman = document.querySelector('.current .temp-bozeman');
tempBozeman.innerHTML = `${Math.round(res.main.temp)}<span>°c</span>`;

let weatherBozeman = document.querySelector('.current .weather-bozeman');
weatherBozeman.innerText = res.weather[0].main;

let highBozeman = document.querySelector('.hi-low-bozeman');
highBozeman.innerText = `${Math.round(res.main.temp_min)}°c / ${Math.round(res.main.temp_max)}°c`;
}   
/*CHICAGO Weather*/
fetch(`${url}weather?q=${chicago}&units=metric&APPID=${apiKey}`)
.then(res => res.json())
.then(displayResultsChicago)
.catch((err)=> {
    console.log(err);
})

function displayResultsChicago(res) {
    
    let cityChicago =document.querySelector('.city-chicago');
    cityChicago.innerText =`${res.name}, ${res.sys.country}`;

    let nowChicago = new Date();
    let dateChicago=document.querySelector('.date-chicago');
    dateChicago.innerText = dateBuilder(nowChicago);
    let tempChicago = document.querySelector('.current .temp-chicago');
    tempChicago.innerHTML = `${Math.round(res.main.temp)}<span>°c</span>`;

    let weatherChicago = document.querySelector('.current .weather-chicago');
    weatherChicago.innerText = res.weather[0].main;

    let highChicago = document.querySelector('.hi-low-chicago');
    highChicago.innerText = `${Math.round(res.main.temp_min)}°c / ${Math.round(res.main.temp_max)}°c`;
}   


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
        
    return `${day} ${date}, ${month} ${year}`;
}
searchBox.addEventListener('keypress', (e) => {
    /*On Enter*/
    if(e.keyCode==13) {
        getResults(searchBox.value);
    }
})
/*On click on the icon*/
searchButton.addEventListener('click', ()=> {
    getResults(searchBox.value);
})

function getResults(query){
    /*Hiding Weather Container and removing value from a search box*/
    searchBox.value='';
    newWeather.style.display='flex';
    weatherContainer.style.display='none';

    fetch(`${url}weather?q=${query}&units=metric&APPID=${apiKey}`)
    .then(res => res.json())
    .then(displayResults)
    .catch((err)=> {
        console.log(err);
    })
}
function displayResults (res) {
    /*Removing current class from Wrap element */
    wrap.classList.remove ('clear' ,'clouds' ,'snow','rain' ,'thunderstorm' ,'drizzle' ,'else');
       
    let city =document.querySelector('.city');
    city.innerText =`${res.name}, ${res.sys.country}`;

    let now = new Date();
    let date=document.querySelector('.date');
    date.innerText = dateBuilder(now);
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(res.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = res.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(res.main.temp_min)}°c / ${Math.round(res.main.temp_max)}°c`;
    /*Adding particular class for weather*/
    if(weather_el.innerText=='Clear') {
        wrap.classList.add('clear');
    } else if (weather_el.innerText=='Clouds') {
        wrap.classList.add('clouds');
    }else if (weather_el.innerText=='Snow') {
        wrap.classList.add('snow');
    }else if (weather_el.innerText=='Thunderstorm') {
        wrap.classList.add('thunderstorm');
    }else if (weather_el.innerText=='Drizzle') {
        wrap.classList.add('drizzle');
    } else {
        wrap.classList.add('else');
    }
    /*Changing a footer*/
    footer.classList.add('new-footer');
}
/*Home Button*/
homeButton.addEventListener('click', ()=> {
    location.reload();
})