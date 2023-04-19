import Gallery from 'components/Gallery/Gallery';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { fetchListOfFilms } from 'helpers/api';
import { useLocation } from 'react-router-dom';
import { GiCardRandom } from 'react-icons/gi';
import { GalleryWrap, HomeConteiner, ListTitle } from 'pages/Home/Home.styled';

const { useState, useEffect } = require('react');

const Home = () => {
  const [trendingMovies, setTrandingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchListOfFilms(`/trending/all/day`).then(response => {
      if (!response) {
        return;
      }
      setTrandingMovies(response);
    });
  }, []);

  return (
    <HomeConteiner>
      <div>
        <ListTitle>Top list</ListTitle>
        <ListOfFilms arrayOfFilms={trendingMovies} location={location} />
      </div>
      <GalleryWrap>
        <ListTitle>
          Pick at random <GiCardRandom />
        </ListTitle>
        <Gallery galleryItems={trendingMovies} location={location} />
      </GalleryWrap>
    </HomeConteiner>
  );
};

export default Home;
