import React from 'react'
import { IconButton, Tooltip, Typography } from '../../../../tailwind'
import { Icon } from '../../../../components'

type InputLabelProps = {
	label?: string
	info?: string
}

const InfoLabel: React.FC<InputLabelProps> = (props) => {
	const { label, info } = props

	return (
		<div className="min-w-[100px] flex flex-row gap-2">
			{label && (
				<Typography variant="caption" color="text.secondary">
					{label}
				</Typography>
			)}
			{info && (
				<Tooltip title={info}>
					<IconButton>
						<Icon name="Info" size={16} color="text.secondary" />
					</IconButton>
				</Tooltip>
			)}
		</div>
	)
}

export default InfoLabel
