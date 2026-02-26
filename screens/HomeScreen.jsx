import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useEffect, useState, useContext } from "react";
import { getProducts, increaseStock, decreaseStock } from "../services/productService";
import { products as produtosLocais } from "../data/database";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  function handlePress(nome) {
    const produtoEncontrado = products.find(
      (products) => products.nome.toLowerCase() === nome.toLowerCase()
    );

    if (produtoEncontrado) {
      setProdutoSelecionado(produtoEncontrado);
    } else {
      console.log("Produto não encontrado!")
    }
  }

  async function fetchData() {
    try {
      const data = await getProducts();
      console.log("Produtos:", data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../assets/fundo_home_screen.png")}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <Text style={styles.marca}>Bem-vindo</Text>

          {produtoSelecionado && (
            <View style={styles.card}>
              <Text style={styles.titulo}>
                {produtoSelecionado.nome}
              </Text>

              <Text>
                preço: {produtoSelecionado.preco}
              </Text>

              <Text>
                descrição: {produtoSelecionado.descricao}
              </Text>
              <TouchableOpacity style={styles.cardBotao1}>
                <Text style={styles.cardText}>Adicionar ao carrinho</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardBotao2}
              onPress={() => setProdutoSelecionado(null)}>
                <Text style={styles.cardText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.grid}>
            {/* Produto vindo da API */}
            {products.length > 0 &&
              typeof products[0].image === "string" && (
                <TouchableOpacity
                  key={products[0].id}
                  onPress={() => handlePress(products[0].name)}
                >
                  <Image
                    style={styles.imagem}
                    source={{ uri: products[0].image }}
                  />
                  <Text>{products[0].name}</Text>
                </TouchableOpacity>
              )}

            {/* Produtos fixos */}

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Salsicha")}>
              <Image
              style={styles.imagem}
                source={require("../image/salsicha.png")}
              />
              <Text style={styles.comidaText}>Salsicha</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Dogão")}>
              <Image
              style={styles.imagem}
                source={require("../image/doguinho.png")}
              />
              <Text style={styles.comidaText}>Doguinho</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Pastel")}>
              <Image
              style={styles.imagem}
                source={require("../image/pastel.png")}
              />
              <Text style={styles.comidaText}>Pastel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Coca Cola")}>
              <Image
              style={styles.imagem}
                source={require("../image/coca-cola.png")}
              />
              <Text style={styles.comidaText}>Coca Cola</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Fanta Laranja")}>
              <Image
              style={styles.imagem}
                source={require("../image/fantaL.png")}
              />
              <Text style={styles.comidaText}>Fanta laranja</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Guaraná")}>
              <Image
              style={styles.imagem}
                source={require("../image/guarana.png")}
              />
              <Text style={styles.comidaText}>Guaraná</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Mini Pizza")}>
              <Image
              style={styles.imagem}
                source={require("../image/miniPizza.png")}
              />
              <Text style={styles.comidaText}>Mini Pizza</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardComida} onPress={() => handlePress("Coxinha")}>
              <Image
              style={styles.imagem}
                source={require("../image/coxinha.png")}
              />
              <Text style={styles.comidaText}>Coxinha</Text>
            </TouchableOpacity>

            {produtoSelecionado && (
  <>
    <Text>
      Estoque: {produtoSelecionado.estoque}
    </Text>

    {user && user.role === "admin" && (
      <View>
        <TouchableOpacity
          onPress={async () => {
            await increaseStock(produtoSelecionado.id, 1, user);
            fetchData();
          }}
        >
          <Text>+ Estoque</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await decreaseStock(produtoSelecionado.id, 1, user);
            fetchData();
          }}
        >
          <Text>- Estoque</Text>
        </TouchableOpacity>
      </View>
    )}
  </>
)}

          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  marca: {
    backgroundColor: "#ff5768",
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20
  },
  imagem: {
    width: 150,
    height: 150,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    width: 330,
    elevation: 5
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardBotao1: {
    backgroundColor: "#ff5768",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  cardBotao2: {
    backgroundColor: "#A69494",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  cardText:{
    fontWeight: "bold",
    textAlign: "center",
  },
  cardComida:{
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  comidaText:{
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  
});