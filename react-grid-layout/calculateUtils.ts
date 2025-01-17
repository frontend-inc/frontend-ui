import type { Position } from './utils'

export type RowHeight = number | ((width: number) => number)
export type PositionParams = {
	margin: [number, number]
	containerPadding: [number, number]
	containerWidth: number
	cols: number
	rowHeight: RowHeight
	maxRows: number
}

// Helper for generating column width
export function calcGridColWidth(positionParams: PositionParams): number {
	const { margin, containerPadding, containerWidth, cols } = positionParams
	return (
		(containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols
	)
}

// This can either be called:
// calcGridItemWHPx(w, colWidth, margin[0])
// or
// calcGridItemWHPx(h, rowHeight, margin[1])
export function calcGridItemWHPx(
	gridUnits: number,
	colOrRowSize: number,
	marginPx: number
): number {
	// 0 * Infinity === NaN, which causes problems with resize contraints
	if (!Number.isFinite(gridUnits)) return gridUnits
	return Math.round(
		colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx
	)
}

export const resolveRowHeight = (rowHeight: RowHeight, width: number) =>
	typeof rowHeight === 'number' ? rowHeight : rowHeight(width)

/**
 * Return position on the page given an x, y, w, h.
 * left, top, width, height are all in pixels.
 */
export function calcGridItemPosition(
	positionParams: PositionParams,
	x: number,
	y: number,
	z: number,
	w: number,
	h: number,
	state?: {
		resizing?: { width: number; height: number }
		dragging?: { top: number; left: number }
	}
): Position {
	const { margin, containerPadding, rowHeight } = positionParams
	const colWidth = calcGridColWidth(positionParams)
	const out: any = {}

	const rowHeightNumber = resolveRowHeight(rowHeight, colWidth)

	// If resizing, use the exact width and height as returned from resizing callbacks.
	if (state && state.resizing) {
		out.width = Math.round(state.resizing.width)
		out.height = Math.round(state.resizing.height)
	}
	// Otherwise, calculate from grid units.
	else {
		out.width = calcGridItemWHPx(w, colWidth, margin[0])
		out.height = calcGridItemWHPx(h, rowHeightNumber, margin[1])
	}

	// If dragging, use the exact width and height as returned from dragging callbacks.
	if (state && state.dragging) {
		out.top = Math.round(state.dragging.top)
		out.left = Math.round(state.dragging.left)
	}
	// Otherwise, calculate from grid units.
	else {
		out.top = Math.round(
			(rowHeightNumber + margin[1]) * y + containerPadding[1]
		)
		out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0])
	}

	out.z = z
	return out
}

/**
 * Translate x and y coordinates from pixels to grid units.
 */
export function calcXY(
	positionParams: PositionParams,
	top: number,
	left: number,
	w: number,
	h: number
): { x: number; y: number } {
	const { margin, cols, rowHeight, maxRows } = positionParams
	const colWidth = calcGridColWidth(positionParams)
	const rowHeightNumber = resolveRowHeight(rowHeight, colWidth)

	// left = colWidth * x + margin * (x + 1)
	// l = cx + m(x+1)
	// l = cx + mx + m
	// l - m = cx + mx
	// l - m = x(c + m)
	// (l - m) / (c + m) = x
	// x = (left - margin) / (coldWidth + margin)
	let x = Math.round((left - margin[0]) / (colWidth + margin[0]))
	let y = Math.round((top - margin[1]) / (rowHeightNumber + margin[1]))

	// Capping
	x = clamp(x, 0, cols - w)
	y = clamp(y, 0, maxRows - h)
	return { x, y }
}

/**
 * Given a height and width in pixel values, calculate grid units.
 */
export function calcWH(
	positionParams: PositionParams,
	width: number,
	height: number,
	x: number,
	y: number
): { w: number; h: number } {
	const { margin, maxRows, cols, rowHeight } = positionParams
	const colWidth = calcGridColWidth(positionParams)
	const rowHeightNumber = resolveRowHeight(rowHeight, colWidth)

	// width = colWidth * w - (margin * (w - 1))
	// ...
	// w = (width + margin) / (colWidth + margin)
	let w = Math.round((width + margin[0]) / (colWidth + margin[0]))
	let h = Math.round((height + margin[1]) / (rowHeightNumber + margin[1]))

	// Capping
	w = clamp(w, 0, cols - x)
	h = clamp(h, 0, maxRows - y)
	return { w, h }
}

// Similar to _.clamp
export function clamp(
	num: number,
	lowerBound: number,
	upperBound: number
): number {
	return Math.max(Math.min(num, upperBound), lowerBound)
}
