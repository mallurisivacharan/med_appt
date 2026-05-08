import React, { useState } from "react";

function GiveReviews() {

  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h2>Give Review</h2>

      <textarea
        placeholder="Write review"
        disabled={submitted}
      ></textarea>

      <br /><br />

      <button
        disabled={submitted}
        onClick={() => setSubmitted(true)}
      >
        Submit Review
      </button>
    </div>
  );
}

export default GiveReviews;