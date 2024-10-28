'use client'

import React from 'react'
import { CircularProgress } from '../../../components'

type LoaderProps = {
	size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { size = 'sm' } = props || {}
	return (
		<div className="w-full h-full flex justify-center items-center">
			<CircularProgress size={size} />
		</div>
	)
}

export default Loader
