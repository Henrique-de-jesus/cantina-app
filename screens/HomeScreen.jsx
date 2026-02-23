import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getProducts } from '../services/productService'


export default function HomeScreen() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const data = await getProducts();
      setProducts(data)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
  if (loading){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Carregando...</Text>
    </View>
    )
  }else{

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.marca}>Bem vindo</Text>
  
        <View>
            <TouchableOpacity>
              <Image style={styles.imagem}
                source={products[0].image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.imagem}
                source={require('../image/doguinho.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.imagem}
                source={require('../image/pastel.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.imagem}
                source={require('../image/coca-cola.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.imagem}
                source={require('../image/fantaL.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.imagem}
                source={require('../image/guarana.png')} />
            </TouchableOpacity>
      )
  }

      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae1dd',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  marca: {
    backgroundColor: '#ff5768',
    textAlign: 'center',
    fontSize: 25,
  },
  imagem: {
    width: 150,
    height: 150,
    borderWidth: 1,
    margin: 15
  }
})