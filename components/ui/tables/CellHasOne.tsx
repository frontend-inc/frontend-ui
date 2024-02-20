import React from 'react'
import { CellButton } from '../../../components'
import { RepeatOne } from '@mui/icons-material'

type CellHasOneProps = {
	value: string
	handleClick: () => void
}

const CellHasOne: React.FC<CellHasOneProps> = (props) => {
	const { value, handleClick } = props

	return (
		<CellButton 
      handleClick={handleClick} 
      icon={<RepeatOne />} 
    >
      { value }
    </CellButton>  
	)
}

export default CellHasOne
