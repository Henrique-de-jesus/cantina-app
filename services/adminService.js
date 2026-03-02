import { getProducts, updateProduct } from "./productService";

export async function increaseStock(productId, amount, user) {
  if (!user || user.role !== "admin") throw new Error("Acesso negado");

  const produtos = await getProducts();
  const produto = produtos.find(p => p.id === productId);
  if (!produto) throw new Error("Produto não encontrado");

  produto.estoque += amount;
  return updateProduct(produto);
}

export async function decreaseStock(productId, amount, user) {
  if (!user || user.role !== "admin") throw new Error("Acesso negado");

  const produtos = await getProducts();
  const produto = produtos.find(p => p.id === productId);
  if (!produto) throw new Error("Produto não encontrado");

  produto.estoque = Math.max(0, produto.estoque - amount);
  return updateProduct(produto);
}