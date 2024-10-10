import React from 'react'
import { Typography } from '../../../../tailwind'
import { Autosuggest } from '../../..'
import { OptionType } from '../../../../types'

type TableFilterSortProps = {
  label: string
  fieldOptions: OptionType[]
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SORT_DIRECTIONS = [
  { label: 'decreasing', value: 'desc' },
  { label: 'increasing', value: 'asc' },
]

const TableFilterSortInput: React.FC<TableFilterSortProps> = ({
  label,
  sortBy = '',
  sortDirection = '',
  fieldOptions=[],
  handleChange,
}) => {
  return (
    <div className="flex flex-row items-center justify-start py-2 px-0">
      {label && (
        <div className="min-w-[100px]">
          <Typography variant="subtitle2" className="text-foreground">
            {label}
          </Typography>
        </div>
      )}
      <div className="min-w-[200px] mr-4">
        <Autosuggest
          name="sort_by"
          options={fieldOptions}
          placeholder="Sort field"
          value={sortBy}
          handleChange={handleChange}
        />
      </div>
      <div className="w-full mr-12">
        <Autosuggest
          name="sort_direction"
          options={SORT_DIRECTIONS}
          placeholder="Sort direction"
          value={sortDirection}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TableFilterSortInput