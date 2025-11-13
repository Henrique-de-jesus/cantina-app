import { View, Text, StyleSheet } from "react-native";


export default function HomeScreen() {
    return  (
        <View>
            <Text style={styles.marca}>Bem Vindo!</Text>
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