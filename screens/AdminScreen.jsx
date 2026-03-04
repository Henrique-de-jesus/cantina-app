import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { useState, useEffect, useContext } from "react";
import { getProducts } from "../services/productService";
import { increaseStock, decreaseStock } from "../services/productService";
import { AuthContext } from "../context/AuthContext";

export default function AdminScreen() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os produtos.");
    }
  }

  async function handleIncreaseStock(productId) {
    try {
      await increaseStock(productId, 1, user);
      fetchData();
    } catch (error) {
      Alert.alert("Erro", error.message || "Não foi possível aumentar o estoque.");
    }
  }

  async function handleDecreaseStock(productId) {
    try {
      await decreaseStock(productId, 1, user);
      fetchData();
    } catch (error) {
      Alert.alert("Erro", error.message || "Não foi possível diminuir o estoque.");
    }
  }

  if (!user || (user.role || "").trim().toLowerCase() !== "admin") {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontSize: 18}}>Acesso negado</Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={styles.container}>
      {products.map(produto => (
        <View key={produto.id} style={styles.card}>
          {produto.image && <Image source={produto.image} style={styles.image} />}
          <Text style={styles.name}>{produto.nome}</Text>
          <Text>Estoque: {produto.estoque}</Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleIncreaseStock(produto.id)}
            >
              <Text style={styles.buttonText}>+ Estoque</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#A69494" }]}
              onPress={() => handleDecreaseStock(produto.id)}
            >
              <Text style={styles.buttonText}>- Estoque</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { backgroundColor: "#fff", marginBottom: 15, padding: 15, borderRadius: 10 },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 5 },
  image: { width: 100, height: 100, marginBottom: 5 },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  button: { backgroundColor: "#ff5768", padding: 10, borderRadius: 8, flex: 1, marginRight: 5 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});