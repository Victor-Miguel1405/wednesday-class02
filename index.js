var weather = require('openweather-apis');
const readline = require("readline");

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(query, (answer) => {
            rl.close(); 
            resolve(answer);
        });
    });
}

function printWeatherInfo (city) {
    weather.setLang('pt');
    weather.setCity(city);
    weather.setUnits('metric');
    weather.setAPPID('b7dd9c0a5ebb8b5be29c14898402715c');

    weather.getAllWeather(function(err, JSONObj){
	    let data = (JSONObj);
        
        console.log("Previsão do tempo para " + city);
        console.log('- Temperatura: ' + Math.round(data.main.temp) + ' °C');
        console.log('- Sensação térmica: ' + Math.round(data.main.feels_like) + ' °C');
        console.log('- Condição: ' + data.weather[0].description);
        
    })


    
}



askQuestion('Escolha qualquer cidade do mundo: ',"\n").then(function (value) {
    printWeatherInfo(value)
})
