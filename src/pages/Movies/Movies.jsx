import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { fetchListOfFilms } from 'helpers/api';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { AlternativeMessage } from 'components/ListOfFilms/ListOfFilms.styled';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filteredValue, setFilteredValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const onSearch = e => {
    e.preventDefault();
    setSearchValue(e.target.input.value);
  };

  const onFilter = filterValue => {
    setFilteredValue(filterValue);
  };
  useEffect(() => {
    if (searchValue) {
      setSearchParams({ query: searchValue });
    }
    const query = searchParams.get('query');
    if (query) {
      fetchListOfFilms(`/search/movie?query=${query}`).then(response => {
        // if (!response.length) {
        //   toast('We can not find the film');
        // }
        setSearchedMovies(response);
      });
    }
  }, [searchParams, searchValue, setSearchParams]);

  useEffect(() => {
    if (searchedMovies.length) {
      const filteredArrayOfMovies = searchedMovies.filter(({ title }) =>
        title.toLowerCase().includes(filteredValue.toLowerCase())
      );
      setFilteredMovies(filteredArrayOfMovies);
    } else {
      setFilteredMovies([]);
    }
  }, [filteredValue, searchedMovies, searchedMovies.length]);

  return (
    <>
      <SearchForm onSearch={onSearch} onFilter={onFilter} />
      <ListOfFilms location={location} arrayOfFilms={filteredMovies} />
      {!filteredMovies.length && (
        <AlternativeMessage>
          Search result will be displayed here
        </AlternativeMessage>
      )}
    </>
  );
};

export default Movies;
