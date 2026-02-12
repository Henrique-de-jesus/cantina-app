import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState('')
  const [senha, setSenha] = useState('')
  const [esqueceuSenha, setEsqueceuSenha] = useState('')


  function handlelogin(){
    //1. validar usuário e senha
    //2. redirecionar a tela principal
    if(user === 'teste@teste.com' && senha === '123' || user === 'admetop' && senha === 'eee'){
      navigation.navigate('Home')
    } else{
      alert('Usuário inválido!')
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/chefe_de_cozinha.png')}></Image>
       <Text style={styles.text}>Login</Text>
      <TextInput placeholder="Usuário, email ou telefone:" onChangeText={(u) => setUser(u)} style={styles.login}></TextInput>
      <TextInput placeholder="Senha:" secureTextEntry onChangeText={(s) => setSenha(s)} style={styles.login}></TextInput>
       <TouchableOpacity onPress={handlelogin}><Text style={styles.enter}>Entrar</Text></TouchableOpacity>
       <TouchableOpacity onPress={handlelogin}>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
  <Text style={{ color: 'blue', marginTop: 10 }}>
    Esqueceu a senha?
  </Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae1dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,

  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  login: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 15,
    padding: 10,
  },
  enter: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 15,
    padding: 10,
    backgroundColor: '#ff5768'
  }
});