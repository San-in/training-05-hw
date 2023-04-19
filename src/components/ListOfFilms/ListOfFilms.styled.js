import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  font-size: 24px;
  line-height: 1.2;
`;

export const StyledLink = styled(Link)`
  &:focus,
  &:hover {
    color: orangered;
  }
`;

export const AlternativeMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
