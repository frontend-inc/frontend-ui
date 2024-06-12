import React, { useState, useEffect } from 'react'
import {
  Stack,
} from '@mui/material'
import { useStatistics } from '../../../hooks'
import { mergeFilters } from '../../../helpers'
import Statistic from './Statistic'

export type StatisticsProps = {
  layout?: 'row' | 'column'
  url: string
  query?: any
  direction?: 'row' | 'column'
  metaFields: {
    icon?: any
    label: string
    value: 
      'total' | 
      'current_day' | 
      '1_day_ago' | 
      '7_days_ago' | 
      '30_days_ago'
  }[]
  enableBorder?: boolean  
}

const Statistics: React.FC<StatisticsProps> = (props) => {

  const { 
    enableBorder, 
    url, 
    metaFields=[],
    direction,
    query: defaultQuery = {},
  } = props || {}

  const {
    loading,
    data,
    fetchData,
  } = useStatistics({
    url
  })

  useEffect(() => {
    if(url && defaultQuery) {
      fetchData(defaultQuery)        
    }
  }, [url])

  return(
    <Stack 
      direction={{ 
        sm: 'row', 
        xs: 'column' 
      }} 
      spacing={2}
    >
      { metaFields?.map((metaField, i) => (
        <Statistic           
          key={i}
          direction={direction}
          icon={ metaField?.icon }
          label={metaField?.label}
          value={data?.[metaField.value] || 0}
          enableBorder={enableBorder}
        />
      ))}
    </Stack>
  )
}

export default Statistics