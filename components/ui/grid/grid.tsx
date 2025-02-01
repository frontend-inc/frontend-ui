import React from 'react'


type GridItemProps = {
	children: React.ReactNode
	layouts: any
	className?: string
}

const GridItem: React.FC<GridItemProps> = (props) => {
	const { children, className, layouts } = props || {}

	const generateGridClasses = (layout, prefix) => {
		if (!layout) return ''

		const { x, y, w, h } = layout

		const colStart = prefix
			? `${prefix}:col-start-${x + 1}`
			: `col-start-${x + 1}`
		const colSpan = prefix ? `${prefix}:col-span-${w}` : `col-span-${w}`
		const rowStart = prefix
			? `${prefix}:row-start-${y + 1}`
			: `row-start-${y + 1}`
		const rowSpan = prefix ? `${prefix}:row-span-${h}` : `row-span-${h}`

		return `${colStart} ${colSpan} ${rowStart} ${rowSpan}`
	}

	// Generate Tailwind classes for small (sm) and medium (md) layouts
	const smClasses = generateGridClasses(layouts.sm, '') // No prefix for sm
	const mdClasses = generateGridClasses(layouts.md, 'md')

	return (
		<div className={cn(smClasses, mdClasses, 'p-4', className)} {...props}>
			{children}
		</div>
	)
}

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

export { 
  Grid,
  GridItem 
}
