import _ from 'lodash';
import {Request, Response} from 'express';
import ProductDTO from '../models/ProductDTO';
import IMeta from '../../models/IMeta';
import ProductsProvider from '../../db/ProductsProvider';

interface ResponseBody {
  objects: ProductDTO[];
  $meta: IMeta;
}

interface IRequestQuery {
  tag?: string;
  max?: number;
  min?: number;
  offset?: number;
  limit?: number;
}

export default {
  getList,
  getFilters,
};

function getList(req: Request, res: Response<ResponseBody>) {
  try {
    const {tag, max, min} = req.query as IRequestQuery;
    return res.status(200).json({
      objects: ProductsProvider.getByQueryParams({tag, maxPrice: max, minPrice: min}),
      $meta: {
        limit: 10,
        offset: 0,
        total_count: ProductsProvider.products.length,
      },
    });
  } catch (e) {
    res.status(500).json(e);
  }
}

function getFilters(
  req: Request,
  res: Response<{
    tags: string[];
    min: number | undefined;
    max: number | undefined;
  }>,
) {
  try {
    const withTags = ProductsProvider.products.filter((t: ProductDTO) => !!t.tag);
    const tags = _.uniqBy(withTags, (o: ProductDTO) => o.tag).map((p: ProductDTO) => p.tag) as string[];
    const min = _.minBy(ProductsProvider.products, (p: ProductDTO) => p.price)?.price;
    const max = _.maxBy(ProductsProvider.products, (p: ProductDTO) => p.price)?.price;

    return res.status(200).json({
      min,
      max,
      tags,
    });
  } catch (e) {
    res.status(500).json(e);
  }
}
