import PropTypes from 'prop-types';
import { useTrail } from '@react-spring/web';
import {
  BackBox,
  Box,
  Container,
  FrontBox,
  GalleryContainer,
  Image,
  ImageLink,
} from './Gallery.styled';
import { useState } from 'react';

const Gallery = ({ galleryItems, location }) => {
  const shortGalleryItems = [...galleryItems];
  const qntOfCardsOnPage = 9;
  shortGalleryItems.length = qntOfCardsOnPage;
  const [trail, api] = useTrail(shortGalleryItems.length, () => ({
    rotateX: 0,
  }));
  const [currentId, setCurrentId] = useState(null);

  const handleClick = e => {
    setCurrentId(e.target.id);
    api.start({
      rotateX: 180,
    });
  };
  if (galleryItems.length) {
    return (
      <GalleryContainer>
        <Container onClick={handleClick}>
          {trail.map(({ rotateX }, i) => {
            return (
              <Box key={shortGalleryItems[i].id}>
                <FrontBox
                  key={shortGalleryItems[i].id}
                  id={shortGalleryItems[i].id}
                  style={{
                    transform: rotateX.to(() => {
                      return shortGalleryItems[i].id === Number(currentId)
                        ? 'perspective(600px) rotateX(180deg)'
                        : 'perspective(600px)';
                    }),
                    transformStyle: 'preserve-3d',
                  }}
                >
                  ?
                </FrontBox>
                <BackBox>
                  <ImageLink
                    to={`/movies/${shortGalleryItems[i].id}`}
                    state={{ from: location }}
                  >
                    <Image
                      src={shortGalleryItems[i].img}
                      alt={shortGalleryItems[i].title}
                      loading="lazy"
                    />
                  </ImageLink>
                </BackBox>
              </Box>
            );
          })}
        </Container>
      </GalleryContainer>
    );
  }
};

Gallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
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
export default Gallery;
