import React from 'react'
import {
  WHERE_OPTIONS,
  BOOLEAN_OPTIONS,
  BOOLEAN_FIELDS,
  DATE_FIELDS,
  STRING_FIELDS,
  SELECT_FIELDS,
  NUMBER_FIELDS,
  DATE_RANGE_OPTIONS,
  FILTER_OPERATORS,
} from '../../../../constants/index'
import { X } from 'lucide-react'
import { TextInput, Autosuggest, ArrayInput } from '../../../../components'
import {
  OptionType,
  FilterOptionType,
  SyntheticEventType,
} from '../../../../types'

type FieldOption = FilterOptionType & {
  db_type: string
}

type FilterFieldProps = {
  index: number
  filter: FilterOptionType
  fieldOptions: FieldOption[]
  handleChange: (e: SyntheticEventType, index: number) => void
  handleRemove: (index: number) => void
}

const FilterFieldWrapper: React.FC<FilterFieldProps> = ({
  index,
  filter,
  fieldOptions,
  handleChange,
  handleRemove
}) => {
  let field
  let operatorOptions: OptionType[] = []

  if (filter.field) {
    field = fieldOptions.find((f) => f.value == filter.field)
    operatorOptions = FILTER_OPERATORS[field?.db_type || 'integer']
  }

  return (
    <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_0.5fr] gap-0 border-t border-dotted border-gray-300 mt-4 pt-4">
      <div className="col-span-1 min-w-[100px] mb-1">
        <span className="text-sm font-medium text-gray-500 lowercase">
          where
        </span>
      </div>
      <div className="col-span-1 min-w-[100px] mr-1">
        <Autosuggest
          name="where"
          options={WHERE_OPTIONS}
          placeholder="where"
          value={filter?.where || 'AND'}
          handleChange={(ev) => handleChange(ev, index)}
        />
      </div>
      <div className="col-span-1 min-w-[100px] mr-1">
        <Autosuggest
          name="field"
          options={fieldOptions}
          placeholder="field"
          value={filter?.field || ''}
          handleChange={(ev) => handleChange(ev, index)}
        />
      </div>
      {filter?.field && (
        <div className="col-span-1 min-w-[100px]">
          <Autosuggest
            name="operator"
            placeholder="…"
            options={operatorOptions}
            value={filter?.operator || ''}
            handleChange={(ev) => handleChange(ev, index)}
          />
        </div>
      )}
      <div>
        <button
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          onClick={() => handleRemove(index)}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="col-span-1" />
      <div className="col-span-3 w-full my-1">
        {BOOLEAN_FIELDS.includes(field?.db_type) && (
          <Autosuggest
            name="value"
            placeholder="true or false"
            options={BOOLEAN_OPTIONS}
            value={filter?.value || ''}
            handleChange={(ev) => handleChange(ev, index)}
          />
        )}

        {DATE_FIELDS.includes(field?.variant) && (
          <>
            {['gte', 'lte'].includes(filter?.operator) ? (
              <Autosuggest
                name="value"
                placeholder="date since"
                options={DATE_RANGE_OPTIONS}
                value={filter?.value || ''}
                handleChange={(ev) => handleChange(ev, index)}
              />
            ) : (
              <TextInput
                type="date"
                name="value"
                placeholder="value"
                value={filter?.value || ''}
                handleChange={(ev) => handleChange(ev, index)}
              />
            )}
          </>
        )}

        {NUMBER_FIELDS.includes(field?.variant) && (
          <>
            {['in', 'nin'].includes(filter?.operator) ? (
              <ArrayInput
                name="value"
                placeholder="values"
                value={Array.isArray(filter?.value) ? filter?.value : []}
                handleChange={(ev) => handleChange(ev, index)}
              />
            ) : (
              <TextInput
                type="number"
                name="value"
                placeholder="value"
                value={filter?.value || ''}
                handleChange={(ev) => handleChange(ev, index)}
              />
            )}
          </>
        )}

        {STRING_FIELDS.includes(field?.variant) && (
          <TextInput
            name="value"
            placeholder="value"
            value={filter?.value || ''}
            handleChange={(ev) => handleChange(ev, index)}
          />
        )}

        {SELECT_FIELDS.includes(field?.variant) && (
          <Autosuggest
            name="value"
            placeholder="Select..."
            options={field?.options?.map((opt) => ({
              label: opt,
              value: opt,
            }))}
            value={filter?.value || ''}
            handleChange={(ev) => handleChange(ev, index)}
          />
        )}
      </div>
    </div>
  )
}

export default FilterFieldWrapper