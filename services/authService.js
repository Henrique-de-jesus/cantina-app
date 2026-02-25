import { users } from "../data/database";

export const login = (email, senha) => {
    const user = users.find(
        (user) => user.email === email && user.senha === senha
    );

    return user || null;
};

export const autenticarUser = (email, senha, navigation) => {
    const user = login(email, senha);

    if (!user) {
        alert("Usuário inválido!");
        return;
    }

    if (user.role === "admin") {
        navigation.navigate("AdminHome");
    } else {
        navigation.navigate("Home");
    }
};