import { Router } from 'express';
import ProductController from '../catalog/controllers/ProductController';

const catalogRouter: Router = Router();
catalogRouter.get('/', ProductController.getList);
catalogRouter.get('/filters', ProductController.getFilters);
export default catalogRouter;
