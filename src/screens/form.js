import React, { useState } from "react";
import { auth, database } from '../firebase';
import '../App.css'; 
import { ref, push } from "firebase/database";


function ReviewForm() {
  const [formErrors, setFormErrors] = useState({});

const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    instructorName: formData.get("instructorName"),
    courseName: formData.get("courseName"),
    review: formData.get("review"),
  };

  // Validate form fields
  const errors = {};
  if (!data.instructorName.trim()) {
    errors.instructorName = "Please enter instructor's name";
  }
  if (!data.courseName.trim()) {
    errors.courseName = "Please enter course name";
  }
  if (!data.review.trim()) {
    errors.review = "Please enter your review";
  }

  if (Object.keys(errors).length === 0) {
    try {
      // Save data to Firebase
      const reviewsRef = ref(database, "reviews");
      await push(reviewsRef, data);
      alert("Review submitted successfully!");
      // Clear form fields
      event.target.reset();
    } catch (error) {
      console.error("Error saving review:", error);
      alert("An error occurred while submitting the review. Please try again later.");
    }
  } else {
    // Update state with form errors
    setFormErrors(errors);
  }
};


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "30rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Please give a review to continue 🚶‍♀️🚶‍♂️...</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="instructorName">Instructor's Name</label>
              <input type="text" className="form-control" id="instructorName" name="instructorName" required />
              {formErrors.instructorName && <div className="invalid-feedback">{formErrors.instructorName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input type="text" className="form-control" id="courseName" name="courseName" required />
              {formErrors.courseName && <div className="invalid-feedback">{formErrors.courseName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="review">Review</label>
              <textarea className="form-control" id="review" name="review" rows="3" required></textarea>
              {formErrors.review && <div className="invalid-feedback">{formErrors.review}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
