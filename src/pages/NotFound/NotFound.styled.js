import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotFoundConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: sans-serif;
`;

export const NotFoundTitle = styled.h1`
  font-size: 8rem;
  margin: 0;
`;
export const NotFoundContent = styled.p`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;
`;

export const NotFoundBtn = styled(NavLink)`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #0069d9;
  }
`;
