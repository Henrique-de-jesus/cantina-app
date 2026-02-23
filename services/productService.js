import { products } from "../data/database";
export const getProducts = async () => {
    console.log("banco simulado carregado!")
    console.log(products[0])
    return products;
};
export const getProductById = (id) => {
    return products.find(product => product.id === id);
};
export const addProduct = (newProduct) => {
    products.push(newProduct);
};