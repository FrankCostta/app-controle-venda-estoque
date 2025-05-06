import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from "react-native";
import Colors from "@/constants/Colors";
import FabEstoque from "@/components/FabEstoque";

import { listarProdutos } from "@/service/firebaseServices";

export default function Estoque() {
  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarProdutos(setProdutos);
    // Encerra o ActivityIndicator
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loadind} size="large" color="#2DD1AC" />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => alert(item.quantidade)}>
            <Text numberOfLines={1} style={styles.nome}>
              {item.nome}
            </Text>
            <Text style={styles.quantidade}>{item.quantidade}</Text>
          </Pressable>
        )}
      />

      <FabEstoque />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  loadind: { flex: 1 },
  item: {
    padding: 15,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: Colors.light_gray,
  },
  nome: {
    fontSize: 18,
    color: Colors.dark_gray,
    fontFamily: "SpaceMono-Regular",
    width: 280,
  },
  quantidade: {
    fontSize: 26,
    color: Colors.dark_gray,
    fontFamily: "SpaceMono-Regular",
  },
});
