import styled from '@emotion/styled';
import { animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  border-radius: 25px;
  position: relative;
  height: 100%;
  width: 100%;
  flex-basis: calc((100% - 20px) / 3);
  animation: pulse 5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.97);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.97);
    }
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FrontBox = styled(animated.div)`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-weight: 800;
  font-size: 88px;
  border-radius: 25px;
  backface-visibility: hidden;
  caret-color: transparent;
  background-image: radial-gradient(
    circle,
    #c221e4,
    #ff00a5,
    #ff3167,
    #ff7e31,
    #ffb600,
    #ffb001,
    #ffa902,
    #ffa305,
    #fb6035,
    #dd0e56,
    #a3006f,
    #4d0479
  );
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 15px 2px rgba(255, 153, 0, 0.7),
      0 8px 10px -5px rgba(255, 153, 0, 0.5),
      0 -8px 10px -5px rgba(255, 153, 0, 0.5),
      10px 0 10px -5px rgba(255, 153, 0, 0.5),
      -10px 0 10px -5px rgba(255, 153, 0, 0.5);
  }
`;

export const BackBox = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-weight: 800;
  backface-visibility: hidden;

  inset: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  color: #fafafa;
`;

export const ImageLink = styled(Link)`
  display: block;
  box-sizing: content-box;
  height: 100%;
  border-radius: 25px;
  &:focus {
    box-shadow: 0 0 15px 2px rgba(255, 153, 0, 0.7),
      0 8px 10px -5px rgba(255, 153, 0, 0.5),
      0 -8px 10px -5px rgba(255, 153, 0, 0.5),
      10px 0 10px -5px rgba(255, 153, 0, 0.5),
      -10px 0 10px -5px rgba(255, 153, 0, 0.5);
  }
`;
