import React from 'react'
import { UserAvatar, Label, ResourceListItem } from '../../../components'
import { truncate } from '../../../helpers'
import { Stack, Typography } from '@mui/material'

type AdminCommentItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminCommentItem: React.FC<AdminCommentItemProps> = (props) => {
	const { resource: comment, handleClick, handleEdit, handleDelete } = props

	const getCommentUserName = (comment) => {
		return comment?.user?.first_name + ' ' + comment?.user?.last_name
	}

	return (
		<ResourceListItem
			primary={getCommentUserName(comment)}
      secondary={ 
        <Stack direction="column" spacing={0}>
          <Typography variant="overline" color='text.secondary'>
            @{ comment?.user?.username }
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            { truncate(comment?.body, 40) }
          </Typography>
        </Stack>
      }			
			avatar={<UserAvatar user={comment?.user} />}
			secondaryActions={comment?.flagged && <Label label="Flagged" />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminCommentItem
