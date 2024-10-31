import React from 'react'
import { useDebounce } from 'use-debounce'

interface UseDelayedLoadingProps {
	loading: boolean
	delay?: number
	callback?: () => void
}

function useDelayedLoading({
	loading,
	delay = 500,
}: UseDelayedLoadingProps): Record<any, boolean> {
	
  const [debouncedLoading] = useDebounce(loading, delay)

	return {
		loading: debouncedLoading,
	}
}

export default useDelayedLoading
