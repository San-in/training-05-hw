import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
`;
export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 300px;
  font-size: 16px;
`;
export const FormButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #006d87;
  }
`;

export const SearchInputField = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const FilterInputField = styled.div`
  display: flex;

  gap: 10px;
`;

export const InputsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
