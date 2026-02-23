import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState('')
  const [senha, setSenha] = useState('')
  const [esqueceuSenha, setEsqueceuSenha] = useState('')


  function handlelogin() {
    //1. validar usuário e senha
    //2. redirecionar a tela principal
    if (!user.trim()) {
      alert('este campo tem que ser ´preenchido')
      return
    }
    if (!senha.trim()) {
      alert('este campo tem que ser ´preenchido')
      return
    }
    if (user === 'teste@teste.com' && senha === '123') {
      navigation.navigate('Home')
    } else {
      alert('inválido!')
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fundo_home_screen.png')} resizeMode="cover" style={[styles.fundo, styles.container]}>
        <Image style={styles.image} source={require('../assets/chefe_de_cozinha.png')}></Image>
        <Text style={styles.text}>Login</Text>
        <TextInput placeholder="Usuário, email ou telefone:" onChangeText={(u) => setUser(u)} style={styles.login}></TextInput>
        <TextInput placeholder="Senha:" secureTextEntry onChangeText={(s) => setSenha(s)} style={styles.login}></TextInput>
        <TouchableOpacity onPress={handlelogin}><Text style={styles.enter}>Entrar</Text></TouchableOpacity>
        <TouchableOpacity onPress={handlelogin}></TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text style={{ color: 'red', marginTop: 10 }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 15,
    padding: 10,
  },
  enter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 55,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    margin: 15,
    padding: 6,
    backgroundColor: '#ff5768'
  },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 1
  }
});