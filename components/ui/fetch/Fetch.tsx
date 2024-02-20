import React, { useEffect } from 'react'
import { useResourceContext } from 'frontend-js'

type FetchProps = {
	url: string
	handle: number | string
	children: any
}

const Fetch: React.FC<FetchProps> = (props) => {
	const { children, url, handle } = props

	const { loading, findOne } = useResourceContext({
		url,
	})

	useEffect(() => {
		if (url && handle) {
			findOne(handle)
		}
	}, [url, handle])

	return <>{children}</>
}

export default Fetch
