import { getProducts } from 'fakeApi';
import { ProductsList } from 'components/ProductsList/ProdcutsList';

export const Products = () => {
  const products = getProducts();

  return <ProductsList products={products} />;
};
