import BotaoCadastro from "@/components/BotaoCadastro";
import { Tabs, useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Colors from "@/constants/Colors";
import { adicionarProduto } from "@/service/firebaseServices";

export default function Cadastro() {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [codigo, setCodigo] = useState("");
  const [quantidade, setQuantidade] = useState("");
  let enableButton = true; // Habilita o botão de cadastro
  const router = useRouter();

  // Verifica se os campos entradas necessários não estão vazios
  if (!produto || !preco) {
    enableButton = false;
  }

  const cadastrarProduto = () => {
    const obj = {
      nome: produto,
      preco: preco,
      codigo: codigo,
      quantidade: quantidade || 1,
    };
    adicionarProduto(obj);
    // retorna a tela anterior definida ( ./estoque/)
    router.push("/estoque");
  };

  // Limpa todos os campos de entrada
  const limparInputs = () => {
    setProduto("");
    setPreco("");
    setCodigo("");
    setQuantidade("");
  };

  return (
    <View style={styles.container}>
      <Tabs.Screen options={{ title: "Cadastro de Produtos" }} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.form}>
            <ScrollView style={{ marginBottom: 100 }}>
              <Text style={styles.label}>Nome do Produto:</Text>
              <TextInput
                style={styles.input}
                value={produto}
                onChangeText={setProduto}
                inputMode="text"
              />

              <Text style={styles.label}>Preço de Venda:</Text>
              <TextInput
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                inputMode="numeric"
              />

              <Text style={styles.label}>Código do Produto:</Text>
              <TextInput
                style={styles.input}
                value={codigo}
                onChangeText={setCodigo}
                inputMode="numeric"
              />

              <Text style={styles.label}>Quantidade em Estoque:</Text>
              <TextInput
                style={styles.input}
                value={quantidade}
                onChangeText={setQuantidade}
                inputMode="numeric"
              />
            </ScrollView>

            {/* Caso for verdadeiro habilita o botão de cadastro
             * Caso seja falso desabilita e lança um alerta */}
            {enableButton ? (
              <BotaoCadastro
                label="Cadastrar Produto"
                theme="primary"
                onPress={cadastrarProduto}
              />
            ) : (
              <BotaoCadastro
                label="Cadastrar Produto"
                onPress={() =>
                  Alert.alert("Por favor!", "Informe os dados necessários.", [
                    { text: "OK" },
                  ])
                }
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  form: {
    margin: 16,
    flex: 1,
  },
  label: {
    color: Colors.dark_gray,
    fontSize: 20,
    fontFamily: "SpaceMono-Regular",
    paddingVertical: 10,
  },
  input: {
    color: Colors.dark_gray,
    fontFamily: "SpaceMono-Regular",
    fontSize: 24,
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.light_gray,
    borderRadius: 12,
  },
});
