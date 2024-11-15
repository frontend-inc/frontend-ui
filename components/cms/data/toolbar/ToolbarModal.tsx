'use client'

import React from 'react'
import { Collapse, IconButton } from '../../../core'
import { useResourceContext } from 'frontend-js'
import { RiCloseFill } from '@remixicon/react'

type ToolbarModalProps = {
	children: React.ReactNode
}

const ToolbarModal: React.FC<ToolbarModalProps> = (props) => {
	const { selected = [], handleClear } = useResourceContext()

	const { children } = props || {}

	const open = selected.length > 0
	const handleClose = () => {
		handleClear()
	}

	return (
		<Collapse in={open}>
			<div>
				<div className="flex flex-row justify-between items-center w-full">
					<div className="flex flex-row space-x-1 items-center">
						<IconButton onClick={handleClose}>
							<RiCloseFill />
						</IconButton>
						{children}
					</div>
				</div>
			</div>
		</Collapse>
	)
}

export default ToolbarModal
