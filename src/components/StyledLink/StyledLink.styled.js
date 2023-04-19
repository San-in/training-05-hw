import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  margin-left: 20px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover,
  &:focus {
    color: orangered;
  }
  &.active {
    color: orangered;
    &:hover,
    &:focus {
      color: orange;
    }
  }
`;

export default StyledLink;
