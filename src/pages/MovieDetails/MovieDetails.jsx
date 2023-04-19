import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/api';
import { useEffect, useState } from 'react';
import NotFound from 'pages/NotFound/NotFound';
import CardOfFilm from 'components/CardOfFilm/CardOfFilm';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isNotFoundShown, setIsNotFoundShown] = useState(false);
  const location = useLocation();

  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieDetails(Number(movieId)).then(response => {
      if (!response) {
        setIsNotFoundShown(true);
        return;
      }
      setMovieDetails(response);
      setIsNotFoundShown(false);
    });
  }, [movieId]);
  if (movieDetails) {
    return (
      <>
        <CardOfFilm movieDetails={movieDetails} location={location} />

        <AdditionalInformation />
        <Outlet />
      </>
    );
  } else {
    return isNotFoundShown && <NotFound />;
  }
};

export default MovieDetails;
