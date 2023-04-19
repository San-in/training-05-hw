import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RiHomeHeartFill } from 'react-icons/ri';
import { BiCameraMovie } from 'react-icons/bi';

import StyledLink from 'components/StyledLink/StyledLink.styled';
import {
  Header,
  Navigation,
  Footer,
} from 'components/SharedLayout/SharedLayout.styled';
import { LineWave } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledLink to="/">
            <RiHomeHeartFill /> Home
          </StyledLink>
          <StyledLink to="/movies">
            <BiCameraMovie /> Movies
          </StyledLink>
        </Navigation>
      </Header>
      <main>
        <Suspense
          fallback={
            <LineWave
              height="200"
              width="200"
              color="orangered"
              ariaLabel="line-wave"
              visible={true}
            />
          }
        >
          <Outlet />
          <ToastContainer
            style={{
              width: '600px',
              fontSize: '24px',
              fontWeight: '600',
            }}
          />
        </Suspense>
      </main>

      <Footer>Created by Oleksandr Sanin 2023</Footer>
    </>
  );
};

export default SharedLayout;
