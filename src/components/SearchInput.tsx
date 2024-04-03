import { PropsWithChildren } from "react";
import { TextInput, View } from "react-native";
import { theme } from "../theme";

type SearchInputProps = {
  isVisible: boolean;
  searchValue: string;
  handleChange: (value: string) => void;
};

export function SearchInput({
  children,
  isVisible,
  searchValue,
  handleChange,
}: PropsWithChildren<SearchInputProps>) {
  return (
    <View
      className="flex-row justify-end items-center rounded-full"
      style={{
        backgroundColor: isVisible ? theme.bgWhite(0.2) : "transparent",
      }}
    >
      {isVisible ? (
        <TextInput
          className="pl-6 h-10 pb-1 flex-1 text-base text-white"
          placeholder="Search city"
          placeholderTextColor="lightgray"
          value={searchValue}
          onChangeText={(value) => handleChange(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      ) : null}
      {children}
    </View>
  );
}
