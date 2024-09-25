import React from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import { Drawer, ResourceModal, ResourceDetails } from '../../../components'
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
        label={ resource?.question?.variant }
        image={ resource?.question?.image?.url }
        primary={ resource?.question?.title }
        secondary={ resource?.question?.description }
        resource={ resource?.question }
        fields={[]}
      />
      { [
          'single_choice',
          'multiple_choice'
        ].includes(resource?.question?.variant) && (
        <Stack direction="column" width={'100%'} spacing={1}>
          <Divider sx={ sx.divider } />
          <Typography variant="subtitle1" color='text.primary'>
            Answer Choices
          </Typography>
          <AdminAnswerList
            direction="column"
            questionId={resource?.question_id} 
          />
        </Stack>
      )}
    </ResourceModal>
	)
}

export default AdminQuestionShow

const sx = {
  divider: {
    py: 2
  }
}