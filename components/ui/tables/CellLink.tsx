'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { truncate } from '../../../helpers'
import { RiExternalLinkFill } from '@remixicon/react'

type CellLinkProps = {
	value: string
	handleClick: () => void
}

const CellLink: React.FC<CellLinkProps> = (props) => {
	const { value, handleClick } = props
	return (
		<div className="w-full">
			{value && (
				<Button
					size="sm"
					variant="ghost"
					startContent={<RiExternalLinkFill />}
					onPress={handleClick}
				>
					{truncate(value, 20)}
				</Button>
			)}
		</div>
	)
}

export default CellLink
