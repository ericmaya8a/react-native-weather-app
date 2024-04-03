import { TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { theme } from "../theme";

export function SearchButton({ toggleView }: { toggleView: VoidFunction }) {
  return (
    <TouchableOpacity
      className="rounded-full p-3 m-1"
      style={{ backgroundColor: theme.bgWhite(0.3) }}
      onPress={toggleView}
    >
      <MagnifyingGlassIcon size={25} color="white" />
    </TouchableOpacity>
  );
}
