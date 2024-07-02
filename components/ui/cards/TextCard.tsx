import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Link, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { UserChip, AvgRating, FavoriteButton, DisplayFields, Actions } from '../..'

const CardList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		displayFields = [],
		href,
		textVariant = 'subtitle1',
		handleClick,
    enableUsers = false,
		enableFavorites = false,
    enableRatings = false
	} = props || {}

	const router = useRouter()

	const { title, description } = resource || {}

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box
			sx={ sx.root }
		>
			<Stack direction="row" spacing={1}>
				<Stack
					direction="column"
					spacing={1}
					sx={ sx.content }
				>
					<Link sx={ sx.link } onClick={handleItemClick}>
						<Typography color="textPrimary" variant={textVariant}>
							{truncate(title)}
						</Typography>
					</Link>          
          {enableRatings == true && (
            <AvgRating resource={resource} size="small" />
          )}
					<DisplayFields fields={displayFields} resource={resource} />
					<Typography
						color="text.secondary"
						variant="body2"
						sx={sx.description}
					>
						{truncate(description, 200)}
					</Typography>
          { enableUsers == true && (
            <UserChip 
              user={ resource?.user }
            />
          )}
				</Stack>
			</Stack>
			<Stack direction="row" justifyContent="flex-end" sx={sx.actions}>
				{enableFavorites == true && (
          <FavoriteButton 
            handle={resource?.handle} 
          />
        )}
				<Actions numVisible={0} actions={actions} resource={resource} />
			</Stack>
		</Box>
	)
}

export default CardList

const sx = {
	root: {
    pt: 1,
    pb: 2,
		position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
    cursor: 'auto',
    borderBottom: '1px solid',
    borderColor: 'divider'
	},
	container: {
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	description: {
		maxWidth: '600px',
	},
	actions: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}
