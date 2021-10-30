const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherRockvilleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https:api.openweathermap.org/data/2.5';
  }
  willSendRequest(request) {
    request.params.set('q', '20850,US');
    request.params.set('appid', '7a8894c977a624af15b7595a84288cda');
  }

  async getWeatherRockville() {
    const response = await this.get('weather');
    const arrResponse = [response];
    return Array.isArray(arrResponse)
      ? arrResponse.map((weather) => this.weatherRockvilleReducer(weather))
      : [];
  }

  weatherRockvilleReducer(weather) {
    return {
      coord: {
        lon: weather.coord.lon,
        lat: weather.coord.lat,
      },
      weather: weather.weather.map((item) => ({
        id: item.id,
        description: item.description,
        icon: item.icon,
      })),
      main: {
        temp: weather.main.temp,
        feels_like: weather.main.feels_like,
        humidity: weather.main.humidity,
      },
    };
  }
}

module.exports = WeatherRockvilleAPI;
