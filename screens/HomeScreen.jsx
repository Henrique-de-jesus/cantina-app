import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { products as produtosLocais } from "../data/database";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

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
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../assets/fundo_home_screen.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Text style={styles.marca}>Bem-vindo</Text>

        {produtoSelecionado &&(
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
          <TouchableOpacity onPress={() => handlePress("Salsicha")}>
            <Image
              style={styles.imagem}
              source={require("../image/salsicha.png")}
            />
            <Text>Salsicha</Text>
            <View>

              
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Dogão")}>
            <Image
              style={styles.imagem}
              source={require("../image/doguinho.png")}
            />
            <Text>Doguinho</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Pastel")}>
            <Image
              style={styles.imagem}
              source={require("../image/pastel.png")}
            />
            <Text>Pastel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Coca Cola")}>
            <Image
              style={styles.imagem}
              source={require("../image/coca-cola.png")}
            />
            <Text>Coca Cola</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Fanta Laranja")}>
            <Image
              style={styles.imagem}
              source={require("../image/fantaL.png")}
            />
            <Text>Fanta laranja</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Guaraná")}>
            <Image
              style={styles.imagem}
              source={require("../image/guarana.png")}
            />
            <Text>Guaraná</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Mini Pizza")}>
            <Image
              style={styles.imagem}
              source={require("../image/miniPizza.png")}
            />
            <Text>Mini Pizza</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Coxinha")}>
            <Image
              style={styles.imagem}
              source={require("../image/coxinha.png")}
            />
            <Text>Coxinha</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
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
  },
  imagem: {
    width: 150,
    height: 150,
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    width: 150,
    elevation: 5
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    
  }
});