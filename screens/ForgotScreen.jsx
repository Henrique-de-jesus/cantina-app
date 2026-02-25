import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator,ImageBackground} from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ForgotScreen() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function handleResetPassword() {
    setError('');

    if (email === '') {
      setError('Digite seu email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Digite um email válido');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Instruções enviadas para recuperação de senha.');
      navigation.navigate("CodigoForgot");
    }, 2000);
  }

  return (
    <ImageBackground
      source={require("../assets/fundo_home_screen.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Recuperar Senha</Text>

        <Text style={styles.subtitle}>
          Digite seu email cadastrado para receber o link de redefinição.
        </Text>

        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity 
          style={[styles.button, loading && { opacity: 0.7 }]} 
          onPress={handleResetPassword}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Enviar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CodigoForgot")}>
          <Text style={styles.backText}>Voltar para login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
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
    backgroundColor: "#fff"
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#ff5768",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backText: {
    textAlign: "center",
    color: "#333",
    fontWeight: "500"
  }
});