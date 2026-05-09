import React, { useState } from "react";

function GiveReviews() {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [savedReview, setSavedReview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      rating,
      review,
    };

    setSavedReview(reviewData);

    setSubmitted(true);
  };

  return (
    <div>
      <h2>Give Reviews</h2>

      {submitted && (
        <p>Review already submitted.</p>
      )}

      <form onSubmit={handleSubmit}>
        <select
          value={rating}
          disabled={submitted}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />
        <br />

        <textarea
          value={review}
          disabled={submitted}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
        />

        <br />
        <br />

        <button type="submit" disabled={submitted}>
          Submit Review
        </button>
      </form>

      {savedReview && (
        <div>
          <h3>Submitted Review</h3>
          <p>Rating: {savedReview.rating}</p>
          <p>Review: {savedReview.review}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
