import React, { useState } from 'react'
import { Button } from "../../../shadcn/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../../../shadcn/ui/popover"
import { ChevronUp, ChevronDown } from "lucide-react"
import CheckboxGroupInput from './ShopifyCheckboxFilterList'

type CheckboxFilterButtonProps = {
  values: any
  handleClick: any
  label: string
  options: any
}

const CheckboxFilterButton: React.FC<CheckboxFilterButtonProps> = (props) => {
  const { values, handleClick, label, options } = props

  const [open, setOpen] = useState(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const handleButtonClick = () => {
    setOpen(true)
  }

  const handleMenuItemClick = (ev: React.MouseEvent, value: any) => {
    if (timer) clearTimeout(timer)
    handleClick(value)
    setTimer(setTimeout(() => setOpen(false), 2000))
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-between"
          onClick={handleButtonClick}
        >
          {label}
          {open ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <CheckboxGroupInput
          options={options}
          values={values}
          handleClick={handleMenuItemClick}
        />
      </PopoverContent>
    </Popover>
  )
}

export default CheckboxFilterButton