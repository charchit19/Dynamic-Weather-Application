const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your key',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const getWeatherInfo = (city) => {
	cityName.innerHTML = city
	fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&u=f', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			condition.innerHTML = response.current_observation.condition.text
			temp.innerHTML = Math.ceil((response.current_observation.condition.temperature - 32) * (5 / 9))
			fah.innerHTML = response.current_observation.condition.temperature
			wind_speed.innerHTML = response.current_observation.wind.speed
			wind_direction.innerHTML = response.current_observation.wind.direction
			humidity.innerHTML = response.current_observation.atmosphere.humidity
			visibility.innerHTML = response.current_observation.atmosphere.visibility
			sunrise.innerHTML = response.current_observation.astronomy.sunrise
			sunset.innerHTML = response.current_observation.astronomy.sunset
			press.innerHTML = response.current_observation.atmosphere.pressure  //in mb(milibar)
			//city.innerHTML = response.location.city  //in mb(milibar)
			country.innerHTML = response.location.country  //in mb(milibar)
			lat.innerHTML = response.location.lat  //in mb(milibar)
			long.innerHTML = response.location.long  //in mb(milibar)
			region.innerHTML = response.location.region  //in mb(milibar)
			timezone.innerHTML = response.location.timezone_id  //in mb(milibar)
			woeid.innerHTML = response.location.woeid  //in mb(milibar)
		})
		.catch(err => console.error(err));
}
const getWeather = (city,a,b,c,d) => {
	fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&u=f', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			a.innerHTML = response.location.country,
			b.innerHTML = Math.ceil((response.current_observation.condition.temperature - 32) * (5 / 9)),
			c.innerHTML = response.current_observation.condition.text,
			d.innerHTML = response.current_observation.atmosphere.humidity
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeatherInfo(city.value)
})
getWeatherInfo("Delhi")
getWeather("Delhi",country1,temp1,condition1,humidity1)
getWeather("London",country2,temp2,condition2,humidity2)
getWeather("Seattle",country3,temp3,condition3,humidity3)
