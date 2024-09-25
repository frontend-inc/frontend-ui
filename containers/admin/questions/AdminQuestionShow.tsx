import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'
import { AdminAnswerList } from '../../../containers'

type AdminQuestionShowProps = ResourceShowProps & {
	metafields?: DisplayFieldType[]
}

const AdminQuestionShow: React.FC<AdminQuestionShowProps> = (props) => {

	const {
    open,
		handleClose,
		resource,
		loading,
		enableEdit,
		enableDelete,
		handleDelete,
		handleEdit,
	} = props || {}

	return (
    <ResourceModal  
      loading={loading}
      open={open} 
      handleClose={handleClose}
      enableDelete={enableDelete}
      enableEdit={enableEdit}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    >
      <ResourceDetails 
        direction="row"
        label={ resource?.question?.variant }
        image={ resource?.question?.image?.url }
        primary={ resource?.question?.title }
        secondary={ resource?.question?.description }
        resource={ resource?.question }        
        fields={[]}
      />
        <Stack direction="column" width={'100%'} spacing={2}>
          <Box sx={ sx.divider } />
          <Typography variant="subtitle1" color='text.primary'>
            Answer Choices
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            For single choice and multiple choice questions
          </Typography>
          <AdminAnswerList
            direction="column"
            questionId={resource?.question_id} 
          />
        </Stack>
    </ResourceModal>
	)
}

export default AdminQuestionShow

const sx = {
  divider: {
    borderBottom: '1px solid',
    borderColor: 'divider',  
    pt: 2,  
    my: 2
  }
}