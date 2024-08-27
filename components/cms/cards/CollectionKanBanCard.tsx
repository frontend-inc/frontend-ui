import React from 'react'
import { Box } from '@mui/material'
import { SecondaryFields, SocialButtons } from '../../../components'
import { KanBanCard } from '../../../components'
import { CardProps } from '../../../types'
import { ButtonActions } from '../../../components'
import { buildActions } from '../../../helpers'

export type KanBanCardProps = CardProps & {
	id: string
	loading?: boolean
	ref?: any
	attributes?: any
	listeners?: any
	enableDragging?: boolean
}

const CollectionKanBanCard: React.FC<KanBanCardProps> = (props) => {
	const {
		loading,
		buttons,
		resource,
		displayFields = [],
		handleClick,
		enableGradient,
		enableOverlay,
		enableDragging = false,
		enableComments,
		enableLikes,
		enableFavorites,
		enableRatings,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		enableUsers,
	} = props || {}

	return (
		<KanBanCard
			id={resource?.id}
			primary={resource?.title}
			enableDragging={enableDragging}
			loading={loading}
			image={resource?.image?.url}
			handleClick={handleClick}
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
						resource={resource}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableComments={enableComments}
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
					disableBorderRadius: true,
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default CollectionKanBanCard
