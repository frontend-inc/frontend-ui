import React, { useState } from 'react'


const useMenu = (anchorRef?: React.RefObject<any>) => {

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
