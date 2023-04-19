import styled from '@emotion/styled';

export const ReviewTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  caret-color: transparent;
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const UpdatedDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  font-size: 22px;
`;

export const ReviewsItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 0 20px;
`;

export const ReviewsList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewsContent = styled.p`
  text-indent: 20px;
  text-align: justify;
  font-size: 24px;
`;
