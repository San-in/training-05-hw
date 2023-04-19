import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const KEY = 'd28f3e0fb4d925d2e7ab6a551bbf47ba';
const params = {
  api_key: KEY,
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchListOfFilms = async url => {
  try {
    const response = await axios
      .get(url, { params })
      .then(({ data: { results } }) => {
        const normalizedResults = results.map(
          ({ title, name, id, poster_path }) => {
            return {
              title: title ? title : name,
              img: `https://www.themoviedb.org/t/p/original/${poster_path}`,
              id,
            };
          }
        );
        return normalizedResults;
      });

    return response;
  } catch ({ message }) {
    toast.error('Oups! Something is going wrong... Please try later :(');
    // console.error(message);
  }
};
export const fetchMovieDetails = async id => {
  try {
    const response = await axios
      .get(`/movie/${id}`, { params })
      .then(
        ({
          data: {
            title,
            name,
            release_date,
            genres,
            overview,
            vote_average,
            id,
            backdrop_path,
          },
        }) => {
          const normalizedResults = {
            title: title ? title : name,
            img: backdrop_path
              ? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
              : `https://otv.one/uploads/default_image/thumbnail.jpg`,
            overview: overview ? overview : 'no information about overview',
            scores: (vote_average * 10).toFixed(2),
            data: new Date(release_date).getFullYear(),
            genres: genres
              ? genres.map(genre => genre.name).join(', ')
              : 'no information about genres',
            id,
          };
          return normalizedResults;
        }
      );
    return response;
  } catch ({ message }) {
    // console.error(message);
    toast.error("We can't find information of the film");
  }
};
export const fetchMovieCast = async id => {
  try {
    const response = await axios
      .get(`/movie/${id}/credits`, { params })
      .then(({ data: { cast } }) =>
        cast.map(({ name, character, profile_path, id }) => {
          return {
            name,
            character,
            img: profile_path
              ? `https://www.themoviedb.org/t/p/original/${profile_path}`
              : `https://otv.one/uploads/default_image/thumbnail.jpg`,
            id,
          };
        })
      );
    return response;
  } catch ({ message }) {
    // console.error(message);
    toast.error('Oups! Something is going wrong... Please try later :(');
  }
};
export const fetchMovieReviews = async id => {
  try {
    const response = await axios
      .get(`/movie/${id}/reviews`, { params })
      .then(({ data: { results } }) =>
        results.map(({ author, content, created_at, updated_at, id }) => {
          return {
            author,
            content,
            created_at,
            updated_at,
            id,
          };
        })
      );
    return response;
  } catch ({ message }) {
    // console.error(message);
    toast.error('Oups! Something is going wrong... Please try later :(');
  }
};
