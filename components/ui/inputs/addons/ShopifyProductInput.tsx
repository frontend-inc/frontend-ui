import React, { useEffect, useState, useContext } from 'react'
import {
	Paper,
	ListItem,
	ListItemIcon,
	Stack,
	Typography,
	InputBase,
} from '@mui/material'
import Image from 'next/image'
import Autocomplete from '@mui/material/Autocomplete'
import { Placeholder } from '../../../components'
import { SyntheticEventType } from 'frontend-ui/types'
import { useProducts } from 'frontend-shopify/hooks'
import { ShopifyContext } from 'frontend-shopify'
import { truncate } from 'frontend-ui/helpers'

type AutocompleteOptionProps = {
	option: any
}

const AutocompleteOption: React.FC<AutocompleteOptionProps> = (props) => {
	const { option } = props
	const image = option?.images?.edges[0]?.node
	return (
		<ListItem sx={{ mr: 2, flexShrink: 0 }} {...props}>
			<ListItemIcon sx={sx.listItemIcon}>
				{image?.url && (
					<Image
						src={image?.url}
						alt={image?.altText}
						width={32}
						height={32}
						//@ts-ignore
						style={styles.image}
					/>
				)}
			</ListItemIcon>
			<Typography variant="body1">{truncate(option?.title)}</Typography>
		</ListItem>
	)
}

type AutocompletePaperProps = {
	children: React.ReactNode
}

const AutocompletePaper: React.FC<AutocompletePaperProps> = (props) => {
	return <Paper {...props} elevation={10} sx={sx.paper} />
}

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
}

const ShopifyProductInput: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_handle',
		handleChange,
	} = props

  const { 
    domain,
    storefrontAccessToken 
  } = useContext(ShopifyContext) as any 

	const [selected, setSelected] = useState({
		title: '',
		handle: null,
	})

	const { products, findProducts } = useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (newValue) => {}

	const handleOnChange = (event, newValue) => {
		setSelected(newValue?.handle)
		handleChange({
			target: {
				name: name,
				value: newValue?.handle,
			},
		})
	}

	useEffect(() => {
		if (value && options?.length > 0) {
			setSelected(options.find((option) => option.handle == value))
		}
	}, [value, options])

	useEffect(() => {
		if (products) {
			setOptions(products)
		}
	}, [products])

	useEffect(() => {
		findProducts({
			first: 10,
		})
	}, [])

  if(!domain || !storefrontAccessToken) return (
    <Placeholder 
      title='Shopify setup required'
      description='Shopify provider is not setup'
    />
  )
	return (
		<Stack
			sx={{
				...sx.stack,
				...(direction == 'row' && sx.stackVertical),
			}}
			direction={direction}
			spacing={1}
		>
			{label && (
				<Typography sx={sx.label} variant="caption" color="text.secondary">
					{label}
				</Typography>
			)}
			{products?.length > 0 && (
				<Autocomplete
					sx={{
						...sx.autocomplete,
						paper: sx.paper,
						option: sx.option,
						popperDisablePortal: sx.popperDisablePortal,
					}}
					value={selected}
					onChange={(event, newValue) => {
						handleOnChange(event, newValue)
					}}
					onInputChange={(event, newInputValue) => {
						handleInputChange(newInputValue)
					}}
					noOptionsText="No options"
					clearOnBlur
					handleHomeEndKeys
					options={products}
					//@ts-ignore
					getOptionLabel={(option) => option?.title || ''}
					//@ts-ignore
					getOptionSelected={(option, value) => option.handle == value?.handle}
					renderOption={(props, option) => (
						<AutocompleteOption {...props} option={option} />
					)}
					PaperComponent={AutocompletePaper}
					renderInput={(params) => (
						<InputBase
							placeholder={placeholder}
							ref={params.InputProps.ref}
							inputProps={{
								...params.inputProps,
								autoComplete: 'off',
							}}
							sx={sx.inputBase}
						/>
					)}
				/>
			)}
		</Stack>
	)
}

export default ShopifyProductInput

const styles = {
	image: {
		borderRadius: '4px',
		objectFit: 'cover',
	},
}

const sx: any = {
	autocomplete: {
		width: '100%',
	},
	inputBase: {
		p: 0,
		width: '100%',
		'& input': {
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',
			appearance: 'none',
			p: 1,
			height: 20,
			borderRadius: 1,
			fontSize: (theme) => theme.typography.body2.fontSize,
			fontFamily: (theme) => theme.typography.body2.fontFamily,
			bgcolor: 'background.paper',
			m: '1px',
			border: (theme) => `1px solid ${theme.palette.divider}`,
			'&:focus': {
				m: '0px',
				border: (theme) => `2px solid ${theme.palette.primary.light}`,
			},
		},
	},
	inputError: {
		'& input': {
			border: '2px solid',
			borderColor: 'error.main',
			p: 1,
			height: 20,
			borderRadius: 1,
		},
	},
	paper: {
		bgcolor: 'background.paper',
		color: 'text.primary',
		p: 0,
		my: 0,
	},
	popperDisablePortal: {
		position: 'relative',
	},
	icon: {
		marginRight: '10px',
	},
	stack: {
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
	label: {
		minWidth: '100px',
	},
	listItemIcon: {
		pr: 1,
		minWidth: '44px',
	},
}
