import { StyledLink } from 'components/StyledLink/StyledLink.styled';
import { Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <>
      .<h1>About</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <StyledLink to="team">Team</StyledLink>
      <StyledLink to="history">History</StyledLink>
      <div>
        <Outlet />
      </div>
    </>
  );
};
