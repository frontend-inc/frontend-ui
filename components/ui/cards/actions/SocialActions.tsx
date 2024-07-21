import React from 'react'
import { Stack } from '@mui/material'
import { 
  LikeButton,
  FavoriteButton,
  CommentButton  
} from '../../..'

type SocialActionsProps = {
  resource: any 
  enableLikes?: boolean
  enableFavorites?: boolean
  enableComments?: boolean
  color?: string
}

const SocialActions: React.FC<SocialActionsProps> = (props) => {
  const { resource, enableLikes, enableFavorites, enableComments, color } = props || {}
  return(
    <Stack direction="row" alignItems="flex-end" mr={1}>
      {enableLikes == true && (
        <LikeButton handle={resource?.handle} color={color} />
      )}
      {enableFavorites == true && (
        <FavoriteButton handle={resource?.handle} color={color} />
      )}
      {enableComments == true && (
        <CommentButton resource={resource} color={color} />
      )}
    </Stack>
  )
}

export default SocialActions