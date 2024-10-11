import React from 'react'
import { Checkbox } from "../../../shadcn/ui/checkbox"
import { Rating } from '../../../tailwind'
import { OptionType } from '../../../types'

type CheckboxRatingsFilterItemProps = {
  label?: string
  option: OptionType
  values?: any[]
  handleClick: () => void
}

const CheckboxRatingsFilterItem: React.FC<CheckboxRatingsFilterItemProps> = (props) => {
  const { values = [], option, handleClick } = props

  return (
    <li className="list-none">
      <button
        className="flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground"
        onClick={handleClick}
      >
        <div className="mr-2">
          <Checkbox
            checked={values.includes(option.value)}
            onCheckedChange={handleClick}
          />
        </div>
        <div className="flex-grow">
          <Rating
            readOnly
            value={Number(option?.value)}
          />
        </div>
      </button>
    </li>
  )
}

export default CheckboxRatingsFilterItem