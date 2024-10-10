import React from 'react'
import { Badge } from '../../shadcn/ui/badge'

type LabelProps = {
	label?: string
	variant?: string 
  className?: string	
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, variant, className } = props

	if (!label) return null
	return (
    <Badge variant={ variant } className={ className }>
      { label }
    </Badge>
	)
}

export default Label

const sx = {
	chip: {
		color: 'secondary.contrastText',
		bgcolor: 'secondary.main',
		cursor: 'pointer',
		borderRadius: 0.5,
		boxShadow: '1px 0px 0 0 rgba(0,0,0,0.1)',
		textTransform: 'uppercase',
	},
	darkMode: {
		bgcolor: 'background.paper',
		color: 'text.secondary',
	},
}
