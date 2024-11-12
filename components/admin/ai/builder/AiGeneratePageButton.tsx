'use client'

import React, { useState } from 'react'
import { Icon, Modal, Button } from '../../..'
import AiChatForm from './AiChatForm'
import { useUnsplash } from '../../../../hooks'
import { experimental_useObject as useObject } from 'ai/react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from 'frontend-shadcn'
import { PAGE_SCHEMA } from 'lib/constants'

type AiGeneratePageButtonProps = {	
	handleSuccess: (page: any) => void
}

const AiGeneratePageButton: React.FC<AiGeneratePageButtonProps> = ({ handleSuccess }) => {
	const [open, setOpen] = useState(false)
	const [input, setInput] = useState('')

	const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setInput(ev.target.value)
	}

	const { isLoading, submit, stop } = useObject({
		api: '/api/ai_page',
		schema: PAGE_SCHEMA,
		onFinish: (resp) => {
      console.log('Response', resp)
			const { object } = resp
			postProcess(object)
			setOpen(false)
			stop()
		},
	})

	const { handleSearch } = useUnsplash()

	const postProcess = async (object: any) => {
		let pageComponents = object?.components ?? []
		const keywords = Array.isArray(object?.image_keywords) ? 
      object.image_keywords.join(' ') : 
      object?.image_keywords
		const { results: images = [] } = await handleSearch(keywords, 50)
		let imageIndex = 0

		const getNextImage = () => images[imageIndex++]?.urls.regular ?? ''
		const processItems = (items: any[]) => items.map((item) => ({ ...item, image: getNextImage() }))

		pageComponents = pageComponents.map((component) => ({
			...component,
			props: {
				...component.props,
				items: component?.props?.items ? processItems(component.props.items) : undefined,
				image: component?.props?.items ? undefined : getNextImage(),
			},
			products: component?.products?.map((product) => ({
				...product,
				props: { ...product.props, image: getNextImage() },
			})),
			collection: component?.collection
				? {
						...component.collection,
						documents: processItems(component.collection.documents),
				  }
				: undefined,
		}))
    
		handleSuccess({
			title: object?.title,
			handle: object?.title?.toLowerCase()?.replace(/ /g, '-'),
			description: object?.description,
			template: { ...object, components: pageComponents },
		})
	}

	const handleChatSubmit = () => submit(input)

	return (
		<>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							className="bg-blue-500 text-white hover:bg-blue-700"
							startIcon={<Icon name="Zap" className="text-white" />}
							onClick={() => setOpen(!open)}
						>
							Generate with AI
						</Button>
					</TooltipTrigger>
					<TooltipContent>Use AI to generate text</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<Modal
				loading={isLoading}
				title="AI generate page"
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						className="bg-blue-500 text-white hover:bg-blue-700"
						onClick={handleChatSubmit}
						loading={isLoading}
						startIcon={<Icon name="Zap" className="text-white" />}
					>
						Generate
					</Button>
				}
			>
				<AiChatForm input={input} handleChange={handleInputChange} />
			</Modal>
		</>
	)
}

export default AiGeneratePageButton
