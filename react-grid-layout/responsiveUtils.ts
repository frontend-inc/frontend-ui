import { cloneLayout, compact, correctBounds } from './utils'

import type { CompactType, Layout } from './utils'

export type Breakpoint = string
export type DefaultBreakpoints = 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

// + indicates read-only
export type ResponsiveLayout<T extends Breakpoint> = Record<T, Layout>
export type Breakpoints<T extends Breakpoint> = Record<T, number>

export type OnLayoutChangeCallback = (
	propertis: {
		layout: Layout
		breakpoint: Breakpoint
		layouts: Record<Breakpoint, Layout>
	} // TODO should this be optional?
) => void

/**
 * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
 *
 * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
 * @param  {Number} width Screen width.
 */
export function getBreakpointFromWidth(
	breakpoints: Breakpoints<Breakpoint>,
	width: number
): Breakpoint {
	const sorted = sortBreakpoints(breakpoints)
	let matching = sorted[0]
	for (let i = 1, len = sorted.length; i < len; i++) {
		const breakpointName = sorted[i]
		if (width > breakpoints[breakpointName]) matching = breakpointName
	}
	return matching
}

/**
 * Given a breakpoint, get the # of cols set for it.
 */
export function getColsFromBreakpoint(
	breakpoint: Breakpoint,
	cols: Breakpoints<Breakpoint>
): number {
	if (!cols[breakpoint]) {
		throw new Error(
			'ResponsiveGridLayout: `cols` entry for breakpoint ' +
				breakpoint +
				' is missing!'
		)
	}
	return cols[breakpoint]
}

/**
 * Given existing layouts and a new breakpoint, find or generate a new layout.
 *
 * This finds the layout above the new one and generates from it, if it exists.
 */
export function findOrGenerateResponsiveLayout(
	layouts: ResponsiveLayout<Breakpoint>,
	breakpoints: Breakpoints<Breakpoint>,
	breakpoint: Breakpoint,
	lastBreakpoint: Breakpoint,
	cols: number,
	compactType: CompactType,
	overlap: boolean
): Layout {
	// If it already exists, just return it.
	if (layouts[breakpoint]) {
		return cloneLayout(layouts[breakpoint])
	}
	// Find or generate the next layout
	let layout = layouts[lastBreakpoint]
	const breakpointsSorted = sortBreakpoints(breakpoints)

	// Above?
	for (
		let i = breakpointsSorted.indexOf(breakpoint);
		i < breakpointsSorted.length;
		i++
	) {
		const b = breakpointsSorted[i]
		if (layouts[b]) {
			layout = layouts[b]
			break
		}
	}
	if (!layout) {
		// below?
		for (let i = breakpointsSorted.indexOf(breakpoint) - 1; i >= 0; i--) {
			const b = breakpointsSorted[i]
			if (layouts[b]) {
				layout = layouts[b]
				break
			}
		}
	}

	layout = cloneLayout(layout || []) // clone layout so we don't modify existing items
	return overlap
		? layout
		: compact(correctBounds(layout, { cols: cols }), compactType, cols)
}

/**
 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
 * e.g. ['xxs', 'xs', 'sm', ...]
 *
 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
 * @return {Array}              Sorted breakpoints.
 */
export function sortBreakpoints(
	breakpoints: Breakpoints<Breakpoint>
): Array<Breakpoint> {
	const keys: Array<string> = Object.keys(breakpoints)
	return keys.sort(function (a, b) {
		return breakpoints[a] - breakpoints[b]
	})
}
