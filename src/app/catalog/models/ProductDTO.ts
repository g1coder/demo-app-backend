type ProductDTO = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
  tag?: string;
};

export default ProductDTO;
