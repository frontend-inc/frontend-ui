import { useState, useEffect } from 'react'

// Helper hook designed to set loaded when a
// supplied with one ore more loading props

type UseLoadedProps = {
	loading?: boolean
}

const useLoaded = (props: UseLoadedProps) => {
	const { loading = false } = props
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		if (loading) {
			setLoaded(false)
		} else {
			setLoaded(true)
		}
	}, [loading])

	return {
		loaded,
	}
}

export default useLoaded
