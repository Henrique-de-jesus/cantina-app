import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function HomeScreen() {
    return  (
        <View>
            <Text style={styles.marca}>Olá,</Text>
            <TouchableOpacity>
            <Image style={styles.salshicha}
            source={require('../image/ENROLADINHO-DE-SALSICHA-2.jpg')}/>
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
    salshicha: {
      width: 50,
      height: 50
    }
})