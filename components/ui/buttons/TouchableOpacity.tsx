import React from 'react'
import { useClickOrDrag } from '../../../hooks'

type TouchableOpacityProps = {
	children: any
	handleClick?: () => void
	disableRipple?: boolean
	disableBorderRadius?: boolean
	justifyContent?: string
}

const TouchableOpacity: React.FC<TouchableOpacityProps> = (props) => {
	const {
		children,
		handleClick,
	} = props

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<button 
      onMouseDown={onMouseDown} 
      onMouseUp={onMouseUp} 
      className="focus:outline-none"
    >
      { children }
    </button>
	)
}

export default TouchableOpacity
