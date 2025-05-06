import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Colors from "@/constants/Colors";
import FabVendas from "@/components/FabVendas";
import CbModal from "@/components/CbModal";
import { useState, useEffect } from "react";

import { listarProdutos } from "@/service/firebaseServices";

export default function Vendas() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      {/* Lista de Produtos disponíveis */}
      <View style={styles.produtoArea}>
        <FlatList
          data={produtos}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.produto}>
              <Text style={styles.abrev}>{item.nome[0]}</Text>
              <Text style={styles.desc}>{item.nome}</Text>
              <Text style={styles.valor}>R$ {item.preco}</Text>
            </Pressable>
          )}
        />
      </View>

      {/* Modal de código de barra */}
      <CbModal
        isvisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <FabVendas press={() => setIsModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  produto: {
    width: "32%",
    height: 150,
    marginTop: 5,
    marginLeft: 4,
    backgroundColor: Colors.dark_gray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  abrev: {
    fontSize: 50,
    color: "#bcb",
  },
  desc: {
    fontSize: 12,
    color: "#bcb",
  },
  valor: {
    fontSize: 20,
    color: "#ffffff",
  },
  loadind: {
    flex: 1,
  },
});
