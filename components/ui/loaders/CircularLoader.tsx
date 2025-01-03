'use client'

import React from 'react'
import { Spinner } from '@nextui-org/react'

type LoaderProps = {
	size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Loader: React.FC<LoaderProps> = (props) => {
	const { size = 'sm' } = props || {}
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Spinner />
		</div>
	)
}

export default Loader
