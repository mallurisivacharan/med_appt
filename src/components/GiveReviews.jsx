import React, { useState } from "react";

function GiveReviews() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    alert("Review Submitted");
  };

  return (
    <div>
      <h2>Give Review</h2>

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
          placeholder="Write your review"
          value={review}
          disabled={submitted}
          onChange={(e) => setReview(e.target.value)}
        />

        <br />
        <br />

        <button type="submit" disabled={submitted}>
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default GiveReviews;
