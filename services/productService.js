import { products } from "../data/database";
import { login } from "../services/authService";

const isAdmin = (user) => {
    if(!user || user.role)

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
    isAdmin(user)

    const index = products.findIndex(product => product.id === id);

    if(index === -1){
        alert("Produto não encontrado!")
    }

    products[index]
}