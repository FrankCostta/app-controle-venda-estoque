import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import NavigatorBar from "@/components/NavigatorBar";
import Colors from "@/constants/Colors";

export default function Estoque() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de dados vindo de banco de dados (ex: API)
    setTimeout(() => {
      setProdutos([
        {
          id: "36",
          nome: "Celular",
          descricao: "Um ptimo celular da porra",
          preco: "39.9",
          quantidade: 40,
        },
        {
          id: "34",
          nome: "Celular",
          descricao: "Um ptimo celular da porra",
          preco: "39.9",
          quantidade: 53,
        },
        {
          id: "6644",
          nome: "Celular",
          descricao: "Um ptimo celular da porra",
          preco: "39.9",
          quantidade: 740,
        },
        {
          id: "05004",
          nome: "Iphone 16 Pro Max 1Tb",
          descricao: "Um ptimo celular da porra",
          preco: "3999.9",
          quantidade: 12,
        },
      ]);
      setLoading(false);
    }, 400);
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loadind} size="large" color="#2DD1AC" />
    );
  }

  return (
    <View style={styles.container}>
      <NavigatorBar />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => alert(item.quantidade)}>
            <Text style={styles.nome}>{item.nome} </Text>
            <Text style={styles.quantidade}>{item.quantidade} </Text>
          </Pressable>
        )}
      />
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
  },
  quantidade: {
    fontSize: 26,
    color: Colors.dark_gray,
    fontFamily: "SpaceMono-Regular",
  },
});
