import React from 'react'
import {	
	ProductCard,	
  ProductListCard,
} from '../..'
import { useResourceContext } from 'frontend-js'
import { SecondaryFields, SocialButtons, ButtonActions } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { Box } from '@mui/material'
import { buildActions } from '../../../helpers'

type CardStyleTypes = 'list' | 'card' 

type ProductListItemProps = {
	selectable?: boolean
	buttons: ButtonType[]
	style: CardStyleTypes
	displayFields: DisplayFieldType[]
	resource: any 
	buttonText?: string
	href?: string
	handleClick: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableUsers?: boolean	
	enableFavorites?: boolean
	enableAddToList?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const { selectedIds, handleSelect } = useResourceContext()

	const {
		selectable,
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
		enableEdit = false,
		enableDelete = false,
		handleEdit,
		handleDelete,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableAddToList = false,
		enableLikes = false,
		enableRatings = false,
		enableUsers = false,
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: ProductCard,
		list: ProductListCard,
	}

	let Component = COMPONENTS[style] || ProductCard

	return (
		<Component
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
      price={resource?.display_price}
      compareAtPrice={resource?.display_compare_at_price}
			handleClick={handleClick}
			selectable={selectable}
			selected={selectedIds?.includes(resource?.id)}
			handleSelect={() => handleSelect(resource)}
			secondary={
				<SecondaryFields
					enableRatings={enableRatings}
					enableUsers={enableUsers}
					fields={displayFields}
					resource={resource}
				/>
			}
			actions={
				<Box>
					<SocialButtons
						size="large"
						justifyContent="flex-start"
						resource={resource}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}						
						enableAddToList={enableAddToList}
					/>
				</Box>
			}
			secondaryAction={
				<ButtonActions
					numVisible={0}
					buttons={buildActions({
						enableEdit,
						enableDelete,
						handleEdit,
						handleDelete,
						buttons,
					})}
					resource={resource}
				/>
			}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default ProductListItem
