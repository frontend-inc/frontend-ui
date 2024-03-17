import React from 'react';
import FilterListInput from './FilterListInput';
import { Stack } from '@mui/material';

type FilterListProps = {
  filters: any;
  filterOptions: any;
  handleFilter: any;
}

const FilterList: React.FC<FilterListProps> = (props) => {
  
  const { 
    filters, 
    filterOptions, 
    handleFilter 
  } = props || {};

  return (
    <Stack spacing={2}>
      {filterOptions?.map((filterOption, index) => (
        <FilterListInput
          key={index}
          filters={filters}								
          filterOption={filterOption}
          handleFilter={handleFilter}
        />
      ))}
    </Stack>
  );
}

export default FilterList