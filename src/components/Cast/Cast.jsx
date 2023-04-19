import { fetchMovieCast } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastsList,
  CastsItem,
  CastImage,
  CastActorsInfo,
} from 'components/Cast/Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then(cast => {
      setCastInfo(cast);
    });
  }, [movieId]);

  if (!castInfo.length) {
    return <p>Sorry, no information about cast</p>;
  } else {
    return (
      <CastsList>
        {castInfo.map(({ name, img, id, character }) => (
          <CastsItem key={id}>
            <CastImage src={img} alt={name} loading="lazy" />
            <CastActorsInfo>
              <p>{name}</p>
              <p>{character}</p>
            </CastActorsInfo>
          </CastsItem>
        ))}
      </CastsList>
    );
  }
};
export default Cast;
