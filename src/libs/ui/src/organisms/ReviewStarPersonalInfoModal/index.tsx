import React, { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: ReviewData = { reviewText, image, readReviews: readReviews || false, ageGroup, location };
    onSubmit(data);
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      {/* Your review */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Your review *</label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
      </div>

      {/* Did you read product reviews? */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Did you read product reviews online before first purchasing this item?</label>
        <div className="mt-2">
          <button
            type="button"
            className={`px-4 py-2 rounded-md mr-2 ${readReviews === true ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setReadReviews(true)}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${readReviews === false ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setReadReviews(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* Age group */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">How old are you?</label>
        <div className="mt-2 space-x-2">
          {["17 or under", "18 to 24", "25 to 34", "35 to 44", "45 to 54", "55 to 64", "65 or over"].map((age) => (
            <button
              type="button"
              key={age}
              className={`px-4 py-2 rounded-md ${ageGroup === age ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setAgeGroup(age)}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Where are you located?</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Example: New York, NY"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-gray-300 rounded-md"
          onClick={() => {
            setReviewText("");
            setImage(null);
            setReadReviews(null);
            setAgeGroup("");
            setLocation("");
          }}
        >
          Skip
        </button>
      </div>
    </form>
  );
};

export default ReviewStarPersonalInfo;