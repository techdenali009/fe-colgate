// ReviewTypes.ts
export interface Review {
    id: number;
    name: string;
    location: string;
    reviewCount: number;
    votesCount: number;
    ageGroup: string;
    rating: number; // Assuming this is the stars
    reviewTitle: string;
    reviewerName: string;
    timeAgo: string;
    reviewContent: string;
    productName: string;
    // count: number; // Add this property if it's required
  }

