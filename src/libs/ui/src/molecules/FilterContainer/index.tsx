import React from 'react';
import { FilterBadge } from '@ui/molecules/FilterOptionBadge';
import { ClearAllButton } from '@ui/molecules/FilterOptionBadgeClearBtn';

interface FilterContainerProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearAll: () => void;
  showClearButton?: boolean;
}

export const FilterContainer: React.FC<FilterContainerProps> = ({ filters, onRemoveFilter, onClearAll, showClearButton = true }) => {
  return (
    <div className="flex flex-wrap items-center whitespace-nowrap ">
      {filters.map((filter) => (
        <FilterBadge
          key={filter}
          onRemove={() => onRemoveFilter(filter)}
        >
          {filter}
        </FilterBadge>
      ))}

      {filters.length > 0 && showClearButton && (
        <ClearAllButton onClearAll={onClearAll} />
      )}
    </div>
  );
};
