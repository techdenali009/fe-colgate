import React, { useState } from "react";
import StatusBadge from "@ui/molecules/StatusBadges";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalInfoData,setReviewPersonalInfoStatus } from '../../../../../store/services/Slices/ReviewFormModalSlice';
import { AppDispatch, RootState } from '../../../../../store/store';
import { useNavigate } from "react-router-dom";

type ReviewFormProps = {
  onSubmit: (data: ReviewData) => void;
};

type ReviewData = {
  reviewText: string;
  image: File | null;
  readReviews: boolean;
  ageGroup: string;
  location: string;
};

const ReviewStarPersonalInfo: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [readReviews, setReadReviews] = useState<boolean | null>(null);
  const [ageGroup, setAgeGroup] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(""); // State for error message
  const [personalInfobadgeStatus] = ('In progress');
  const dispatch = useDispatch<AppDispatch>();
  const badgeStatus = useSelector((state: RootState) => state.reviewFormModal.badgeStatus);
  const addImagebadgeStatus = useSelector((state: RootState) => state.reviewFormModal.addImagebadgeStatus);
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(setReviewPersonalInfoStatus('completed'));
    // Validate location
    if (!location) {
      setErrorMessage("Unable to submit the form. Please fill at least one optional field above."); // Set error message if location is empty
      return; // Prevent submission if location is not filled
    }
    const data: ReviewData = { reviewText, image, readReviews: readReviews || false, ageGroup, location };
    onSubmit(data);
    dispatch(setPersonalInfoData({ 
      readReviews: readReviews || false,
      ageGroup,
      location
    }));
    console.log(data);
    setErrorMessage(""); // Clear any previous error message on successful submission
  };

  const handleSkip = () => {
    setReviewText("");
    setImage(null);
    setReadReviews(null);
    setAgeGroup("");
    setLocation("");
    setErrorMessage(""); // Clear any error message when skipping
    onSubmit({ reviewText: "", image: null, readReviews: false, ageGroup: "", location: "" }); // Skip action
    dispatch(setReviewPersonalInfoStatus('skipped'));
  };
  const handleResume = () => {
    navigate("/review-add-images");
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <div title="Your Review" className="mb-4">
        <p className="text-black text-base border-b border-gray-300 m-0 p-[10px_30px]">
          Your Reviews
          <StatusBadge>{badgeStatus}</StatusBadge>
        </p>
      </div>
      <div title="Your Review" className=" mb-4">
        <p className="text-black text-base border-b border-gray-300 m-0 p-[10px_30px]">
          Add Images (optional)
          <StatusBadge>{addImagebadgeStatus}</StatusBadge>
          {addImagebadgeStatus === "skipped" && (
                        <div className="mt-4">
                            <PrimaryButton
                                type="button"
                                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                                onClick={handleResume}
                            >
                                Resume
                            </PrimaryButton>
                        </div>
                    )}
        </p>
        <div className="pl-96"></div>
      </div>
      <StatusBadge>{personalInfobadgeStatus}</StatusBadge>
      {/* Did you read product reviews? */}
      <div className="mb-4">
        <label className="text-lg font-bold text-black">Did you read product reviews online before first purchasing this item?</label>
        
        <div className="mt-2">
          <button
            type="button"
            className={`px-4 py-2 rounded-md mr-2 ${readReviews === true ? "bg-black text-white" : "bg-gray-200"}`}
            onClick={() => setReadReviews(true)}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${readReviews === false ? "bg-black text-white" : "bg-gray-200"}`}
            onClick={() => setReadReviews(false)}
          >
            No
          </button>
        </div>
      </div>
      {/* Age group */}
      <div className="mb-4">
        <label className="text-lg font-bold text-black">How old are you?</label>
        <div className="mt-2 space-x-2">
          {["17 or under", "18 to 24", "25 to 34", "35 to 44", "45 to 54", "55 to 64", "65 or over"].map((age) => (
            <button
              type="button"
              key={age}
              className={`px-4 py-2 rounded-md ${ageGroup === age ? "bg-black text-white" : "bg-gray-200"}`}
              onClick={() => setAgeGroup(age)}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="text-lg font-bold text-black">Where are you located?</label>
        <input
          type="text"
          className="p-2 mt-2 border-[#747474] rounded-[2px] shadow-[inset_0px_1px_3px_rgba(184,184,184,1)] w-[700px] border"
          placeholder="Example: New York, NY"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {errorMessage && <div className="text-red-600 mt-2">{errorMessage}</div>} {/* Display error message */}
      </div>

      <div className="flex justify-between">
        <PrimaryButton
          type="button"
          className="px-6 py-2 font-bold bg-blue-600 text-white hover:bg-blue-700 transition w-48 h-12"
          onClick={handleSubmit}
        >
          Submit
        </PrimaryButton>
        <PrimaryButton
          type="button" // Ensure it is a button and not a submit
          className="w-60 bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400"
          onClick={handleSkip}
        >
          Skip
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ReviewStarPersonalInfo;
