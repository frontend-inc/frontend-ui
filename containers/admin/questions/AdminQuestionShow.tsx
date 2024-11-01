'use client'

import React from 'react'
import { Typography } from '../../../components/core'
import {
	ResourceModal,
	ResourceDetails,
} from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { AdminAnswerList } from '../../../containers'


const AdminQuestionShow: React.FC<ResourceShowProps> = (props) => {
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
				label={resource?.question?.variant}
				image={resource?.question?.image?.url}
				primary={resource?.question?.title}
				secondary={resource?.question?.description}
				resource={resource?.question}
				fields={[]}
			/>
			<div className="flex flex-col space-y-3">
				<div className="w-full h-[1px] border-top-1 border-border" />
				<Typography variant="subtitle1">Answer Choices</Typography>
				<Typography variant="body2" className="text-muted-foreground">
					For single choice and multiple choice questions
				</Typography>
				<AdminAnswerList
					direction="column"
					questionId={resource?.question_id}
				/>
			</div>
		</ResourceModal>
	)
}

export default AdminQuestionShow
