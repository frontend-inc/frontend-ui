import React from 'react'
import { Box, Button } from '@mui/material'
import { Icon, TextInput, EmptyImage } from '../../../components'
import Image from 'next/image'

type ImageInputProps = {
	name: string
	label: string
	value: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleBrowse: (name: string) => void
	placeholder?: string
	errors?: string
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
	const { name, value, handleChange, handleBrowse, placeholder, errors } = props

	return (
		<Box>
			{value ? (
				<Image
					height={64}
					width={64}
					src={value}
					alt="image"
					style={{
						width: '100%',
						objectFit: 'contain',
					}}
				/>
			) : (
				<EmptyImage height={64} width={64} />
			)}
			<TextInput
				name={name}
				value={value}
				handleChange={handleChange}
				placeholder={placeholder}
				errors={errors}
			/>
			<Button
				size="small"
				variant="contained"
        color="secondary"
				onClick={() => handleBrowse(name)}
				startIcon={<Icon name="Search" />}
			>
				Browse
			</Button>
		</Box>
	)
}

export default ImageInput
