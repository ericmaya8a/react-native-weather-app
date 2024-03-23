import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { fetchLocations, fetchWeatherForecast } from "./api/weather";
import rainImage from "./assets/images/rain.png";
import sunImage from "./assets/images/sun.png";
import windImage from "./assets/images/wind.png";
import { BackgroundImage } from "./components/BackgroundImage";
import { SingleDay } from "./components/SingleDay";
import { SingleStat } from "./components/SingleStat";
import { weatherImages } from "./constants";
import { useDebounce } from "./hooks";
import { theme } from "./theme";

export default function App() {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [forecast, setForecast] = useState<Forecast>();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(searchValue);
  const hasData = Boolean(forecast?.forecast);

  useEffect(() => {
    if (!searchValue.length) {
      setIsLoading(true);
      fetchWeatherForecast("naucalpan")
        .then((data) => setForecast(data))
        .finally(() => setIsLoading(false));
    }
  }, []);

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      setIsLoading(true);
      fetchLocations(debouncedSearch)
        .then((data) => setLocations(data))
        .finally(() => setIsLoading(false));
    } else {
      setLocations([]);
    }
  }, [debouncedSearch]);

  const clear = () => {
    setLocations([]);
    setSearchValue("");
    setShowSearch(false);
    setForecast(undefined);
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <BackgroundImage />
      <SafeAreaView className="flex-1">
        <View className="mx-4 relative z-10">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                placeholder="Search city"
                placeholderTextColor="lightgray"
                value={searchValue}
                onChangeText={(value) => setSearchValue(value)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            ) : null}
            <TouchableOpacity
              className="rounded-full p-3 m-1"
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              onPress={() => setShowSearch(!showSearch)}
            >
              <MagnifyingGlassIcon size={25} color="white" />
            </TouchableOpacity>
          </View>

          {showSearch && locations.length > 0 ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((location, index) => {
                const showBorder = locations.length !== index + 1;
                const className = `flex-row items-center py-3 px-4 mb-1${
                  showBorder ? " border-b-2 border-gray-400" : ""
                }`;
                return (
                  <TouchableOpacity
                    key={location.id}
                    className={className}
                    onPress={() => {
                      setIsLoading(true);
                      fetchWeatherForecast(location.name)
                        .then((data) => setForecast(data))
                        .finally(() => {
                          setIsLoading(false);
                        });
                      clear();
                    }}
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text className="text-black text-lg text-ellipsis ml-2">
                      {location.name}, {location.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        {isLoading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <>
            <View className="justify-around flex-1 mx-8 mb-2">
              <View className="flex-row justify-center items-end">
                <Text className="text-white text-center text-2xl font-bold mr-1">
                  {forecast?.location.name},
                </Text>
                <Text className="text-lg font-semibold text-gray-300">
                  {forecast?.location.country}
                </Text>
              </View>

              <View className="items-center">
                {forecast?.current.condition.text ? (
                  <Image
                    source={
                      weatherImages[forecast.current.condition.code] ??
                      weatherImages[3742]
                    }
                    className="h-52 w-52"
                  />
                ) : null}
              </View>

              <View className="space-y-2">
                <Text className="text-center font-bold text-white text-6xl">
                  {forecast?.current.temp_c}&#176;
                </Text>
                <Text className="text-center text-white text-xl tracking-widest">
                  {forecast?.current.condition.text}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <SingleStat imgSource={windImage}>
                  {forecast?.current.wind_kph}km/h
                </SingleStat>
                <SingleStat imgSource={rainImage}>
                  {forecast?.current.humidity}%
                </SingleStat>
                <SingleStat imgSource={sunImage}>
                  {forecast?.forecast.forecastday[0].astro.sunrise}
                </SingleStat>
              </View>
            </View>

            <View className="mb-2 space-y-3">
              <View className="flex-row items-center mx-5 gap-2">
                <CalendarDaysIcon size={22} color="white" />
                <Text className="text-base text-white">Daily forecast</Text>
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 0 }}
                showsHorizontalScrollIndicator={false}
              >
                {hasData
                  ? forecast?.forecast.forecastday.map((day, index) => {
                      return (
                        <SingleDay key={`${day.date}-${index}`} data={day} />
                      );
                    })
                  : null}
              </ScrollView>
            </View>
          </>
        )}
        {/* <View className="justify-around flex-1 mx-8 mb-2">
            <ForecastSection />
            <Stats />
            <NextDays />
          </View> */}
      </SafeAreaView>
    </View>
  );
}
