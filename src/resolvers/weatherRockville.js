export default {
  Query: {
    weatherRockville: (_, __, { dataSources }) =>
      dataSources.weatherAPI.getWeatherRockville(),
  },
};
