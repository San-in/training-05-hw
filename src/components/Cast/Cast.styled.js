import styled from '@emotion/styled';

export const CastsList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  max-width: 15%;
  gap: 20px;
`;

export const CastsItem = styled.li`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 25px;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 2px rgba(255, 153, 0, 0.7),
      0 8px 10px -5px rgba(255, 153, 0, 0.5),
      0 -8px 10px -5px rgba(255, 153, 0, 0.5),
      10px 0 10px -5px rgba(255, 153, 0, 0.5),
      -10px 0 10px -5px rgba(255, 153, 0, 0.5);
  }
`;

export const CastImage = styled.img`
  width: 100%;
  border-radius: 25px 25px 0 0;
`;

export const CastActorsInfo = styled.div`
  padding: 0 10px;
  text-align: center;
  & > p:first-of-type {
    font-weight: 700;
    font-size: 30px;
  }
  & > p:last-of-type {
    font-size: 20px;
  }
`;
