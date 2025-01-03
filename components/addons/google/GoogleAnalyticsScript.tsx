'use client'

import React, { useEffect, useState, useRef } from 'react'
import ReactGA from 'react-ga4'
import { usePathname } from 'next/navigation'

type GoogleAnalyticsProps = {
	id?: string
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = (props) => {
	const { id } = props || {}

	const mounted = useRef(false)
	const pathname = usePathname()

	useEffect(() => {
		if (id && !mounted.current) {
			mounted.current = true
			ReactGA.initialize([
				{
					trackingId: id,
				},
			])
		}
	}, [id])

	useEffect(() => {
		if (id) {
			ReactGA.send({
				hitType: 'pageview',
				page: pathname,
			})
		}
	}, [pathname])

	return null
}

export default GoogleAnalytics
