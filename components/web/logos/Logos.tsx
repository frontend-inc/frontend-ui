import React from 'react'
import { Stack } from '@mui/material'
import { Placeholder } from '../..'
import Logo from './Logo'
import { Heading } from '../..'

type LogosProps = {
  title?: string
	label?: string
	items?: {
		image: string
		title?: string
	}[]
	editing?: boolean
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Logos: React.FC<LogosProps> = (props) => {
	const { title, label, items = [], editing, ...rest } = props

	return (
		<Stack spacing={0} sx={sx.root}>
      <Heading 
        title={title} 
        label={label} 
        textAlign='center'
      />      
			<Stack sx={sx.logos} direction="row" spacing={1}>
				{items?.map((item, index) => (
					<Logo
						key={index}
						title="Logo"
						image={item?.image}
						height={60}
						width={120}
					/>
				))}
			</Stack>
			{items?.length === 0 && (
				<Placeholder
					icon="Image"
					title="No logos"
					description="Logos will appear here"
				/>
			)}
		</Stack>
	)
}

export default Logos

const sx = {
	root: {
		width: '100%',
		p: 2,
		bgcolor: 'background.main',
	},
	label: {		
		textAlign: 'center',
	},
	logos: {
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		justifyContent: {
			sm: 'center',
			xs: 'flex-start',
		},
	},
}
