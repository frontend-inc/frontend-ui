import React from 'react'
import { CellButton } from '../../../components'
import { ForkRight } from '@mui/icons-material'

type CellHasManyProps = {
	value: any
	handleClick: () => void
}

const CellHasMany: React.FC<CellHasManyProps> = (props) => {
	const { value, handleClick } = props
	return (
		<CellButton 
      handleClick={handleClick} 
      icon={<ForkRight />} 
    >
      { value }
    </CellButton>
	)
}

export default CellHasMany
