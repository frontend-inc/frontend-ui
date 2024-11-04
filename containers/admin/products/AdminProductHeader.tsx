'use client'

import React, { useState } from 'react'
import { ResourceHeader } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useAdminProducts } from '../../../hooks'
import { Form, Modal } from '../../../components'
import { Button } from '../../../components/core'
import { Zap } from 'lucide-react'

type AdminProductHeaderProps = ResourceHeaderProps

const AdminProductHeader: React.FC<AdminProductHeaderProps> = (props) => {
	const { handleReload } = props || {}

	const { loading, aiGenerate } = useAdminProducts()

	const [open, setOpen] = useState(false)

	const [prompt, setPrompt] = useState({ text: '' })
	const handleChange = (ev) => {
		setPrompt({
			text: ev.target.value,
		})
	}

	const handleGenerateAiProducts = async () => {
		await aiGenerate(prompt.text)
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
            className="bg-sky-500 hover:bg-sky-700 text-white"
            onClick={() => setOpen(true)}
            startIcon={
              <Zap className="h-4 w-4" />
            }
          >
            Generate 
					</Button>
					<Modal
						icon="Wand"
						title="Generate Products"
						loading={loading}
						open={open}
						handleClose={() => setOpen(false)}
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
							handleSubmit={handleGenerateAiProducts}
							buttonText="Generate Products"
						/>
					</Modal>
				</>
			}
		/>
	)
}

export default AdminProductHeader
