import React from 'react'
import { Box } from '@mui/material'
import { SecondaryFields, SocialButtons } from '../..'
import { KanBanCard } from '../..'
import { ButtonActions } from '../..'
import { buildActions } from '../../../helpers'
import { KanBanCardProps } from './CollectionKanBanCard'

const ReferenceCollectionKanBanCard: React.FC<KanBanCardProps> = (props) => {
	const {
		loading,
		buttons,
		resource: reference,
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

	const resource = reference?.target

	return (
		<KanBanCard
			id={reference?.id}
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

export default ReferenceCollectionKanBanCard
