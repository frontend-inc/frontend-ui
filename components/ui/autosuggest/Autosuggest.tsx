import React, { useEffect, useState } from "react"
import { Stack } from "../../../tailwind"
import { InputLabel } from "../../../components"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../../shadcn/lib/utils"
import { Button } from "../../../shadcn/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../shadcn/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../shadcn/ui/popover"
import { OptionType, SyntheticEventType } from "frontend-js"

type AutosuggestProps = {
  label?: string
  info?: string
  name: string
  value: string | number
  handleChange: (ev: SyntheticEventType) => void
  handleInputChange: (value: string) => void
  options: OptionType[]
}

const Autosuggest: React.FC<AutosuggestProps> = (props) => {
  const {
    label,
    info,
    name,
    value,
    handleChange,
    handleInputChange,
    options = [],
  } = props

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null)
  const [open, setOpen] = useState(false)

  const handleCommandChange = (ev) => {
    if(handleInputChange){
      handleInputChange(ev)
    }
  }
 
  const handleSelect = (currentValue: string) => {    
    const selectedOption = options.find(option => option.label === currentValue)    
    const value = selectedOption?.value || null
    if(value){
      handleChange({
        target: { 
          name, 
          value
        }
      })
    }
    setOpen(false)    
  }

  useEffect(() => {
    if(value && options?.length > 0){
      const selectedOption = options.find(option => option.value === value)
      setSelectedOption(selectedOption || null)
    }
  }, [value, options])

  if (options.length === 0) return null
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Stack direction="column">
        <InputLabel label={label} info={ info } />
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-secondary"
        >
            {selectedOption?.label || 'Select...'}            
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      </Stack>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput 
            onValueChange={ handleCommandChange }
            placeholder="Search option..." 
          />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Autosuggest