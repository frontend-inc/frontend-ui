'use client'

import React, { useEffect, useState } from 'react'
import ScriptContext from './ScriptContext'
import {
	GoogleAnalyticsScript,
	GoogleTagManagerScript,
	HotJarScript,
	RedditScript,
	VisualWebsiteOptimizerScript,
} from '../components/addons'
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook'
import { useFacebookPixel, useTikTok } from '../hooks/addons'
import { AnalyticsBrowser } from '@segment/analytics-next'

type ScriptProviderProps = {
	disableAnalytics?: boolean
	googleTagManagerId?: string
	googleAnalyticsId?: string
	gtmId?: string
	hotJarId?: string
	redditPixelId?: string
	segmentWriteKey?: string
	tikTokPixelId?: string
	facebookPixelId?: string
	klaviyoCompanyId?: string
	visualWebsiteOptimizerId?: string
	children: React.ReactNode
}

const ScriptProvider = (props: ScriptProviderProps) => {
	const {
		disableAnalytics = false,
		googleTagManagerId,
		googleAnalyticsId,
		gtmId,
		facebookPixelId,
		hotJarId,
		redditPixelId,
		segmentWriteKey,
		tikTokPixelId,
		visualWebsiteOptimizerId,
		children,
	} = props || {}

	const [segment, setSegment] = useState(null)

	useTikTok({ tikTokPixelId: !disableAnalytics && tikTokPixelId ? tikTokPixelId : '' })
	useFacebookPixel({ facebookPixelId: !disableAnalytics && facebookPixelId ? facebookPixelId : '' })

	useEffect(() => {
		if (!disableAnalytics && segmentWriteKey) {
			setSegment(
        //@ts-ignore
				AnalyticsBrowser.load({
					writeKey: segmentWriteKey,
				})
			)
		}
	}, [disableAnalytics, segmentWriteKey])

	const value = {
		segment,
		disableAnalytics,
		googleTagManagerId,
		googleAnalyticsId,
		redditPixelId,
		segmentWriteKey,
	}

	const wrapGTMProvider = (gtmId, children) => {
		return !gtmId ? (
			children
		) : (
			<GTMProvider state={{ id: gtmId }}>{children}</GTMProvider>
		)
	}

	return (
		<ScriptContext.Provider value={value}>
			{!disableAnalytics && (
				<>
					{googleTagManagerId && (
						<GoogleTagManagerScript id={googleTagManagerId} />
					)}
					{googleAnalyticsId && (
						<GoogleAnalyticsScript id={googleAnalyticsId} />
					)}
					{redditPixelId && <RedditScript id={redditPixelId} />}
					{hotJarId && <HotJarScript id={hotJarId} />}
					{visualWebsiteOptimizerId && (
						<VisualWebsiteOptimizerScript id={visualWebsiteOptimizerId} />
					)}
				</>
			)}			
			{wrapGTMProvider(gtmId, children)}
		</ScriptContext.Provider>
	)
}

export default ScriptProvider
