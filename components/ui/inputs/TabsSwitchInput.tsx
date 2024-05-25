import React from 'react'
import { 
  TabsInput 
} from '../../../components'
import { SyntheticEventType } from '../../../types'

type BooleanTabsInputProps = {
  value: boolean
  name: string
  handleChange: (ev: SyntheticEventType) => void
  disableBorder?: boolean
  disablePadding?: boolean
  label?: string
  direction?: 'row' | 'column'
}

const BooleanTabsInput: React.FC<BooleanTabsInputProps> = (props) => {
  
  const { 
    name, 
    value, 
    handleChange, 
    label,
    direction="row",
    disableBorder=false, 
    disablePadding=false 
  } = props


  return (
    <TabsInput
      name={name}
      label={label}
      direction={ direction }
      disableBorder={ disableBorder }
      disablePadding={ disablePadding }
      options={[
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]}
      value={value == true ? 1 : 0 }
      handleChange={handleChange}
    />
  )
}

export default BooleanTabsInput