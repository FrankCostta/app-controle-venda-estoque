import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
  isvisible: boolean;
  onClose: () => void;
};

export default function CbModal({ isvisible, onClose }: Props) {
  return (
    <Modal visible={isvisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>EM BREVE!</Text>
        </View>

        <View style={styles.btArea}>
          <Pressable onPress={onClose} style={styles.btClose}>
            <Ionicons name="close" size={50} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark_gray,
    top: 60,
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 5,
    paddingTop: 50,
  },
  content: {
    backgroundColor: "white",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  btArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  btClose: {
    margin: 40,
    backgroundColor: "#FF0000",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
