import React, { useEffect, useState } from 'react'
import ScriptContext from './ScriptContext'
import {
  GorgiasChat,
  GoogleAnalyticsScript,
  GoogleTagManagerScript,
  HotJarScript,
  KlaviyoScript,
  OkendoScript,  
  RedditScript,
  VisualWebsiteOptimizerScript  
} from '../../components/addons'
import { 
  useFacebookPixel,
  useTikTok 
} from '../../hooks/addons'
import Script from 'next/script'
import { AnalyticsBrowser } from '@segment/analytics-next'

type ScriptProviderProps = {
  disableAnalytics?: boolean
  disableChat?: boolean
	okendoSubscriberId?: string
  googleTagManagerId?: string
  googleAnalyticsId?: string
  gorgiasChatId?: string
  gorgiasContactFormSrc?: string
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
    disableAnalytics=false,    
    disableChat=false,
		okendoSubscriberId,
    googleTagManagerId,
    googleAnalyticsId,
    gorgiasChatId,    
    gorgiasContactFormSrc,
    facebookPixelId,
    hotJarId,
    redditPixelId,
    segmentWriteKey,
    tikTokPixelId,
    visualWebsiteOptimizerId,
    klaviyoCompanyId,
		children,
	} = props || {}

  const [segment, setSegment] = useState(null)  

  useTikTok({ tikTokPixelId: !disableAnalytics && tikTokPixelId })
  useFacebookPixel({ facebookPixelId: !disableAnalytics && facebookPixelId })

  useEffect(() => {
    if(!disableAnalytics && segmentWriteKey){
      setSegment(AnalyticsBrowser.load({ 
        writeKey: segmentWriteKey 
      }))
    }
  }, [disableAnalytics, segmentWriteKey])

	const value = {
    segment,
    disableAnalytics,
    okendoSubscriberId,
    googleTagManagerId,
    googleAnalyticsId,
    gorgiasChatId,
    redditPixelId,
    segmentWriteKey    
	}

	return(
    <ScriptContext.Provider value={value}>
      { !disableAnalytics && (
        <>
          { googleTagManagerId && (
            <GoogleTagManagerScript id={ googleTagManagerId } />
          )}
          { googleAnalyticsId && (
            <GoogleAnalyticsScript id={googleAnalyticsId} />         
          )}
          { redditPixelId && (
            <RedditScript id={ redditPixelId } />
          )}
          { hotJarId && (
            <HotJarScript id={ hotJarId } />
          )}
          { visualWebsiteOptimizerId && (
            <VisualWebsiteOptimizerScript id={ visualWebsiteOptimizerId } /> 
          )}
        </>
      )}
      { !disableChat && (
        <>
          { gorgiasChatId && (
            <GorgiasChat id={ gorgiasChatId } />
          )}
        </>
      )}
      { klaviyoCompanyId && (
        <KlaviyoScript id={ klaviyoCompanyId } /> 
      )}
      { gorgiasContactFormSrc && (
       <Script strategy="beforeInteractive" src={ gorgiasContactFormSrc } /> 
      )}
      { okendoSubscriberId && (
        <OkendoScript subscriberId={ okendoSubscriberId } />        
      )}
      {children}
    </ScriptContext.Provider>
  )
}

export default ScriptProvider
