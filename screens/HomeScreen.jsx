import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function HomeScreen() {
    return  (
        <View>
            <Text style={styles.marca}>Olá,</Text>
            <TouchableOpacity>
            <Image style={styles.imagem}
            source={require('../image/salsicha.png')}/>
            </TouchableOpacity>
              <TouchableOpacity>
              <Image style={styles.imagem}
              source={require('../image/doguinho.png')}/>
              </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.imagem}
                source={require('../image/pastel.png')}/>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    marca: {
    backgroundColor: '#ff5768',
    textAlign: 'center',
    fontSize: 25,
    },
    imagem: {
      width: 150,
      height: 150
    }
})