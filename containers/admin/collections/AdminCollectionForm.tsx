'use client'

import React from 'react'
import { COLLECTION_TEMPLATES } from '../../../constants'
import { FormFields, ErrorText } from '../../../components'
import { SquareButton } from '../../../components'

type AdminCollectionFormProps = {
	collection: any
	handleChange: (e: any) => void
	handleClick: (template: any) => void
	errors: any
}

const AdminCollectionForm: React.FC<AdminCollectionFormProps> = (props) => {
	const { errors, collection, handleClick, handleChange } = props

	return (
		<div className="flex flex-col space-y-2">
			<div className="p-2">
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
							variant: 'slug',
						}
					]}
				/>
			</div>
			{!collection?.id && (
				<div className="px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {COLLECTION_TEMPLATES.map((template, index) => (
            <SquareButton 
              key={index}
              selected={collection.document_type == template.document_type}
              label={template.label}								
              icon={template.icon}
              color={template.color}
              handleClick={() => handleClick(template)}
            />
          ))}
				</div>
			)}
			<ErrorText
				error={
					errors?.collection_type && `collection type ${errors.collection_type}`
				}
			/>
		</div>
	)
}

export default AdminCollectionForm
