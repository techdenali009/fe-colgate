import { SortOptions } from './plpFilterData';

export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

export const makeUrlWithQueryParams = (
  url: string,
  params: Record<string, string | number | boolean | undefined>
): string => {
  const queryString = new URLSearchParams(
    Object.entries(params)
      .filter(([, value]) => value !== undefined) // Exclude undefined values
      .map(([key, value]) => [key, String(value)]) // Convert values to strings
  ).toString();



  return queryString ? `${url}?${queryString}` : url;
};


export const getSortOption = (currentOption: string) => {
  switch (currentOption) {
  case SortOptions.ALPHABETICAL_AZ:
    return 'nameAToZ';
  case SortOptions.ALPHABETICAL_ZA:
    return 'nameZToA'
  case SortOptions.PRICE_LOW_HIGH:
    return 'priceLowToHigh';
  case SortOptions.PRICE_HIGH_LOW:
    return 'priceHighToLow';
  default:
    return 'nameAToZ';
  }
}
