import React, { useState } from 'react'

type UseMenuProps = {
	anchorRef?: React.RefObject<any>
}

const useMenu = (props?: UseMenuProps) => {
	const { anchorRef } = props || {}

	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const toggleMenu = (e: any) => {
		setAnchorEl(e.currentTarget)
		setOpen(!open)
	}

	const closeMenu = () => {
		setOpen(false)
	}

	const openMenu = (e) => {
		setAnchorEl(anchorRef ? anchorRef.current : e.currentTarget)
		setOpen(true)
	}

	return {
		open,
		anchorEl,
		closeMenu,
		openMenu,
		toggleMenu,
	}
}

export default useMenu
