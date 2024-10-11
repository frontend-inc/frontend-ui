import React from 'react'
import { Badge } from '../../shadcn/ui/badge'

type LabelProps = {
	label?: string
  className?: string	
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, className } = props

	if (!label) return null
	return (
    <Badge className={ className }>
      { label }
    </Badge>
	)
}

export default Label
