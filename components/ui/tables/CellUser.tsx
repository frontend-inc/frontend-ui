import React from 'react'
import { Box, Chip, Button, Typography } from '@mui/material'
import { UserType } from 'frontend-js'
import { UserAvatar } from '../../../components'

type CellUserProps = {
	children: string
	value?: UserType
}

const CellUser: React.FC<CellUserProps> = (props) => {
	const { value: user } = props
	return (
		<Box sx={sx.cell}>
			<Button
        sx={ sx.button }
        size="small"
        color="secondary"
				startIcon={
          <UserAvatar 
            src={ user?.avatar?.url }            
          />
        }        
			>					
       <Typography variant="caption">
	          { user?.first_name } { user?.last_name }
          </Typography>
          </Button>
		</Box>
	)
}

export default CellUser

const sx = {
	cell: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
	},
  button: {
    borderRadius: theme => theme.shape.borderRadius,
  }
}
