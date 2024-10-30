import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Reviewproducts } from '@utils/test'; // Ensure this path is correct based on your project structure.

interface Review {
  id: number;
  name?: string;
  location?: string;
  reviewCount: number;
  votesCount?: number;
  ageGroup?: string;
  rating: number;
  reviewTitle: string;
  reviewerName: string;
  timeAgo: string;
  reviewContent: string;
  productName: string;
  like: number;
  dislike: number;
  report: boolean;
  pcafeedbackTime: string;
}

interface ReviewContextType {
  productReviews: Review[];
  filteredReviews: Review[];
  selectedRatings: string[];
  selectedAgeGroups: string[];
  selectedSortBy: string[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  updateBarRatingFilter: (rating: string) => void;
  updateSortByFilter: (sortBy: string) => void;
  setSelectedRatings: (ratings: string[]) => void;
  setSelectedAgeGroups: (ageGroups: string[]) => void;
  setSelectedSortBy: (sortBy: string[]) => void;
  setProductReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  reportReview: (id: number) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productReviews, setProductReviews] = useState<Review[]>(Reviewproducts.map(review => ({
    ...review,
    like: 0,
    dislike: 0,
    report: false,
    pcafeedbackTime: new Date().toISOString(),
  })));

  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredReviews = productReviews
    .filter(review => {
      const matchesRating = selectedRatings.length ? selectedRatings.includes(review.rating.toString()) : true;
      const matchesAgeGroup = selectedAgeGroups.length ? selectedAgeGroups.includes(review.ageGroup || '') : true;
      const matchesSearchQuery = searchQuery ? review.reviewContent.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesRating && matchesAgeGroup && matchesSearchQuery;
    })
    .sort((a, b) => {
      if (selectedSortBy.includes('Highest to Lowest Rating')) {
        return b.rating - a.rating;
      } else if (selectedSortBy.includes('Lowest to Highest Rating')) {
        return a.rating - b.rating;
      } else if (selectedSortBy.includes('Most Recent')) {
        return new Date(b.timeAgo).getTime() - new Date(a.timeAgo).getTime();
      } else if (selectedSortBy.includes('Most Helpful')) {
        return b.reviewCount - a.reviewCount;
      } else {
        return 0;
      }
    });

  const updateSortByFilter = (sortBy: string) => {
    setSelectedSortBy([sortBy]);
  };

  const updateBarRatingFilter = (rating: string) => {
    setSelectedRatings(prev => prev.includes(rating) ? prev : [...prev, rating]);
  };

  const reportReview = (id: number) => {
    setProductReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, report: true } : review
      )
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        productReviews,
        setProductReviews,
        filteredReviews,
        selectedRatings,
        selectedAgeGroups,
        selectedSortBy,
        searchQuery,
        setSearchQuery,
        updateBarRatingFilter,
        updateSortByFilter,
        setSelectedRatings,
        setSelectedAgeGroups,
        setSelectedSortBy,
        reportReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviewContext must be used within a ReviewProvider');
  }
  return context;
};
