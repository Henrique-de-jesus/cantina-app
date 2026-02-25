import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function CodigoForgot() {
  const navigation = useNavigation();

  const [generatedCode, setGeneratedCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  function generateCode() {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    console.log("Código gerado:", code);
  }

  useEffect(() => {
    generateCode();
  }, []);

  function handleVerifyCode() {
    if (inputCode === "") {
      setError("Digite o código");
      return;
    }

    if (inputCode !== generatedCode) {
      setError("Código incorreto");
      return;
    }

    setError("");
    navigation.navigate("RedefinirSenha");
  }

  return (
    <ImageBackground
      source={require('../assets/fundo_home_screen.png')}
      resizeMode="cover"
      style={[styles.fundo, styles.container]}
    >
      <Image 
        style={styles.image} 
        source={require('../assets/chefe_de_cozinha.png')} 
      />

      <Text style={styles.title}>Digite o código</Text>

      <Text style={styles.subtitle}>
        Um código de verificação foi enviado.
      </Text>

      <TextInput
        placeholder="Digite o código"
        value={inputCode}
        onChangeText={(text) => {
          const onlyNumbers = text.replace(/[^0-9]/g, "");
          setInputCode(onlyNumbers);
        }}
        keyboardType="numeric"
        maxLength={6}
        style={styles.input}
      />

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Verificar Código</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={generateCode}>
        <Text style={styles.resendText}>Reenviar código</Text>
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
    marginBottom: 10,
    color: "#000"
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 5,
    backgroundColor: "#fff",
    width: "80%"
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
    marginBottom: 15,
    width: "80%"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  resendText: {
    color: "#333",
    fontWeight: "500"
  }
});