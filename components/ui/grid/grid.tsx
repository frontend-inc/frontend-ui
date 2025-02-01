import React from 'react'

type GridProps = {
	children: React.ReactNode
}

const Grid: React.FC<GridProps> = (props) => {
	const { children } = props || {}
	return (
		<div className="grid grid-cols-8 auto-rows-min gap-2 md:grid-cols-24 md:auto-rows-[48px]">
			{children}
		</div>
	)
}

export default Grid
