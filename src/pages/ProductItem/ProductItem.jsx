import { useParams } from 'react-router-dom';
import { getProductById } from 'fakeApi';

export const ProductItem = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  return product ? (
    <div>
      <h2>Product - {product.name}</h2>{' '}
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit
        cum vel corrupti tempora repellendus, reprehenderit corporis harum
        veniam rerum, numquam asperiores? Beatae, ipsum! Ipsam architecto
        laudantium iure accusamus ipsum!
      </div>
    </div>
  ) : (
    <div>Now showing product with id - {productId}</div>
  );
};
