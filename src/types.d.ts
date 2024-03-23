type LocationType = {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url?: string;
};

type Condition = {
  text: string;
  code: number;
};

type DayCondition = {
  maxtemp_c: number;
  mintemp_c: number;
  condition: Condition;
};

type Astro = {
  sunrise: string;
  sunset: string;
};

type CurrentType = {
  temp_c: number;
  temp_f: number;
  condition: Condition;
  wind_kph: number;
  humidity: number;
};

type ForecastType = {
  date: string;
  date_epoch: number;
  day: DayCondition;
  astro: Astro;
};

type Forecast = {
  location: LocationType;
  current: CurrentType;
  forecast: {
    forecastday: ForecastType[];
  };
};
