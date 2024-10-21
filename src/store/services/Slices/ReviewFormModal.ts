import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReviewState {
  rating: number;
  reviewText: string;
  reviewTitle: string;
  nickname: string;
  email: string;
  agreeTerms: boolean;
}

const initialState: ReviewState = {
  rating: 0,
  reviewText: '',
  reviewTitle: '',
  nickname: '',
  email: '',
  agreeTerms: false,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    submitReview(state, action: PayloadAction<ReviewState>) {
      return { ...action.payload }; // Updates the entire review state
    },
  },
});

export const { submitReview } = reviewSlice.actions;
export default reviewSlice.reducer;
