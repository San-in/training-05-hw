import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const StyledLinkToBack = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const CardImgWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;

export const DetailsWrap = styled.div`
  width: 100%;
  /* display: flex; */
`;

export const CardImg = styled.img`
  width: 50%;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  font-size: 50px;
`;

export const StyledParagraph = styled.p`
  text-indent: 20px;
`;
