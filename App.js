// await always goes with async

async function getWeather() {

    const example = "London";

    // display on city
    // apikey from openweathermap
    // communicating with http
    // When someone did not enter city name, display error message
    const city = document.getElementById("city").value;
    const apiKey = "950302f62873de971a894bf2df4ec176";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const errorNoMessage = innerHTML = 
        `   
            <p>Enter city name</p><br>
            <p>Example: ${example}</p>
        `
        ;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = errorNoMessage;
            return;
        }

        // desplay data if input is there
        const temp = data.main.temp;
        const weather = data.weather[0].description;

        document.getElementById("result").innerHTML = 
            `
                <h3 class="city">
                    ${city}
                </h3>
                <p class="temp">
                    ${temp}°C,
                </p>
                <p class="weather">
                    ${weather}
                </p>
            `
        ;

    }

    catch(error) {

        document.getElementById("result").innerHTML =

        "Something went wrong"

    }

}