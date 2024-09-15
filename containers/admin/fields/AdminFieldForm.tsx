import React, { useState } from 'react'
import {
	Drawer,
	ButtonTabs,
	IconLoading,
	FormFields,
	ResourceForm,
} from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { Button, Box } from '@mui/material'
import AdminFieldVariantList from './AdminFieldVariantList'
import AdminFieldVariantListItem from './AdminFieldVariantListItem'
import { FIELD_VARIANTS } from '../../../constants'

const AdminFieldForm: React.FC<ResourceFormProps> = (props) => {
	const {
		loading,
		errors,
		open,
		handleClose,
		resource,
		setResource,
		handleChange,
		handleSubmit,
		handleRemove,
	} = props || {}

	const handleClick = (field) => {
		setResource({
			...resource,
			db_type: field.db_type,
			variant: field.variant,
		})
		setTab(1)
	}

	const [tab, setTab] = useState<any>(0)

	const TABS = [
		{ label: 'Field', value: 0 },
		{ label: 'Settings', value: 1 },
		{ label: 'Validate', value: 2 },
	]

	return (
		<Drawer
			disablePadding
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
			<Box p={2}>
				<ButtonTabs value={tab} options={TABS} handleChange={setTab} />
			</Box>
			{tab == 0 && (
				<AdminFieldVariantList field={resource} handleClick={handleClick} />
			)}
			<Box>
				{tab == 1 && (
					<Box px={2}>
						{resource?.variant && (
							<AdminFieldVariantListItem
								field={FIELD_VARIANTS?.find(
									(f) => f.variant == resource.variant
								)}
								handleClick={() => null}
							/>
						)}
						{resource?.id ? (
							<FormFields
								errors={errors}
								resource={resource}
								handleChange={handleChange}
								handleRemove={handleRemove}
								fields={[{ label: 'Label', name: 'label', variant: 'string' }]}
							/>
						) : (
							<FormFields
								errors={errors}
								resource={resource}
								handleChange={handleChange}
								handleRemove={handleRemove}
								fields={[
									{ label: 'Label', name: 'label', variant: 'string' },
									{
										label: 'API name',
										name: 'name',
										variant: 'nospace',
										conditions: [
											{
												name: 'variant',
												operator: 'nin',
												value: [
													'image',
													'file',
													'video',
													'audio',
													'habtm',
													'shopify_products',
													'url',
													'email',
													'phone',
												],
											},
										],
									},
									{
										label: 'Options',
										name: 'options',
										variant: 'array',
										conditions: [
											{
												name: 'variant',
												operator: 'eq',
												value: 'select',
											},
										],
									},
								]}
							/>
						)}
					</Box>
				)}
				<Box px={2}>
					{tab == 2 && (
						<FormFields
							errors={errors}
							resource={resource}
							handleChange={handleChange}
							fields={[
								{
									label: 'Validate required',
									name: 'validate_required',
									variant: 'boolean',
								},
								{
									label: 'Validate unique',
									name: 'validate_unique',
									variant: 'boolean',
								},
								{
									label: 'Validate email',
									name: 'validate_email',
									variant: 'boolean',
								},
								{
									label: 'Validate phone number',
									name: 'validate_phone',
									variant: 'boolean',
								},
								{
									label: 'Validate length',
									name: 'validate_length',
									variant: 'boolean',
								},
								{
									label: 'Minimum text length',
									name: 'validate_length_min',
									variant: 'number',
									conditions: [
										{
											name: 'validate_length',
											operator: 'eq',
											value: true,
										},
									],
								},
								{
									label: 'Maximum text length',
									name: 'validate_length_max',
									variant: 'number',
									conditions: [
										{
											name: 'validate_length',
											operator: 'eq',
											value: true,
										},
									],
								},
								{
									label: 'Validate number range',
									name: 'validate_numericality',
									variant: 'boolean',
								},
								{
									label: 'Minimum number',
									name: 'validate_length_min',
									variant: 'number',
									conditions: [
										{
											name: 'validate_numericality',
											operator: 'eq',
											value: true,
										},
									],
								},
								{
									label: 'Maximum number',
									name: 'validate_length_max',
									variant: 'number',
									conditions: [
										{
											name: 'validate_numericality',
											operator: 'eq',
											value: true,
										},
									],
								},
								{
									label: 'Validate format',
									name: 'validate_format',
									variant: 'boolean',
								},
								{
									label: 'Regex format',
									name: 'validate_format_regext',
									variant: 'string',
									conditions: [
										{
											name: 'validate_format',
											operator: 'eq',
											value: true,
										},
									],
								},
								{
									label: 'Validate inclusion',
									name: 'validate_inclusion',
									variant: 'boolean',
								},
								{
									label: 'Allowed values',
									name: 'validate_inclusion_options',
									variant: 'array',
									conditions: [
										{
											name: 'validate_inclusion',
											operator: 'eq',
											value: true,
										},
									],
								},
							]}
							handleRemove={() => null}
						/>
					)}
				</Box>
			</Box>
		</Drawer>
	)
}

export default AdminFieldForm
