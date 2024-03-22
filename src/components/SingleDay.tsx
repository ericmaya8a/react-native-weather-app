import { Image, Text, View } from "react-native";
import heavyRainImage from "../assets/images/heavyrain.png";
import { theme } from "../theme";

export function SingleDay() {
  return (
    <View
      className="items-center py-3 rounded-3xl w-24 mr-2"
      style={{ backgroundColor: theme.bgWhite(0.2) }}
    >
      <Image source={heavyRainImage} className="h-11 w-12" />
      <Text className="text-white">Monday</Text>
      <Text className="text-white text-xl font-semibold">18&#176;</Text>
    </View>
  );
}
