import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { fetchLocations, fetchWeatherForecast } from "./api/weather";
import { BackgroundImage } from "./components/BackgroundImage";
import { DailyForecast } from "./components/DailyForecast";
import { Forecast } from "./components/Forecast";
import { Loading } from "./components/Loading";
import { Locations } from "./components/Locations";
import { SearchButton } from "./components/SearchButton";
import { SearchInput } from "./components/SearchInput";
import { useApi, useDebounce } from "./hooks";

export default function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue);
  const loc = useApi(fetchLocations);
  const wForecast = useApi(fetchWeatherForecast);

  useEffect(() => {
    if (!searchValue.length) {
      wForecast.request("naucalpan");
    }
  }, []);

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      loc.request(debouncedSearch);
    } else {
      loc.clear();
    }
  }, [debouncedSearch]);

  const clear = () => {
    loc.clear();
    setSearchValue("");
    setShowSearch(false);
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <BackgroundImage />
      <SafeAreaView className="flex-1">
        <View className="mx-4 relative z-10">
          <SearchInput
            isVisible={showSearch}
            searchValue={searchValue}
            handleChange={(value) => setSearchValue(value)}
          >
            <SearchButton toggleView={() => setShowSearch(!showSearch)} />
          </SearchInput>

          {showSearch ? (
            <Locations
              data={loc.data}
              onPress={(name) => {
                wForecast.request(name);
                clear();
              }}
            />
          ) : null}
        </View>

        {wForecast.isLoading ? (
          <Loading />
        ) : (
          <>
            <Forecast data={wForecast.data} />
            <DailyForecast data={wForecast.data} />
          </>
        )}
      </SafeAreaView>
    </View>
  );
}
