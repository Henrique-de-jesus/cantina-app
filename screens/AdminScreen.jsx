import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useState, useEffect, useContext } from "react";
import { getProducts } from "../services/productService";
import { increaseStock, decreaseStock } from "../services/adminService";
import { AuthContext } from "../context/AuthContext";

export default function AdminScreen() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    const data = await getProducts();
    setProducts(data);
  }
  console.log(user)
  console.log(user.role)

  if (!user || user.role !== "admin") return <Text>Acesso negado</Text>;

  return (
    <ScrollView style={styles.container}>
      {products.map(produto => (
        <View key={produto.id} style={styles.card}>
          {produto.image && <Image source={produto.image} style={styles.image} />}
          <Text style={styles.name}>{produto.nome}</Text>
          <Text>Estoque: {produto.estoque}</Text>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={async () => { await increaseStock(produto.id, 1, user); fetchData(); }}>
              <Text style={styles.buttonText}>+ Estoque</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: "#A69494" }]} onPress={async () => { await decreaseStock(produto.id, 1, user); fetchData(); }}>
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