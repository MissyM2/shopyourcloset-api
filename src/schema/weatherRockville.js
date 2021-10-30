const { gql } = require('apollo-server-express');

export default gql`
  type WeatherRockville {
    coord: CoordType
    weather: [WeatherType]
    main: MainType
  }

  extend type Query {
    weatherRockville: [WeatherRockville]
  }

  type CoordType {
    lon: Float
    lat: Float
  }

  type WeatherType {
    id: Int
    description: String
    icon: String
  }

  type MainType {
    temp: Float
    feels_like: Float
    humidity: Float
  }
`;
