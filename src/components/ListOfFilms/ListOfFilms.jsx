import PropTypes from 'prop-types';
import { FcFilmReel } from 'react-icons/fc';
import {
  StyledLink,
  StyledList,
} from 'components/ListOfFilms/ListOfFilms.styled';

const ListOfFilms = ({ arrayOfFilms, location }) => {
  return (
    <StyledList>
      {arrayOfFilms.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <FcFilmReel /> {title}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
};
ListOfFilms.propTypes = {
  arrayOfFilms: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  location: PropTypes.exact({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.object,
  }).isRequired,
};

export default ListOfFilms;
