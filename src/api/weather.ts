const BASE_URL = "https://api.weatherapi.com/v1";

async function get(url: string) {
  const response = await fetch(url);
  return await response.json();
}

export async function fetchLocations(city: string): Promise<LocationType[]> {
  try {
    return get(
      `${BASE_URL}/search.json?key=${process.env.WEATHER_API_KEY}&q=${city}`
    );
  } catch (error) {
    console.error("Error while fetching locations", error);
    return [];
  }
}

export async function fetchWeatherForecast(
  city: string,
  days: number = 7
): Promise<Forecast | undefined> {
  try {
    return get(
      `${BASE_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`
    );
  } catch (error) {
    console.error("Error while fetching weather forecast", error);
    return undefined;
  }
}
