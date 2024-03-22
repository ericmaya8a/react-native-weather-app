import { View } from "react-native";
import rainImage from "../assets/images/rain.png";
import sunImage from "../assets/images/sun.png";
import windImage from "../assets/images/wind.png";
import { SingleStat } from "./SingleStat";

export function Stats() {
  return (
    <View className="flex-row justify-between">
      <SingleStat imgSource={windImage}>22km</SingleStat>
      <SingleStat imgSource={rainImage}>23%</SingleStat>
      <SingleStat imgSource={sunImage}>6:03 AM</SingleStat>
    </View>
  );
}
