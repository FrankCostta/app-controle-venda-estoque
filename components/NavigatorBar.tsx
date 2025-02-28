import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

export default function NavigatorBar() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 size={22} name="search" color="#a0a3a8" />
        <TextInput
          style={styles.inputSearch}
          placeholder="Pesquise por nome ou código"
        />
      </View>

      <Link href={"/screens/cadastro"}>
        <FontAwesome5 size={30} name="plus" color="#2DD1AC" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light_gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
  },
  inputSearch: {
    fontSize: 14,
    paddingHorizontal: 10,
    width: 250,
    color: Colors.dark_gray,
    fontFamily: "SpaceMono-Regular",
    borderRadius: 5,
  },
});
