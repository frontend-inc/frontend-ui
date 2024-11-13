'use client'

import React, { useState } from 'react'
import { Icon, Modal, Button } from '../../../../components'
import { useUnsplash } from '../../../../hooks'
import { experimental_useObject as useObject } from 'ai/react'
import { TextArea } from '../../../../components'
import { ProductCollectionSchema } from 'lib/constants'

type AiGenerateProductsButtonProps = {	
  loading?: boolean
	handleSuccess: (page: any) => void
}

const AiGenerateProductsButton: React.FC<AiGenerateProductsButtonProps> = (props) => {

  const { loading, handleSuccess } = props
	const [open, setOpen] = useState(false)
	const [input, setInput] = useState('')

	const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setInput(ev.target.value)
	}

	const { isLoading, submit, stop } = useObject({
		api: '/api/ai_products',
		schema: ProductCollectionSchema,
		onFinish: (resp) => {
			const { object } = resp
			postProcess(object)
			setOpen(false)
			stop()
		},
	})

	const { handleSearch } = useUnsplash()

	const postProcess = async (object: any) => {
		let products = object?.products ?? []

    const getImage = async (title: string) => {
      const { results: images = [] } = await handleSearch(title, 1)
      return images[0]?.urls.regular ?? ''
    }

    object = { 
      ...object,
      image: await getImage(object?.title)
    }

		products = await Promise.all(products.map(async (product) => ({			
			...product,
      image: await getImage(product?.title) 
		})))
    
		handleSuccess({
      label: object?.label,
      title: object?.title,
      description: object?.description,
			template: {
        ...object,
        products
      }           
		})
	}

	const handleChatSubmit = () => submit(input)

	return (
		<>			
      <Button
        className="bg-blue-500 text-white hover:bg-blue-700"        
        onClick={() => setOpen(!open)}
        startIcon={<Icon name="Zap" className="text-white" />}
        loading={loading}
      >
        Generate
      </Button>
			<Modal
				loading={isLoading}
				title="AI generate products"
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						className="bg-accent hover:bg-accent/80 text-white"
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
          placeholder="Describe your product collection"
          value={input}
          handleChange={handleInputChange}
        />				
			</Modal>
		</>
	)
}

export default AiGenerateProductsButton
