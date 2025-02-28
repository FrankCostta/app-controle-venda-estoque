import Colors from "@/constants/Colors";
import { View, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function BotaoCadastro({ label, theme, onPress }: Props) {
  {
    if (theme === "primary") {
      return (
        <Pressable
          style={[styles.container, { backgroundColor: Colors.green }]}
          onPress={onPress}
        >
          <Text style={[styles.label, { color: Colors.white }]}>{label}</Text>
        </Pressable>
      );
    }
    return (
      <Pressable
        style={[styles.container, { borderWidth: 3, borderColor: "#d8d8da" }]}
        onPress={onPress}
      >
        <Text style={[styles.label, { color: "#adadb8" }]}>{label}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 14,
  },
  label: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 20,
    textAlign: "center",
  },
});
