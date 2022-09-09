import {Request, Response} from 'express';
import CartProvider from '../../db/CartProvider';
import ProductDTO from '../models/ProductDTO';

export default {
  getCart,
  addProduct,
  removeProduct,
  submitCart,
};

function getCart(req: Request, res: Response) {
  try {
    return res.status(200).json(CartProvider.products);
  } catch (e) {
    res.status(500).json(e);
  }
}

function addProduct(req: Request<{productId: ProductDTO['id']}>, res: Response<{count: number}>) {
  try {
    return res.status(201).json(CartProvider.add(req.params.productId));
  } catch (e) {
    res.status(500).json(e);
  }
}

function removeProduct(req: Request<{productId: ProductDTO['id']}>, res: Response<{count: number}>) {
  try {
    return res.status(201).json(CartProvider.remove(req.params.productId));
  } catch (e) {
    res.status(500).json(e);
  }
}

function submitCart(req: Request, res: Response) {
  try {
    CartProvider.clear();
    return res.status(201);
  } catch (e) {
    res.status(500).json(e);
  }
}
