import React, { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'

type WPState = {
	width: number
}

type ComposedProps<Config> = {
	measureBeforeMount?: boolean
	className?: string
	style?: Object
	width?: number
} & Config

const layoutClassName = 'react-grid-layout'

/*
 * A simple HOC that provides facility for listening to container resizes.
 */
export const WidthProvider = <Config,>(
	ComposedComponent: React.ComponentType<Config>
) => {
	return (props: ComposedProps<Config>) => {
		const elementRef = useRef<HTMLDivElement>(null)
		const mounted = useRef(false)
		const [state, setState] = useState<WPState>({
			width: props.width ?? 1280,
		})

		const { measureBeforeMount = false } = props

		useEffect(() => {
			if (mounted.current) {
				return
			}
			mounted.current = true

			window.addEventListener('resize', onWindowResize)
			// Call to properly set the breakpoint and resize the elements.
			// Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
			// appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.
			onWindowResize()
			return () => {
				mounted.current = false
				window.removeEventListener('resize', onWindowResize)
			}
		}, [])

		const onWindowResize = () => {
			if (!mounted.current) return
			const node = elementRef.current // Flow casts this to Text | Element
			// fix: grid position error when node or parentNode display is none by window resize
			// #924 #1084
			if (node instanceof HTMLElement && node.offsetWidth) {
				setState({ width: node.offsetWidth })
			}
		}

		if (measureBeforeMount && !mounted.current) {
			return (
				<div
					className={clsx(props.className, layoutClassName)}
					style={props.style}
					ref={elementRef}
				/>
			)
		}

		return <ComposedComponent {...props} innerRef={elementRef} {...state} />
	}
}
