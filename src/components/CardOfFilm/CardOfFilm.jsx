import PropTypes from 'prop-types';
import { TiArrowBack } from 'react-icons/ti';
import {
  CardImg,
  CardImgWrap,
  DetailsWrap,
  StyledLinkToBack,
  CardTitle,
  StyledParagraph,
} from 'components/CardOfFilm/CardOfFilm.styled';

const CardOfFilm = ({ movieDetails, location }) => {
  const { img, title, data, scores, overview, genres } = movieDetails;
  const backdropRef = location.state?.from ?? '/';
  return (
    <div>
      <StyledLinkToBack to={backdropRef}>
        <TiArrowBack /> Go back
      </StyledLinkToBack>
      <DetailsWrap>
        <CardImgWrap>
          <CardImg src={img} alt={title} loading="lazy" />
          <CardTitle className="title">
            <h2>
              {title} ({data})
            </h2>
            <p>User score: {scores}%</p>
          </CardTitle>
        </CardImgWrap>

        <div className="details-information">
          <h3 className="subtitle">Overview</h3>
          <StyledParagraph>{overview}</StyledParagraph>
          <h3 className="subtitle">Genres</h3>
          <StyledParagraph>{genres}</StyledParagraph>
        </div>
      </DetailsWrap>
    </div>
  );
};

CardOfFilm.propTypes = {
  movieDetails: PropTypes.exact({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
    scores: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  location: PropTypes.exact({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.object,
  }).isRequired,
};

export default CardOfFilm;
