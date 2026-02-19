import { users } from ".../data/database";

export const login = (email, senha) => {
        const user = users.find(
        user = user.email === email && user.senha === senha
    );

    return user || null;
};