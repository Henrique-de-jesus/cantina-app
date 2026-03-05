import { users } from "../data/database";

export const authService = {
  login(emailOuNome, senha) {
    const usuario = users.find(
      u =>
        (u.email === emailOuNome || u.nome === emailOuNome) &&
        u.senha === senha
    );
    return usuario || null;
  }
};

export const autenticarUser = (email, senha, navigation) => {
    const user = login(email, senha);

    if (!user) {
        alert("Usuário inválido!");
        return;
    }

    if (user.role === "admin") {
        navigation.navigate("Admin");
    } else {
        navigation.navigate("Home");
    }
};