import {Router} from 'express';
import CartController from '../catalog/controllers/CartController';

const cartRouter: Router = Router();

cartRouter.get('/', CartController.getCart);
cartRouter.post('/add', CartController.addProduct);
cartRouter.post('/remove', CartController.removeProduct);
cartRouter.post('/submit', CartController.submitCart);

export default cartRouter;
