import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { authService } from "../services/authService";
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [userLogin, setUserLogin] = useState('');
  const [senha, setSenha] = useState('');
  const { setUser } = useContext(AuthContext);

  function handlelogin() {
    if (!userLogin.trim()) {
      alert('Este campo precisa ser preenchido');
      return;
    }

    if (!senha.trim()) {
      alert('Este campo precisa ser preenchido');
      return;
    }

    const usuarioLogado = authService.login(userLogin.trim(), senha.trim());

    if (!usuarioLogado) {
      alert('Usuário ou senha inválidos!');
      return;
    }

    setUser(usuarioLogado);

    if (usuarioLogado.role.trim() === "admin") {
      navigation.navigate("Admin");
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo_home_screen.png')}
        resizeMode="cover"
        style={[styles.fundo, styles.container]}
      >
        <Image
          style={styles.image}
          source={require('../assets/chefe_de_cozinha.png')}
        />

        <Text style={styles.text}>Login</Text>

        <TextInput
          placeholder="Usuário, email ou telefone:"
          onChangeText={setUserLogin}
          style={styles.login}
          autoCapitalize="none"
          value={userLogin}
        />

        <TextInput
          placeholder="Senha:"
          secureTextEntry
          onChangeText={setSenha}
          style={styles.login}
          value={senha}
        />

        <TouchableOpacity onPress={handlelogin}>
          <Text style={styles.enter}>Entrar</Text>
        </TouchableOpacity>

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
    height: 45,
    width: 85,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    margin: 25,
    padding: 6,
    backgroundColor: '#ff5768',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 1,
  }
});