import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import Colors from "@/constants/Colors";

type Props = {
  press: () => void;
};

export default function FabVendas({ press }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={press}>
        <Ionicons size={40} name="barcode-outline" color={Colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 20,
    right: 30,
    backgroundColor: Colors.green,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
