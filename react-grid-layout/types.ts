import { ReactElement, RefObject } from 'react'

export type ResizeHandleAxis = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'
export type ResizeHandle =
	| ReactElement<any>
	| ((
			resizeHandleAxis: ResizeHandleAxis,
			ref: RefObject<HTMLElement>
	  ) => ReactElement<any>)
