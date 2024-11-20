import React from 'react';
import { FilterBadge } from '@ui/molecules/FilterOptionBadge';
import { ClearAllButton } from '@ui/molecules/FilterOptionBadgeClearBtn';

interface FilterContainerProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearAll: () => void;
  showClearButton?: boolean;
  showStarText?: boolean;
  className?: string;
}

export const FilterContainer: React.FC<FilterContainerProps> = ({
  filters,
  onRemoveFilter,
  onClearAll,
  className,
  showClearButton = true,
  showStarText = false,
}) => {
  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      {filters.map((filter) => (
        <FilterBadge
          key={filter}
          onRemove={() => onRemoveFilter(filter)}
          className="gap-1.25 cursor-pointer mt-1.25 rounded-md !bg-appTheme text-white-500 py-2 px-4"
          spanclassName="!text-white"
          imgclassName=""
          useAltSvg={true} // Always display alternate SVG in FilterContainer
        >
          {filter} {showStarText && (<> {filter === '1' ? 'star' : 'stars'}</>)}
        </FilterBadge>
      ))}

      {filters.length > 0 && showClearButton && (
        <ClearAllButton onClearAll={onClearAll} />
      )}
    </div>
  );
};
