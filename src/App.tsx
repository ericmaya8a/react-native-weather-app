import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { BackgroundImage } from "./components/BackgroundImage";
import { ForecastSection } from "./components/ForecastSection";
import { SearchInput } from "./components/SearchInput";
import { Stats } from "./components/Stats";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <BackgroundImage />
      <SafeAreaView className="flex-1">
        <SearchInput />
        <View className="justify-around flex-1 mx-8 mb-2">
          <ForecastSection />
          <Stats />
        </View>
      </SafeAreaView>
    </View>
  );
}
