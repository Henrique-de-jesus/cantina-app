import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Alert, 
    ImageBackground, 
    Image 
  } from "react-native";
  
  import { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  
  export default function RedefinirSenha() {
    const navigation = useNavigation();
  
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [error, setError] = useState("");
  
    function handleResetPassword() {
      setError("");
  
      if (senha === "" || confirmarSenha === "") {
        setError("Preencha todos os campos");
        return;
      }
  
      if (senha.length < 6) {
        setError("A senha deve ter pelo menos 6 caracteres");
        return;
      }
  
      if (senha !== confirmarSenha) {
        setError("As senhas não coincidem");
        return;
      }
  
      Alert.alert("Sucesso", "Senha redefinida com sucesso!");
  
      navigation.navigate("Login");
    }
  
    return (
      <ImageBackground
        source={require("../assets/fundo_home_screen.png")}
        resizeMode="cover"
        style={[styles.fundo, styles.container]}
      >
        <Image 
          style={styles.image} 
          source={require("../assets/chefe_de_cozinha.png")} 
        />
  
        <Text style={styles.title}>Redefinir Senha</Text>
  
        <TextInput
          placeholder="Nova senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
        />
  
        <TextInput
          placeholder="Confirmar nova senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
        />
  
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.showText}>
            {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          </Text>
        </TouchableOpacity>
  
        {error !== "" && <Text style={styles.error}>{error}</Text>}
  
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Salvar Nova Senha</Text>
        </TouchableOpacity>
  
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    fundo: {
      flex: 1,
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    image: {
      width: 120,
      height: 120,
      marginBottom: 20,
      resizeMode: "contain"
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#000"
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      borderRadius: 8,
      marginBottom: 15,
      backgroundColor: "#fff",
      width: "80%"
    },
    showText: {
      color: "#333",
      marginBottom: 15,
      fontWeight: "500"
    },
    error: {
      color: "red",
      marginBottom: 10,
    },
    button: {
      backgroundColor: "#ff5768",
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
      width: "80%"
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold"
    } 
  });