import React from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'
import SampleLogo from '../../../assets/sample-logo.svg'

const LOGO_WIDTH = 120
const LOGO_HEIGHT = 60

type LogoProps = {
	src: string
	width?: number
	height?: number
	handleClick: (path: string) => void
}

const Logo: React.FC<LogoProps> = (props) => {
	const {
		src,
		width = LOGO_WIDTH,
		height = LOGO_HEIGHT,
		handleClick,
	} = props || {}

	return (
		// @ts-ignore
		<Button disableRipple sx={sx.root} onClick={handleClick}>			
				<Image
					src={src?.length > 0 ? src : SampleLogo}
					alt="logo"
					width={width ? Number(width) : LOGO_WIDTH}
					height={height ? Number(height) : LOGO_HEIGHT}
					//@ts-ignore
					style={styles.image}
				/>
		</Button>
	)
}

export default Logo

const sx = {
	root: {
		width: '100%',
		minHeight: 'auto',
		minWidth: 'auto',
		'&:hover': {
			background: 'transparent',
		},
	},
}

const styles = {
	image: {
		objectFit: 'contain',
	},
}
