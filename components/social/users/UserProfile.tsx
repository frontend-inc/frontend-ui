import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { 
  Stack,
  Box,
  Avatar,
  Typography, 
  Button 
} from '@mui/material'
import { FollowButton, FollowCounts, ExpandableText } from '../../../components'
import { UserType } from '../../../types'
import { useRouter } from 'next/router'

export type UserProfileProps = {
  user: UserType 
  href: string
  enableFollowing?: boolean
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { 
    user, 
    href,
    enableFollowing = false 
  } = props || {}
  const { name, username, bio, avatar } = user || {}

  const { clientUrl } = useContext(AppContext)
  const router = useRouter()

  const handleClick = () => {
		if (clientUrl && href && username) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${username}`)
		}
	}
  return (
    <Box sx={ sx.container }>
      <Stack sx={ sx.profile } direction={{ sm: 'row', xs: 'column'}} spacing={4} alignItems="flex-start">
        <Box height="100%" sx={ sx.avatarContainer }>
        { avatar?.url && (
          <Avatar 
            src={avatar?.url} 
            sx={ sx.avatar }
          />
        )}  
        </Box>    
        <Stack direction="column" spacing={0}>
          <Stack direction="row" alignItems='center' spacing={1}>
            <Typography variant="h6"  color='text.primary'>{name}</Typography>
          </Stack>
          <FollowCounts user={ user } />
          <Box>
          <Button     
            sx={ sx.button }        
            onClick={ handleClick }
            >
            @{username}
          </Button>     
          </Box>                 
          { bio && (
            <ExpandableText 
              text={ bio }
            />
          )}      
        </Stack>
        <Stack direction="row" height="100%" justifyContent='flex-start'>
        { enableFollowing && (
          <FollowButton
            user={user}                
          />
        )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default UserProfile  

const sx = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'text.secondary'
  },
  profile: {
    maxWidth: 600
  },
  avatar: {
    width: 110,
    height: 110
  },
  avatarContainer: {
    height: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}