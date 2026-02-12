import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function HomeScreen() {
    return  (
        <View>
            <Text style={styles.marca}>Olá, ${usuario}</Text>
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
    }
})