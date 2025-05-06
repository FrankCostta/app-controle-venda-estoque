import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

export default function FabEstoque() {
  return (
    <View style={styles.container}>
      <Link href="/screens/cadastro">
        <Ionicons size={40} name="add" color={Colors.white} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 30,
    right: 30,
    backgroundColor: Colors.green,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
