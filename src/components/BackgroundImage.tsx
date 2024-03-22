import { Image } from "react-native";
import bgImage from "../assets/images/bg.webp";

export function BackgroundImage() {
  return (
    <Image className="absolute h-full w-full" source={bgImage} blurRadius={5} />
  );
}
