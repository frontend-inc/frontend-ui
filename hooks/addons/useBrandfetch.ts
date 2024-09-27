import React, { useState, useContext } from 'react'
import { useLoadingWrapper } from '..'
import { BrandfetchContext } from '../../context'

type TBrandfetchLogo = {
  brandId: string
  claimed: boolean
  domain: string
  icon: string 
  _score: number 
  qualityScore: number
}

const useBrandfetch = () => {	
  const { apiKey } = useContext(BrandfetchContext) as any
	const { loading, loadingWrapper } = useLoadingWrapper()

  const [logos, setLogos] = useState<TBrandfetchLogo[]>([])

	const searchLogos = async (keywords) => {
    setLogos([])
		let resp = await loadingWrapper(() => 
      fetch(`https://api.brandfetch.io/v2/search/${encodeURIComponent(keywords)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
    )
    const data = await resp?.json()
    setLogos(data)
		return data
	}


  const resizeLogo = (icon: string, options) => {
    const { height=128, width=128 } = options || {}
    const url = icon?.replace(/w\/\d+/, `w/${width}`).replace(/h\/\d+/, `h/${height}/type/logo`)
    return url
  }

	return {
		loading,
    logos,
    resizeLogo,
    setLogos,
		searchLogos,
	}
}

export default useBrandfetch
