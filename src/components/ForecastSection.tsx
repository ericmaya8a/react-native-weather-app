import { View, Text, Image } from "react-native";

export function ForecastSection() {
  return (
    <>
      <View className="flex-row justify-center items-end">
        <Text className="text-white text-center text-2xl font-bold mr-1">
          London,
        </Text>
        <Text className="text-lg font-semibold text-gray-300">
          United Kingdom
        </Text>
      </View>

      <View className="items-center">
        <Image
          source={require("../assets/images/partiallycloudy.png")}
          className="w-52 h-52"
        />
      </View>

      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl">
          23&#176;
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          Partially cloudy
        </Text>
      </View>
    </>
  );
}
