import { ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { SingleDay } from "./SingleDay";

type DailyForecastProps = {
  data?: Forecast;
};

export function DailyForecast({ data }: DailyForecastProps) {
  if (data)
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
          {data.forecast.forecastday.map((day, index) => {
            return <SingleDay key={`${day.date}-${index}`} data={day} />;
          })}
        </ScrollView>
      </View>
    );

  return null;
}
