'use client'

import React, { useEffect, useState } from 'react'
import moment from 'moment'
import {DatePicker} from "@nextui-org/react";
import {DateValue, parseDate, getLocalTimeZone} from "@internationalized/date";
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

  const handleDateChange = (date: DateValue) => {
    console.log('date', date)
  }

	return (
		<DatePicker      
      label={ label }
      value={value}
      name={name}
      className="max-w-[284px]"
      //@ts-ignore
      onChange={handleDateChange}
    />
	)
}
