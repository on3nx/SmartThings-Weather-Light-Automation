const timezone = 8;
const rp = require('request-promise');
const prettyjson = require('prettyjson');
const prettyjsonOptions = {};
const weatherUrl = 'https://api.data.gov.sg/v1';
const colorType = require('../constants/colors');

module.exports = {
  getCurrentWeather: function(forecastInterval) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    d = new Date(utc + (3600000*timezone));

    const options = {
      url: `${weatherUrl}/environment/${forecastInterval}`,
      qs: { date_time: new Date().toISOString().split('.')[0]+"Z" },
      json: true
    };
    return rp(options);
  },

  getForecast: function(forecastInterval) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    d = new Date(utc + (3600000*timezone));

    const options = {
      url: `${weatherUrl}/environment/${forecastInterval}`,
      qs: { date_time: d.toISOString().split('.')[0]+"Z" },
      json: true
    };
    return rp(options);
  },

  getColorForForecast: function(weather, area) {
    console.log(`will get forecast for area: ${area}`);

    var forecasts = weather.items[0].forecasts;
    
    for(var forecast in forecasts){
      if(forecasts[forecast]['area'] == area){
        forecast = forecasts[forecast]['forecast'].toLowerCase();
        break;
      }
    }
    console.log(`forecast for area: ${area}: ${forecast}`);
    
    let color = null;
    if(forecast.includes('cloudy')){
      color = colorType.PURPLE;
    }else if(forecast.includes('thunder')){
      color = colorType.RED;
    }else if(forecast.includes('shower')){
      color = colorType.BLUE;
    }else if(forecast.includes('rain')){
      color = colorType.BLUE;
    }else if(forecast.includes('clear')){
      color = colorType.WHITE;
    }else{
      color = colorType.WHITE;
    }
    
    console.log(`color values: ${prettyjson.render(color, prettyjsonOptions)}`);
    return color;
  }
};
