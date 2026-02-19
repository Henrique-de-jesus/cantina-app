import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fundo_home_screen.png')} resizeMode="cover" style={styles.image}>
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
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundimage: '../assets/fundo_home_screen.png',
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