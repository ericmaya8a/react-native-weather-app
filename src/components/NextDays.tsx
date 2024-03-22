import { ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { SingleDay } from "./SingleDay";

export function NextDays() {
  return (
    <View className="mb-2 space-y-3">
      <View className="flex-row items-center mx-5 gap-2">
        <CalendarDaysIcon size={22} color="white" />
        <Text className="text-base text-white">Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
      >
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
      </ScrollView>
    </View>
  );
}
