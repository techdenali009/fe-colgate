import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReviewState {
  rating: number;
  reviewText: string;
  reviewTitle: string;
  nickname: string;
  email: string;
  agreeTerms: boolean;
  images: File[];
  readReviews: boolean | null;
  ageGroup: string;
  location: string;
  quantity: number;
  value: number;
  scent: number;
}

const initialState: ReviewState = {
  rating: 0,
  reviewText: '',
  reviewTitle: '',
  nickname: '',
  email: '',
  agreeTerms: false,
  images: [],
  readReviews: null,
  ageGroup: '',
  location: '',
  quantity: 0,
  value: 0,
  scent: 0,  
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReviewData(state, action: PayloadAction<ReviewState>) {
      return { ...state, ...action.payload };
    },
    setModalImages(state, action: PayloadAction<File[]>) {
      state.images = action.payload; 
    },
    setPersonalInfoData(state, action: PayloadAction<Partial<Pick<ReviewState, 'readReviews' | 'ageGroup' | 'location'>>>) {
      const { readReviews, ageGroup, location } = action.payload;
      if (readReviews !== undefined) state.readReviews = readReviews;
      if (ageGroup !== undefined) state.ageGroup = ageGroup;
      if (location !== undefined) state.location = location;
    },
    setRatingData(state, action: PayloadAction<{ quantity: number; value: number; scent: number }>) { 
      const { quantity, value, scent } = action.payload;
      state.quantity = quantity;
      state.value = value;
      state.scent = scent;
    },
    resetReviewData() {
      return initialState;
    },
  },
});

export const { setReviewData, resetReviewData, setModalImages, setPersonalInfoData, setRatingData } = reviewSlice.actions;
export default reviewSlice.reducer;
