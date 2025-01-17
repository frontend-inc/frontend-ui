import * as React from 'react'
import { deepEqual } from 'fast-equals'

import {
	cloneLayout,
	synchronizeLayoutWithChildren,
	noop,
	type Layout,
} from './utils'
import {
	getBreakpointFromWidth,
	getColsFromBreakpoint,
	findOrGenerateResponsiveLayout,
	type ResponsiveLayout,
	type OnLayoutChangeCallback,
	type Breakpoints,
	Breakpoint,
} from './responsiveUtils'
import { GridLayout, Props } from './GridLayout'

/**
 * Get a value of margin or containerPadding.
 *
 * @param  {Array | Object} param Margin | containerPadding, e.g. [10, 10] | {lg: [10, 10], ...}.
 * @param  {String} breakpoint   Breakpoint: lg, md, sm, xs and etc.
 * @return {Array}
 */
function getIndentationValue<T extends [number, number]>(
	param: Record<string, T> | T | undefined,
	breakpoint: Breakpoint
): T | undefined {
	if (param == null) return
	return Array.isArray(param) ? param : param[breakpoint]
}
type StateLayout = {
	layout: Layout
	layouts?: ResponsiveLayout<string>
}
type State = {
	breakpoint: string
	cols: number
} & StateLayout

type Modify<T, R> = Omit<T, keyof R> & R

export type ResponsiveProps<Breakpoint extends string = string> = Modify<
	Props,
	{
		// Responsive config
		breakpoint?: Breakpoint
		breakpoints: Breakpoints<Breakpoint>
		cols: Record<Breakpoint, number>
		layouts: ResponsiveLayout<Breakpoint>
		width: number
		margin: Record<Breakpoint, [number, number]> | [number, number] | undefined
		containerPadding:
			| Record<Breakpoint, [number, number]>
			| [number, number]
			| undefined

		// Callbacks
		onBreakpointChange: (breakpoint: Breakpoint, cols: number) => void
		onLayoutChange: OnLayoutChangeCallback
		onWidthChange: (
			containerWidth: number,
			margin: [number, number],
			cols: number,
			containerPadding?: [number, number]
		) => void
	}
>

export const ResponsiveGridLayout = (properties: Partial<ResponsiveProps>) => {
	const {
		breakpoint,
		compactType,
		breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
		cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
		containerPadding = {},
		layouts = {},
		margin = [10, 10],
		width = 0,
		onBreakpointChange = noop,
		onLayoutChange = noop,
		onWidthChange = noop,
	} = properties

	const [prevProps, setPrevProps] = React.useState<{
		width: number
		breakpoints: Breakpoints<Breakpoint>
		cols: Record<Breakpoint, number>
	}>({ width, breakpoints, cols })

	const generateInitialState = (): State => {
		const breakpoint = getBreakpointFromWidth(breakpoints, width)
		const colNo = getColsFromBreakpoint(breakpoint, cols)
		const compactType = properties.compactType
		// Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
		// for this layout.
		const initialLayout = findOrGenerateResponsiveLayout(
			layouts,
			breakpoints,
			breakpoint,
			breakpoint,
			colNo,
			compactType,
			false
		)

		return {
			layout: initialLayout,
			layouts,
			breakpoint: breakpoint,
			cols: colNo,
		}
	}

	const [state, setState] = React.useState<State>(() => generateInitialState())
	const emittedBreakpointChangeOnce = React.useRef(breakpoint != null)
	React.useEffect(() => {
		if (!state || !deepEqual(state.layouts, layouts)) {
			setState(generateInitialState())
		}
	}, [JSON.stringify(layouts)])

	React.useEffect(() => {
		onWidthChangeFn()
	}, [width, breakpoint, JSON.stringify(breakpoints), JSON.stringify(cols)])
	// wrap layouts so we do not need to pass layouts to child
	const onLayoutChangeFn: (layout: Layout) => void = (layout: Layout) => {
		const newLayouts = {
			...layouts,
			[state.breakpoint]: layout,
		}

		setState({
			breakpoint: state.breakpoint,
			cols: state.cols,
			layout,
			layouts: newLayouts,
		})

		onLayoutChange({
			layout,
			layouts: newLayouts,
			breakpoint: state.breakpoint,
		})
	}

	// When the width changes work through breakpoints and reset state with the new width & breakpoint.
	// Width changes are necessary to figure out the widget widths.

	const onWidthChangeFn = () => {
		const newBreakpoint =
			breakpoint || getBreakpointFromWidth(breakpoints, width)

		const lastBreakpoint = state.breakpoint
		const newCols: number = getColsFromBreakpoint(newBreakpoint, cols)
		const newLayouts = { ...layouts }

		// console.log(newBreakpoint, lastBreakpoint, width)
		// Breakpoint change
		if (
			!emittedBreakpointChangeOnce.current ||
			lastBreakpoint !== newBreakpoint ||
			!deepEqual(prevProps.breakpoints, breakpoints) ||
			!deepEqual(prevProps.cols, cols)
		) {
			emittedBreakpointChangeOnce.current = true

			// Preserve the current layout if the current breakpoint is not present in the next layouts.
			if (!(lastBreakpoint in newLayouts)) {
				newLayouts[lastBreakpoint] = cloneLayout(state.layout)
			}

			const newBreakpointIsBiggerOrEqual =
				lastBreakpoint === newBreakpoint ||
				breakpoints[newBreakpoint] > breakpoints[lastBreakpoint]

			const isNewLayout = layouts[newBreakpoint] == null

			// Find or generate a new layout.
			let overlap =
				!!properties.allowOverlap &&
				(!isNewLayout || newBreakpointIsBiggerOrEqual) //  allow resize overlap only if we are going into a larger screen

			let layout = findOrGenerateResponsiveLayout(
				newLayouts,
				breakpoints,
				newBreakpoint,
				lastBreakpoint,
				newCols,
				compactType,
				overlap
			)

			// This adds missing items.
			layout = synchronizeLayoutWithChildren(
				layout,
				properties.children,
				newCols,
				compactType,
				overlap
			)

			// Store the new layout.
			newLayouts[newBreakpoint] = layout

			// Set state has to be before callback fns, so we can do change detection for props.layouts correctly
			setState({
				breakpoint: newBreakpoint,
				layout: layout,
				layouts: newLayouts,
				cols: newCols,
			})

			// callbacks
			onLayoutChange({
				layout,
				layouts: newLayouts,
				breakpoint: newBreakpoint,
			})
			onBreakpointChange(newBreakpoint, newCols)
		}
		setPrevProps({ breakpoints, cols, width })

		let modifiedMargin = getIndentationValue(margin, newBreakpoint)
		const containerPaddingModified = getIndentationValue(
			containerPadding,
			newBreakpoint
		)

		//call onWidthChange on every change of width, not only on breakpoint changes
		onWidthChange(
			width,
			modifiedMargin!, // TODO fix
			newCols,
			containerPaddingModified
		)
	}

	return (
		<GridLayout
			{...properties}
			margin={getIndentationValue(margin, state.breakpoint)}
			containerPadding={getIndentationValue(containerPadding, state.breakpoint)}
			onLayoutChange={onLayoutChangeFn}
			layout={state.layout}
			cols={state.cols}
		/>
	)
}
