import React from 'react'
import { Drawer, FormFields, IconLoading } from '../../../components'
import { Stack, Button } from '@mui/material'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType, MetafieldType } from '../../../types'
import { MediaInput } from '../../../containers'

type AdminProductFormProps = ResourceFormProps & {
	metafields?: FormFieldType[]
}

const AdminProductForm: React.FC<AdminProductFormProps> = (props) => {
	const { metafields = [] } = props || {}
	const {
		loading,
		errors,
		open,
		handleClose,
		resource,
		handleChange,
		handleAddAttachment,
		handleRemoveAttachment,
		handleSubmit,
	} = props || {}

	let fields = [
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Price', name: 'price', variant: 'number' },
		{ label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
		{ label: 'SKU', name: 'sku', variant: 'string' },
		{ label: 'Subscription', name: 'recurring', variant: 'boolean' },
		{
			label: 'Interval',
			name: 'interval',
			variant: 'select',
			options: [
				{ label: 'Day', value: 'day' },
				{ label: 'Week', value: 'week' },
				{ label: 'Month', value: 'month' },
				{ label: 'Year', value: 'year' },
			],
			conditions: [{ name: 'recurring', operator: 'eq', value: true }],
		},
		...metafields,
	]

	return (
		<Drawer
			open={open}
			handleClose={handleClose}
			title={resource?.id ? 'Edit' : 'Add'}
			buttons={
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleSubmit}
					startIcon={<IconLoading loading={loading} />}
				>
					{resource?.id ? 'Update' : 'Save'}
				</Button>
			}
		>
			<Stack spacing={1}>
				<MediaInput
					name="image"
					value={resource?.image}
					handleAddAttachment={handleAddAttachment}
					handleRemoveAttachment={handleRemoveAttachment}
				/>
				<FormFields
					errors={errors}
					loading={loading}
					//@ts-ignore
					fields={fields}
					resource={resource}
					handleChange={handleChange}
				/>
			</Stack>
		</Drawer>
	)
}

export default AdminProductForm
