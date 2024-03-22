import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";

export function SearchInput() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View className="mx-4 relative">
      <View
        className="flex-row justify-end items-center rounded-full"
        style={{
          backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
        }}
      >
        {showSearch ? (
          <TextInput
            placeholder="Search city"
            placeholderTextColor="lightgray"
            className="pl-6 h-10 pb-1 flex-1 text-base text-white"
          />
        ) : null}
        <TouchableOpacity
          className="rounded-full p-3 m-1"
          style={{ backgroundColor: theme.bgWhite(0.3) }}
          onPress={() => setShowSearch(!showSearch)}
        >
          <MagnifyingGlassIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {showSearch ? (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
          <TouchableOpacity className="flex-row items-center py-3 px-4 mb-1 border-b-2 border-gray-400">
            <MapPinIcon size={20} color="gray" />
            <Text className="text-black text-lg text-ellipsis ml-2">
              London, United Kingdom
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
