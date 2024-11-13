'use client'

import React, { useState } from 'react'
import { Icon, Modal, Button } from '../../..'
import { useUnsplash } from '../../../../hooks'
import { experimental_useObject as useObject } from 'ai/react'
import { TextArea } from '../../..'
import { DocumentsSchema } from 'lib/constants'

type AiGenerateCollectionButtonProps = {	
  loading?: boolean
	handleSuccess: (page: any) => void
}

const AiGenerateCollectionButton: React.FC<AiGenerateCollectionButtonProps> = (props) => {

  const { loading, handleSuccess } = props
	const [open, setOpen] = useState(false)
	const [input, setInput] = useState('')

	const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setInput(ev.target.value)
	}

	const { isLoading, submit, stop } = useObject({
		api: '/api/ai_documents',
		schema: DocumentsSchema,
		onFinish: (resp) => {
			const { object } = resp
			postProcess(object)
			setOpen(false)
			stop()
		},
	})

	const { handleSearch } = useUnsplash()

	const postProcess = async (object: any) => {
		let documents = object?.documents ?? []

    const getImage = async (title: string) => {
      const { results: images = [] } = await handleSearch(title, 1)
      return images[0]?.urls.regular ?? ''
    }

		documents = await Promise.all(documents.map(async (document) => ({			
			...document,
      image: await getImage(document?.title) 
		})))
    
		handleSuccess(documents)
	}

	const handleChatSubmit = () => submit(input)

	return (
		<>			
      <Button
        className="bg-accent hover:bg-accent/80 text-white"
        onClick={() => setOpen(!open)}
        startIcon={<Icon name="Zap" className="text-white" />}
        loading={loading}
      >
        Generate
      </Button>
			<Modal
				loading={isLoading}
				title="AI generate collection"
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth						
						onClick={handleChatSubmit}
						loading={isLoading}
						startIcon={<Icon name="Zap" className="text-white" />}
					>
						Generate
					</Button>
				}
			>
        <TextArea
          name="prompt"
          placeholder="Describe your CMS collection"
          value={input}
          handleChange={handleInputChange}
        />				
			</Modal>
		</>
	)
}

export default AiGenerateCollectionButton
