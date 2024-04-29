import React, { useEffect, useState } from 'react'
import {
  Box,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
	IconButton,
	Collapse,
} from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import { getCookie, setCookie } from 'cookies-next'

type ExpandableListProps = {
	children: React.ReactNode
  id?: string
	label?: string
	icon?: React.ReactNode
	enableBorder?: boolean
	disablePadding?: boolean
	closed?: boolean
}

const ExpandableList: React.FC<ExpandableListProps> = (props) => {
	const { id, label, closed=false, children, enableBorder=true } = props

	const [open, setOpen] = useState(!closed)
	const handleToggleClick = () => {
    //setMenuCookie(!open)
		setOpen(!open)
	}

  const setMenuCookie = (value: boolean) => {
		if (!id) return null
		// @ts-ignore
		let jsonCookie = JSON.parse(getCookie(`app-config`) || '{}')
		jsonCookie[id] = value
		setCookie(`app-config`, JSON.stringify(jsonCookie))
	}

  const handleReadCookieState = (id) => {
    let cookie = getCookie(`app-config`) || '{}'
    // @ts-ignore
    let jsonConfig = JSON.parse(cookie)
    if(jsonConfig[id]= undefined) {
      setOpen(jsonConfig[id]) 
    }
  }

	useEffect(() => {
		if(id) {
			//handleReadCookieState(id)
		}
	}, [id])


	return (
		<List
			disablePadding
			sx={{
				...sx.root,
				...(enableBorder && sx.borderTop),
			}}
		>
			{label && (
				<ListItem
					sx={sx.listItem}
					disablePadding
					disableGutters
					secondaryAction={
						<IconButton onClick={handleToggleClick}>
							<ChevronRight
								sx={{
									...sx.icon,
									...(open && sx.expandMore),
								}}
							/>
						</IconButton>
					}
				>
					<ListItemButton
						sx={sx.listItemButton}
						disableRipple
						onClick={handleToggleClick}
					>
						<ListItemText
							primary={
								<Typography sx={sx.label} variant={'caption'}>
									{label}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			)}
			<Collapse in={open} timeout="auto" unmountOnExit>
        <Box px={2}>
				  {children}
        </Box>
			</Collapse>
		</List>
	)
}

export default ExpandableList

const sx = {
	root: {
		width: '100%',
		minWidth: 200,
		my: 0,    
	},
	listItem: {
		borderRadius: 1,
		height: '40px',
	},
	listItemButton: {
		py: 0,
		px: 2,
		borderRadius: 1,
		height: '40px',
	},
	listItemIcon: {
		minWidth: '40px',
		width: '40px',
	},
	label: {
		py: 0,
		color: 'text.secondary',
		lineHeight: '1em',
	},
	icon: {
		color: 'text.secondary',
		transition: 'transform 0.3s ease-in-out',
	},
	expandMore: {
		transform: 'rotate(90deg)',
	},
	borderTop: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
}
