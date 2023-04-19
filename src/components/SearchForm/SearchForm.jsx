import PropTypes from 'prop-types';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
  SearchInputField,
  FilterInputField,
  InputsWrap,
} from 'components/SearchForm/SearchForm.styled';
import { useEffect, useState } from 'react';

const SearchForm = ({ onSearch, onFilter }) => {
  const [inputValue, setInputValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const onChange = ({ target: { name, value } }) => {
    name === 'input'
      ? setInputValue(value.trim())
      : setFilterValue(value.trim());
  };

  useEffect(() => {
    onFilter(filterValue);
  }, [filterValue, onFilter]);
  return (
    <Form
      onSubmit={e => {
        onSearch(e);
        setInputValue('');
        setFilterValue('');
      }}
    >
      <FormLabel htmlFor="text-input">What are you looking for ?</FormLabel>
      <InputsWrap>
        <SearchInputField>
          <FormInput
            type="text"
            id="text-input"
            name="input"
            value={inputValue}
            onChange={onChange}
          />
          <FormButton type="submit">Search Movie</FormButton>
        </SearchInputField>
        <FilterInputField>
          <FormInput
            type="text"
            name="filter"
            value={filterValue}
            onChange={onChange}
          />
          <FormButton type="submit">Filter</FormButton>
        </FilterInputField>
      </InputsWrap>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  onFilter: PropTypes.func,
};
export default SearchForm;
