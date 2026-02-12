import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function ForgotScreen() {
  const [email, setEmail] = useState('');

  function handleResetPassword() {
    if (email === '') {
      alert('Digite seu email');
      return;
    }

    alert('Link de redefinição enviado para ' + email);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#ff5768",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
