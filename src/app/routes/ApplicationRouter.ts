import express, {Router} from 'express';
import CatalogRouter from './CatalogRouter';
import CartRouter from './CartRouter'

const ApplicationRouter: Router = express.Router();
ApplicationRouter.use('/products', CatalogRouter);
ApplicationRouter.use('/cart', CartRouter);

export default ApplicationRouter;
