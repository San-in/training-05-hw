import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import {
  NotFoundConteiner,
  NotFoundTitle,
  NotFoundContent,
  NotFoundBtn,
} from 'pages/NotFound/NotFound.styled';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let counter = 3;
    const backToHomeId = setInterval(() => {
      if (counter <= 0) {
        clearInterval(backToHomeId);
        navigate('/', { replace: true });
      } else {
        toast(`You'll be transferred to Home page in ${counter} seconds`, {
          autoClose: 1000,
        });
      }
      counter -= 1;
    }, 2000);
    return () => clearInterval(backToHomeId);
  }, [navigate]);

  return (
    <>
      <NotFoundConteiner>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundContent>
          Oops! The page you are looking for cannot be found.
        </NotFoundContent>
        <NotFoundBtn to="/">Go Home</NotFoundBtn>
      </NotFoundConteiner>
    </>
  );
};

export default NotFound;
