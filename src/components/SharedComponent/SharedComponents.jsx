import { StyledLink } from 'components/StyledLink/StyledLink.styled';
import { Outlet } from 'react-router-dom';

export const SharedComponents = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>
      <Outlet />
    </>
  );
};
