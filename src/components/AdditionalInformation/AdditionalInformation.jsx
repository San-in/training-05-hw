import { VscPreview } from 'react-icons/vsc';
import { MdRecentActors } from 'react-icons/md';

import { LinkToInfo } from './AdditionalInformation.styled';

const AdditionalInformation = () => {
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <LinkToInfo to="cast">
            <MdRecentActors /> Cast
          </LinkToInfo>
        </li>
        <li>
          <LinkToInfo to="reviews">
            <VscPreview /> Reviews
          </LinkToInfo>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInformation;
