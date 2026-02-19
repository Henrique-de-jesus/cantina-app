import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.marca}>Bem vindo</Text>
    
      <View>
    <TouchableOpacity>
      <Image style={styles.imagem}
        source={require('../image/salsicha.png')} />
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
    margin: 15  }
})