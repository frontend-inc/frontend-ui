import React from 'react'

type GridProps = {
	children: React.ReactNode
}

const Grid: React.FC<GridProps> = (props) => {
	const { children } = props || {}
	return (
		<div className="grid grid-cols-1 gap-2 auto-rows-[50px] md:grid-cols-12">
			{children}
		</div>
	)
}

export default Grid
