'use client'

import React from 'react'
import { Image } from '../../../components'
import { Typography } from '../../../components/core'
import { QuestionType } from '../../../types'
import { Button } from '../../../components'

type AdminQuestionProps = {
	question: QuestionType
	handleEdit: () => void
}

const AdminQuestionDetails: React.FC<AdminQuestionProps> = (props) => {
	const { question, handleEdit } = props || {}
	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<div className="flex flex-row justify-between items-start w-full">
				<div className="flex flex-row space-x-4">
					<div className="w-24 h-24">
						<Image
							src={question?.image?.url}
							alt={question?.title}
							width={96}
							height={96}
						/>
					</div>
					<div className="flex flex-col">
						<Typography variant="subtitle1">{question?.title}</Typography>
						<Typography variant="body2" className="text-muted-foreground">
							{question?.description}
						</Typography>
					</div>
				</div>
				<div>
					<Button onClick={handleEdit}>Edit</Button>
				</div>
			</div>
		</div>
	)
}

export default AdminQuestionDetails
