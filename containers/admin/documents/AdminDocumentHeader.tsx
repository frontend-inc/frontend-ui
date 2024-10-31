'use client'

import React, { useState } from 'react'
import { ResourceHeader } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useAdminDocuments, useAdminCollections } from '../../../hooks'
import { Form, Modal, Icon } from '../../../components'
import { Button } from '../../../components/core'

type AdminDocumentHeaderProps = ResourceHeaderProps & {
  collectionId: string 
}

const AdminDocumentHeader: React.FC<AdminDocumentHeaderProps> = (props) => {
	const { handleReload, collectionId } = props || {}

	const { loading } = useAdminDocuments({
    collection: collectionId
  })
  
  const { loading: collectionLoading, aiGenerate } = useAdminCollections()

	const [open, setOpen] = useState(false)

	const [prompt, setPrompt] = useState({ text: '' })
	const handleChange = (ev) => {
		setPrompt({
			text: ev.target.value,
		})
	}

	const handleGenerateAiDocuments = async () => {
		await aiGenerate(collectionId, prompt.text)
    setOpen(false)
		if (handleReload) {
			handleReload()
		}
	}

	return (
		<ResourceHeader
			{...props}
			secondaryAction={
				<>
					<Button             
            className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white" 
            onClick={() => setOpen(true)}
            startIcon={
              <Icon name="Zap" />
            }
          >						
            Generate 
					</Button>
					<Modal
						icon="Zap"
						title="Generate Data"						
						open={open}
						handleClose={() => setOpen(false)}
            loading={collectionLoading}
					>
						<Form
							errors={{}}
							resource={prompt}
							handleChange={handleChange}
							fields={[
								{
									name: 'prompt',
									label: 'Describe the products to generate',
									variant: 'text',
									placeholder: '',
									default: '',
								},
							]}
							handleSubmit={handleGenerateAiDocuments}
							buttonText="Generate"
						/>
					</Modal>
				</>
			}
		/>
	)
}

export default AdminDocumentHeader
