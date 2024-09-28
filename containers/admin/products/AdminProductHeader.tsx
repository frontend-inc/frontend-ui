import React, { useState, useEffect } from 'react'
import { ResourceHeader, AiButton } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useProducts } from '../../../hooks'

type AdminProductHeaderProps = ResourceHeaderProps

const AdminProductHeader: React.FC<AdminProductHeaderProps> = (props) => {
	const { handleReload } = props || {}

	const { loading, generateAiProducts } = useProducts()

	return (
		<ResourceHeader
			{...props}
			secondaryAction={
				<AiButton
					loading={loading}
					title="Generate products using AI"
					description="Generate products using AI"
					handleClick={generateAiProducts}
				/>
			}
		/>
	)
}

export default AdminProductHeader

const sx = {
	iconButton: {
		minWidth: 44,
		borderRadius: 1,
		bgcolor: 'secondary.main',
		'&:hover': {
			bgcolor: 'secondary.dark',
		},
	},
}
