import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function CarrinhoScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const [carrinho, setCarrinho] = useState(
    route.params && route.params.carrinho ? route.params.carrinho : []
  );

  function aumentar(index) {
    const novo = [...carrinho];
    novo[index].quantidade += 1;
    setCarrinho(novo);
  }

  function diminuir(index) {
    const novo = [...carrinho];
    if (novo[index].quantidade > 1) {
      novo[index].quantidade -= 1;
    } else {
      novo.splice(index, 1);
    }
    setCarrinho(novo);
  }

  const total = carrinho.reduce((acc, item) => {
    const preco = parseFloat(item.preco) || 0;
    return acc + preco * item.quantidade;
  }, 0);

  return (
    <ImageBackground
      source={require("../assets/fundo_home_screen.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Text style={styles.titulo}>Meu Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text style={styles.vazio}>Carrinho vazio</Text>
      ) : (
        <FlatList
          data={carrinho}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>R$ {item.preco}</Text>
              <Text>Qtd: {item.quantidade}</Text>

              <View style={styles.botoes}>
                <TouchableOpacity onPress={() => diminuir(index)} style={styles.btnQtd}>
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => aumentar(index)} style={styles.btnQtd}>
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.botaoText}>Voltar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  vazio: { textAlign: "center", marginTop: 20 },
  item: { backgroundColor: "#fff", padding: 15, marginBottom: 10, borderRadius: 8 },
  nome: { fontWeight: "bold" },
  botoes: { flexDirection: "row", marginTop: 10 },
  btnQtd: { backgroundColor: "#ff5768", padding: 10, borderRadius: 6, marginRight: 10 },
  btnText: { color: "#fff", fontWeight: "bold" },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 15, textAlign: "center" },
  botao: { backgroundColor: "#333", padding: 12, borderRadius: 8, marginTop: 20, marginBottom: 50 },
  botaoText: { color: "#fff", textAlign: "center" },
});