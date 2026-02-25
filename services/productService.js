import { products } from "../data/database";

const isAdmin = (user) => {
    if (!user || user.role !== "admin") {
        throw new Error("Acesso negado. Apenas administradores podem realizar essa ação.");
    }
};

export const getProducts = async () => {
    return products;
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

export const addProduct = (newProduct, user) => {
    isAdmin(user);

    products.push(newProduct);
    return newProduct;
};

export const updateProduct = (id, updateData, user) => {
    isAdmin(user);

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        throw new Error("Produto não encontrado!");
    }

    products[index] = { ...products[index], ...updateData };
    return products[index];
};

export const deleteProduct = (id, user) => {
    isAdmin(user);

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        throw new Error("Produto não encontrado!");
    }

    const removedProduct = products.splice(index, 1);
    return removedProduct[0];
};