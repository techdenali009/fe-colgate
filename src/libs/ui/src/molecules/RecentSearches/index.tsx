import React from 'react';

interface RecentSearchesProps {
  loading: boolean;
  recentSearches: string[];
}

const RecentSearches: React.FC<RecentSearchesProps> = ({ loading, recentSearches }) => {
  return (
    <div>
      {loading ? (
        <div className="animate-pulse space-y-2">
          <div className="h-6 bg-gray-300 rounded w-4/9"></div>
          <div className="h-6 bg-gray-300 rounded w-4/9"></div>
          <div className="h-6 bg-gray-300 rounded w-4/9"></div>
          <div className="h-6 bg-gray-300 rounded w-4/9"></div>
        </div>
      ) : (
        <>
          {recentSearches.length > 0 ? (
            <>
              <h3 className="!font-bold tracking-[0.3px] mb-2 font-HeroNewBold">Recent Searches</h3>
              <ul className="space-y-2 tracking-[0.3px] text-base tracking-[0.3px] font-HeroNewLight grid gap-4 pt-4">
                {recentSearches.map((search, index) => <li key={index}>{search}</li>)}
              </ul>
            </>
          ) : (
            <p className='space-y-2 text-base tracking-[0.3px] font-HeroNewLight grid gap-4 pt-4'>No recent searches</p>
          )}
        </>
      )}
    </div>
  );
};

export default RecentSearches;
