import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'helpers/api';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import {
  ReviewTitle,
  ReviewsContent,
  ReviewsItem,
  ReviewsList,
  UpdatedDate,
} from './Reviews.styled';

const Reviews = () => {
  function formattedDate(data) {
    return new Date(data).toISOString().split('T')[0];
  }
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then(reviews => setReviewsInfo(reviews));
  }, [movieId]);

  if (!reviewsInfo.length) {
    return <p>Sorry, no information about reviews</p>;
  } else {
    return (
      <ReviewsList>
        {reviewsInfo.map(({ author, content, created_at, updated_at, id }) => {
          const updatedDate = formattedDate(updated_at);
          const createdDate = formattedDate(created_at);
          return (
            <ReviewsItem key={id}>
              <ReviewTitle>
                <FaUserCircle />
                <h4>{author}</h4>
              </ReviewTitle>
              <ReviewsContent>
                {content || 'no infornation about this review'}
              </ReviewsContent>
              <UpdatedDate>
                <p>
                  {updatedDate < createdDate
                    ? `Updated at ${updatedDate}`
                    : `Created at ${createdDate}`}
                </p>
                <AiOutlineFieldTime />
              </UpdatedDate>
            </ReviewsItem>
          );
        })}
      </ReviewsList>
    );
  }
};
export default Reviews;
