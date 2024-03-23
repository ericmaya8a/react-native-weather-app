import { Image, Text, View } from "react-native";
import { weatherImages } from "../constants";
import { theme } from "../theme";

export function SingleDay({ data }: { data: ForecastType }) {
  const date = new Date(data.date);
  // const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.toUTCString().substring(0, 3);

  return (
    <View
      className="items-center py-3 rounded-3xl w-24 mr-2"
      style={{ backgroundColor: theme.bgWhite(0.2) }}
    >
      <Image
        source={weatherImages[data.day.condition.code] ?? weatherImages[3742]}
        className="h-11 w-12"
      />
      <Text className="text-white">{day}</Text>
      <Text className="text-white text-xs font-semibold">
        min {data.day.mintemp_c}&#176;
      </Text>
      <Text className="text-white text-xs font-semibold">
        max {data.day.maxtemp_c}&#176;
      </Text>
    </View>
  );
}
