import React from 'react';

interface SearchResultsProps {
  loading: boolean;
  recentSearches: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ loading, recentSearches }) => (
  <div className="overflow-y-auto h-full pt-0 p-4">
    <div className="tm:contents absolute pr-8 mr-0 ml-[19rem] gap-[18rem] grid grid-cols-2 gap-8">
      {/* Popular Searches */}
      <div>
        <h3 className="!font-bold tracking-[0.3px] mb-2 font-HeroNewBold">Popular Searches</h3>
        {loading ? (
          <div className="animate-pulse space-y-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-6 bg-gray-300 rounded w-3/9"></div>
            ))}
          </div>
        ) : (
          <ul className="tracking-[0.3px] space-y-2 text-base font-HeroNewLight grid gap-4 pt-4">
            {['peels', 'acne', 'cleanser', 'neck'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Recent Searches */}
      <div>
        {loading ? (
          <div className="animate-pulse space-y-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-6 bg-gray-300 rounded w-4/9"></div>
            ))}
          </div>
        ) : (
          <>
            {recentSearches.length > 0 ? (
              <>
                <h3 className="!font-bold tracking-[0.3px] mb-2 font-HeroNewBold">Recent Searches</h3>
                <ul className="space-y-2 tracking-[0.3px] text-base font-HeroNewLight grid gap-4 pt-4">
                  {recentSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className='space-y-2 text-base tracking-[0.3px] font-HeroNewLight grid gap-4 pt-4'>No recent searches</p>
            )}
          </>
        )}
      </div>
    </div>
  </div>
);

export default SearchResults;
