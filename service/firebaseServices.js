import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const produtoColecaoRef = collection(db, "produtos");

const listarProdutos = async (setProdutos) => {
  const qry = query(produtoColecaoRef, orderBy("nome", "asc"));
  return await onSnapshot(qry, (querySnapshot) => {
    const listaProduto = [];
    querySnapshot.forEach((doc) => {
      // Adciona cada produto (com seu ID e dados) à lista
      listaProduto.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setProdutos(listaProduto);
  });
};

const adicionarProduto = async (produto) => {
  try {
    const docRef = await addDoc(produtoColecaoRef, produto);
    console.log("Documento adicionado com ID: ", docRef.id);
  } catch (e) {
    console.log("Erro ao adicionar produto", e);
  }
};

export { produtoColecaoRef, listarProdutos, adicionarProduto };
