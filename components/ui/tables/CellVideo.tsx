import React from 'react'
import { Button } from '@mui/material'
import { Image, NoImage } from '../../../components'
import { imageFromVideoUrl } from '../../../helpers'

type CellVideoProps = {
	value: string
	size?: number
	handleClick?: () => void
}

const CellVideo: React.FC<CellVideoProps> = (props) => {
	const { value, handleClick, size = 64 } = props
	if (!value) return <NoImage height={size} width={size} />
	return (
		<Button sx={sx.root} onClick={handleClick}>
			<Image
				src={imageFromVideoUrl(value)}
				// @ts-ignore
				width={size}
				height={size}
			/>
		</Button>
	)
}

export default CellVideo

const sx = {
	root: {
		p: 0,
	},
}
