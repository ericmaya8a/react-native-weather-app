import { Image, Text, View } from "react-native";
import rainImage from "../assets/images/rain.png";
import sunImage from "../assets/images/sun.png";
import windImage from "../assets/images/wind.png";
import { weatherImages } from "../constants";
import { SingleStat } from "./SingleStat";

type ForecastProps = {
  data?: Forecast;
};

export function Forecast({ data }: ForecastProps) {
  if (data)
    return (
      <View className="justify-around flex-1 mx-8 mb-2">
        <View className="flex-row justify-center items-end">
          <Text className="text-white text-center text-2xl font-bold mr-1">
            {data.location.name},
          </Text>
          <Text className="text-lg font-semibold text-gray-300">
            {data.location.country}
          </Text>
        </View>

        <View className="items-center">
          {data.current.condition.text ? (
            <Image
              source={
                weatherImages[data.current.condition.code] ??
                weatherImages[3742]
              }
              className="h-52 w-52"
            />
          ) : null}
        </View>

        <View className="space-y-2">
          <Text className="text-center font-bold text-white text-6xl">
            {data.current.temp_c}&#176;
          </Text>
          <Text className="text-center text-white text-xl tracking-widest">
            {data.current.condition.text}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <SingleStat imgSource={windImage}>
            {data.current.wind_kph}km/h
          </SingleStat>
          <SingleStat imgSource={rainImage}>
            {data.current.humidity}%
          </SingleStat>
          <SingleStat imgSource={sunImage}>
            {data.forecast.forecastday[0].astro.sunrise}
          </SingleStat>
        </View>
      </View>
    );

  return null;
}
