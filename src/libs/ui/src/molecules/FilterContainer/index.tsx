import React from 'react';
import { FilterBadge } from "@ui/molecules/FilterOptionBadge";
import { ClearAllButton } from '@ui/molecules/FilterOptionBadgeClearBtn';

interface FilterContainerProps {
    filters: string[];
    onRemoveFilter: (filter: string) => void;
    onClearAll: () => void;
    showClearButton ?:  boolean;

}


export const FilterContainer: React.FC<FilterContainerProps> = ({ filters, onRemoveFilter, onClearAll, showClearButton = true }) => {
    return (
        <div className="flex flex-wrap items-center">
            {/* Render FilterBadges */}
            {filters.map((filter) => (
                <FilterBadge
                    key={filter}
                    children={filter}
                    onRemove={() => onRemoveFilter(filter)}
                />
            ))}

            {/* Render Clear All Button only if filters exist */}
            {filters.length > 0 && showClearButton && (
                <ClearAllButton onClearAll={onClearAll}  />
            )} 
        </div>
    );
};
