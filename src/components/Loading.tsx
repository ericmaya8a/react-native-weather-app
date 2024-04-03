import LottieView from "lottie-react-native";
import { useWindowDimensions, View } from "react-native";
import loadingAnimation from "../assets/lottie/loading.json";

export function Loading() {
  const { width } = useWindowDimensions();
  const loadingSize = width - 30;

  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        autoPlay
        loop
        source={loadingAnimation}
        style={{
          width: loadingSize,
          height: loadingSize,
        }}
      />
    </View>
  );
}
