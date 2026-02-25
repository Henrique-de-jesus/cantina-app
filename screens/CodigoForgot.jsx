import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function CodigoForgot() {
  const navigation = useNavigation();

  const [generatedCode, setGeneratedCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  // Função para gerar código aleatório de 6 dígitos
  function generateCode() {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    console.log("Código gerado:", code); // aparece no console
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
    Alert.alert("Sucesso", "Código verificado com sucesso!");
    
    // depois você pode navegar para tela de nova senha
    // navigation.navigate("NewPassword");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite o código</Text>

      <Text style={styles.subtitle}>
        Um código de verificação foi enviado.
      </Text>

      <TextInput
        placeholder="Digite o código de 6 dígitos"
        value={inputCode}
        onChangeText={setInputCode}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 5
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#ff5768",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  resendText: {
    textAlign: "center",
    color: "#333",
    fontWeight: "500"
  }
});