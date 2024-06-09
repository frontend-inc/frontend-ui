import React from 'react'
import { Rating, Stack, Typography } from '@mui/material'

type AvgRatingProps = {
  resource: any
  enableTotal?: boolean 
  size?: 'small' | 'medium' | 'large' 
  color?: string
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'baseline'
}

const AvgRating: React.FC<AvgRatingProps> = (props) => {
  const { 
    resource, 
    justifyContent='flex-start', 
    size='medium', 
    color, 
    enableTotal=false 
  } = props || {}
  const { avg_rating: rating, num_reviews: numReviews } = resource || {}
  return (
    <Stack alignItems='center' justifyContent={ justifyContent } direction="row" spacing={1}>
      <Rating 
        size={ size } 
        value={rating} 
        readOnly 
        sx={{ 
          color: color ? color : 'primary.main',
          '& .MuiRating-iconEmpty': {
            color: color ? color : 'text.secondary'
          }
        }} 
      />      
      { rating > 0 && (
      <Typography color={ color ? color : 'text.secondary'} variant="caption">({rating})</Typography>
      )}
      {(rating > 0 && enableTotal) && (
        <Typography color={ color ? color : 'text.secondary'} variant="caption">{numReviews} reviews</Typography>
      )}      
    </Stack>
  )
}

export default AvgRating
