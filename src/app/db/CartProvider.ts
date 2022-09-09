import ProductDTO from '../catalog/models/ProductDTO';

class CartProvider {
  products: {[key: string]: number} = {};

  add = (productId: ProductDTO['id']) => {
    const count = this.products[productId];
    this.products[productId] = (count || 0) + 1;
    return {count: this.products[productId]};
  };

  remove = (productId: ProductDTO['id']) => {
    const count = this.products[productId];
    if (count) {
      this.products[productId] = count - 1;
    }
    return {count: this.products[productId]};
  };

  clear = () => {
    this.products = {};
  };
}

export default new CartProvider();
