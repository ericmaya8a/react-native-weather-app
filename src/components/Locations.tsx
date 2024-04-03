import { Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";

type LocationsProps = {
  data?: LocationType[];
  onPress: (name: string) => void;
};

export function Locations({ data, onPress }: LocationsProps) {
  if (data)
    return (
      <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
        {data.map(({ id, name, country }, index) => {
          const showBorder = data.length !== index + 1;
          const className = `flex-row items-center py-3 px-4 mb-1${
            showBorder ? " border-b-2 border-gray-400" : ""
          }`;
          return (
            <TouchableOpacity
              key={id}
              className={className}
              onPress={() => onPress(name)}
            >
              <MapPinIcon size={20} color="gray" />
              <Text className="text-black text-lg text-ellipsis ml-2">
                {name}, {country}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );

  return null;
}
