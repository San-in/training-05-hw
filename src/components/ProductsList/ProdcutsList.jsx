import { StyledLink } from 'components/StyledLink/StyledLink.styled';

export const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <img src="https://via.placeholder.com/200x100" alt="" />
          {product.name} <StyledLink to={`${product.id}`}>Products</StyledLink>
        </li>
      ))}
    </ul>
  );
};
