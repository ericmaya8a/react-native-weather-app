import { PropsWithChildren } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type SingleStatProps = {
  imgSource: ImageSourcePropType;
};

export function SingleStat({
  children,
  imgSource,
}: PropsWithChildren<SingleStatProps>) {
  return (
    <View className="flex-row space-x-2 items-center">
      <Image className="h-6 w-6" source={imgSource} />
      <Text className="text-white font-semibold text-base">{children}</Text>
    </View>
  );
}
