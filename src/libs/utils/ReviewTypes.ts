export interface Review {
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
  Customimages?: Array<{
    id: number;
    url: string;
    alt: string;
  }>;
  PCA_Responses?: {
    response: string;
    date: string;
  };
  ratings?: {
    [key: string]: {
      label: string;
      score: number;
    };
  };
}
