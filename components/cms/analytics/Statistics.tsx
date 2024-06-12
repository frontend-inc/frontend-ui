import React, { useState, useEffect } from 'react'
import {
  Stack,
} from '@mui/material'
import { useStatistics } from '../../../hooks'
import Statistic from './Statistic'

export type StatisticsProps = {
  layout?: 'row' | 'column'
  url: string
  query?: any
  enableBorder?: boolean  
}

const Statistics: React.FC<StatisticsProps> = (props) => {

  const { 
    enableBorder, 
    url, 
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
      { data && (
        <>
          <Statistic 
            enableBorder={enableBorder}
            label={'Total'}
            value={data.total}
          />
          <Statistic 
            enableBorder={enableBorder}
            label={'Yesterday'}
            value={data.last_1_day}
          />
          <Statistic 
            enableBorder={enableBorder}
            label={'Last 7 days'}
            value={data.last_7_days}
          />
          <Statistic 
            enableBorder={enableBorder}
            label={'Last 30 days'}
            value={data.last_30_days}
          />
        </>
      )}
    </Stack>
  )
}

export default Statistics