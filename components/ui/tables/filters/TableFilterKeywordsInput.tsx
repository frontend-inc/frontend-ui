import React from 'react'
import { SearchInput } from '../../..'

type FilterKeywordProps = {
  label?: string
  handleSearch: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const FilterKeywordsInput: React.FC<FilterKeywordProps> = ({
  label,
  value,
  handleChange,
  handleSearch
}) => {
  return (
    <div className="flex flex-row items-center justify-start py-2 px-0">
      {label && (
        <div className="min-w-[100px]">
          <span className="text-sm font-medium text-gray-500">
            {label}
          </span>
        </div>
      )}
      <div className="w-full mr-8 flex flex-row items-center justify-start">
        <SearchInput
          name={label}
          value={value}
          placeholder="Keywords"
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  )
}

export default FilterKeywordsInput