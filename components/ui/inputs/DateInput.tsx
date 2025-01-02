'use client'

import React from 'react'
import moment from 'moment'
import {DatePicker} from "@nextui-org/react";
import {DateValue, parseDate} from "@internationalized/date";
import { SyntheticEventType } from '../../../types'

type DateInputProps = {
	errors?: any
	direction?: 'row' | 'column'
	required?: boolean
	label?: string
	name: string
	value?: DateValue 
	placeholder?: string
	handleChange: (ev: SyntheticEventType) => void
}

export default function DateInput(props: DateInputProps) {

  const {
    errors,
    label,
    name,
    value,
    handleChange,
  } = props || {}

  const currentDate = moment().format('YYYY-MM-DD')
  
  const handleDateChange = (date: DateValue) => {
    const formattedDate = moment(date).format('YYYY-MM-DD')    
    handleChange({
      target: {
        name, 
        value: formattedDate
      }
    })
  }

	return (
		<DatePicker      
      label={ label }      
      name={name}
      defaultValue={parseDate(value || currentDate)}
      className="max-w-[284px]"
      //@ts-ignore
      onChange={handleDateChange}
    />
	)
}
