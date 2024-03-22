import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { BackgroundImage } from "./components/BackgroundImage";
import { SearchInput } from "./components/SearchInput";
import { ForecastSection } from "./components/ForecastSection";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <BackgroundImage />
      <SafeAreaView className="flex-1">
        <SearchInput />
        <ForecastSection />
      </SafeAreaView>
    </View>
  );
}
