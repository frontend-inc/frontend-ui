import React from 'react'
import { Label, NoImage, TouchableOpacity } from '../../../components'
import { Box, useTheme } from '@mui/material'
import { truncate } from '../../../helpers'
import NextImage from 'next/image'

export type ImageProps = {
	src?: string
	height: number
	width?: number
	objectFit?: 'cover' | 'contain'
	label?: string
	alt?: string
	bgcolor?: string
	opacity?: number
	enableGradient?: boolean
	enableOverlay?: boolean
	disableBorder?: boolean
	disableBorderRadius?: boolean
  handleClick?: () => void
}

const Image: React.FC<ImageProps> = (props) => {
	const {
		src = null,
		height,
		width,
		objectFit = 'cover',
		alt = 'image',
		label,
		bgcolor = '#000000',
		opacity = 0.5,
		enableOverlay = false,
		enableGradient = false,
		disableBorder = false,
		disableBorderRadius = false,
    handleClick,    
	} = props

	const theme = useTheme()

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				height: `${height}px`,
			}}
		>
      <TouchableOpacity handleClick={ handleClick }>
        <Box
          sx={{
            ...sx.root,
            height: `${height}px`,
            minWidth: width ? `${width}px` : '100%',
            ...(!disableBorderRadius && sx.borderRadius),
            '&::after': {
              ...sx.afterBase,
              ...(enableOverlay && sx.overlay),
              ...(!enableOverlay && enableGradient && sx.gradient),
              ...(!disableBorderRadius && sx.borderRadius),
              ...(!enableOverlay &&
                !disableBorderRadius &&
                enableGradient &&
                sx.gradientBorderRadius),
              bgcolor,
              opacity,
            },
          }}
        >
          {src ? (
            <NextImage
              src={src}
              alt={alt}
              height={1600}
              width={1600}
              layout="responsive"
              style={{
                height: `${height}px`,
                width: width ? `min(${width}px, 100vw)` : '100%',
                minHeight: `${height}px`,
                objectFit,
                borderRadius: !disableBorderRadius
                  ? `${theme.shape.borderRadius}px`
                  : '0px',
              }}
            />
          ) : (
            <NoImage
              height={height}
              width={width}
              disableBorder={disableBorder}
              disableBorderRadius={disableBorderRadius}
            />
          )}
        </Box>
      </TouchableOpacity>
      {label && (
				<Box sx={sx.label}>
					<Label color="common.white" label={truncate(label, 22)} />
				</Box>
			)}
		</Box>
	)
}

export default Image

const sx = {
	root: {
		position: 'relative',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	label: {
		position: 'absolute',
		left: 15,
		top: 15,
	},
	borderRadius: {
		borderRadius: 1,
	},
	afterBase: {
		content: '""',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		bgcolor: 'transparent',
		opacity: 0,
	},
	overlay: {
		height: '100%',
	},
	gradient: {
		height: '50%',
		background: 'linear-gradient(to top, rgb(0,0,0,1.0), transparent)',
	},
	gradientBorderRadius: {
		height: '50%',
		background: 'linear-gradient(to top, rgb(0,0,0,1.0), transparent)',
		borderRadius: 1,
	},
  secondaryActions: {
    position: 'absolute',
		right: 15,
		top: 10,
  }
}
