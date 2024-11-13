import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Reviewproducts } from '@utils/test';
import { Review } from '@utils/ReviewTypes';

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
  showReviews: boolean;
  setShowReviews: React.Dispatch<React.SetStateAction<boolean>>;
  filterReviewsByName: (name: string) => void;
}

const defaultReviewContext: ReviewContextType = {
  productReviews: [],
  filteredReviews: [],
  selectedRatings: [],
  selectedAgeGroups: [],
  selectedSortBy: [],
  searchQuery: '',
  setSearchQuery: () => {},
  updateBarRatingFilter: () => {},
  updateSortByFilter: () => {},
  setSelectedRatings: () => {},
  setSelectedAgeGroups: () => {},
  setSelectedSortBy: () => {},
  setProductReviews: () => {},
  reportReview: () => {},
  showReviews: false,
  setShowReviews: () => {},
  filterReviewsByName: () => {},
};

const ReviewContext = createContext<ReviewContextType>(defaultReviewContext);

export const ReviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productReviews, setProductReviews] = useState<Review[]>(Reviewproducts.map(review => ({
    ...review,
    like: 0,
    dislike: 0,
    report: false,
    pcafeedbackTime: new Date().toISOString(),
    Customimages: review.Customimages || [],
    ratings: review.ratings
      ? Object.fromEntries(
        Object.entries(review.ratings).map(([key, value]) => [
          key,
          { label: value.label || '', score: value.score || 0 },
        ])
      )
      : undefined,
  })));

  const [showReviews, setShowReviews] = useState<boolean>(false);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Memoize filtered reviews to avoid unnecessary recalculations
  const filteredReviews = useMemo(() => {
    return productReviews
      .filter(review => {
        const matchesRating = selectedRatings.length
          ? selectedRatings.includes(review.rating.toString())
          : true;
        const matchesAgeGroup = selectedAgeGroups.length
          ? selectedAgeGroups.includes(review.ageGroup || '')
          : true;
        const matchesSearchQuery = searchQuery
          ? review.reviewContent.toLowerCase().includes(searchQuery.toLowerCase())
          : true;
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
  }, [productReviews, selectedRatings, selectedAgeGroups, selectedSortBy, searchQuery]);

  const filterReviewsByName = (name: string) => {
    const filtered = productReviews.filter(review =>
      review.name?.toLowerCase().includes(name.toLowerCase())
    );
    setProductReviews(filtered);
    setShowReviews(true);
  };

  const updateSortByFilter = (sortBy: string) => {
    setSelectedSortBy([sortBy]);
  };

  const updateBarRatingFilter = (rating: string) => {
    setSelectedRatings(prev => (prev.includes(rating) ? prev : [...prev, rating]));
  };

  const reportReview = (id: number) => {
    setProductReviews(prevReviews =>
      prevReviews.map(review =>
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
        showReviews,
        setShowReviews,
        filterReviewsByName,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => useContext(ReviewContext);
