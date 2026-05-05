// await always goes with async

async function getWeather() {

    // display on city
    // apikey from openweathermap
    // communicating with http
    const city = document.getElementById("city").value;
    const apiKey = "950302f62873de971a894bf2df4ec176";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerText = data.message;
            return;
        }

        // desplay data if input is there
        const temp = data.main.temp;
        const weather = data.weather[0].description;

        document.getElementById("result").innerText = `${city}: ${temp}°C, ${weather}`;

    }

    catch(error) {

        document.getElementById("result").innerHTML =

        "Something went wroge"

    }

}