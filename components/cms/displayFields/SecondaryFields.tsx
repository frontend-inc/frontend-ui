import React from 'react'
import { 
  DisplayFields,
  AvgRating,
  UserChip,   
} from '../..'
import { Stack } from '@mui/material'

type SecondaryFieldsProps = {
  resource: any
  fields
  enableRatings?: boolean
  enableUsers?: boolean
  slots?: {
    ratings?: any
    fields?: any
    user?: any
  }
}

const SecondaryFields: React.FC<SecondaryFieldsProps> = (props) => {

  const { 
    resource, 
    fields=[], 
    enableRatings, 
    enableUsers,
    slots={
      ratings: {},
      fields: {},
      user: {},
    } 
  } = props || {}

  return(
    <Stack direction="column" spacing={0}>
      { enableRatings == true && (
        <AvgRating 
          size='small'
          resource={resource} 
          { ...slots.ratings }
        />
      )}
      <DisplayFields 
        fields={fields} 
        resource={resource} 
        { ...slots.fields }
      />
      { enableUsers && (
        <UserChip 
          user={resource?.user} 
          { ...slots.user }
        />
      )}
    </Stack>
  )
}

export default SecondaryFields




