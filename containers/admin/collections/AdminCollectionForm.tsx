import React from 'react'
import { Box, Stack, List } from '@mui/material'
import { COLLECTION_TEMPLATES } from '../../../constants'
import { FormFields, ErrorText } from '../../../components'
import { MenuListItem } from '../../../components'
import { MenuList } from '../../../components'

type AdminCollectionFormProps = {
	collection: any
	handleChange: (e: any) => void
	handleTemplateClick: (template: any) => void
	errors: any
}

const AdminCollectionForm: React.FC<AdminCollectionFormProps> = (props) => {
	const { errors, collection, handleTemplateClick, handleChange } = props

	return (
		<Stack direction="column" spacing={1}>
			<Box p={2}>
				<FormFields
					errors={errors}
					handleChange={handleChange}
					resource={collection}
					fields={[
						{
							label: 'Name',
							name: 'label',
							placeholder: 'Name',
							variant: 'string',
						},
						{
							label: 'API name',
							name: 'name',
							placeholder: 'API name',
							variant: 'nospace',
						},
						{
							label: 'Description',
							name: 'description',
							placeholder: 'Description',
							variant: 'text',
						},
					]}
				/>
			</Box>
			{!collection?.id && (
				<MenuList enableBorder label="Templates">
					<List sx={{ my: 0 }}>
						{COLLECTION_TEMPLATES.map((template) => (
							<MenuListItem
								selected={collection.template == template}
								title={template.label}
								description={template.description}
								icon={template.icon}
								color={template.color}
								handleClick={() => handleTemplateClick(template)}
							/>
						))}
					</List>
				</MenuList>
			)}
			<ErrorText
				error={
					errors?.collection_type && `collection type ${errors.collection_type}`
				}
			/>
		</Stack>
	)
}

export default AdminCollectionForm
