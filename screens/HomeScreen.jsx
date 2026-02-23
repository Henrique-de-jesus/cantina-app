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

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

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

        <View style={styles.grid}>
          {products.length > 0 && typeof products[0].image === String (
            <TouchableOpacity>
              <Image
                style={styles.imagem}
                source={{ uri: products[0].image.toString() }}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Image
              style={styles.imagem}
              source={require("../image/doguinho.png")}
            />
            <Text>Doguinho</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imagem}
              source={require("../image/pastel.png")}
            />
            <Text>Pastel</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imagem}
              source={require("../image/coca-cola.png")}
            />
            <Text>Coca cola</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imagem}
              source={require("../image/fantaL.png")}
            />
            <Text>Fanta laranja</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imagem}
              source={require("../image/guarana.png")}
            />
            <Text>Guaraná</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imagem}
              source={require("../image/miniPizza.png")}
            />
            <Text>Mini Pizza</Text>
          </TouchableOpacity>

          <TouchableOpacity>
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
});