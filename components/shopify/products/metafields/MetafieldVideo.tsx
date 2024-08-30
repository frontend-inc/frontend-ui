import React, { useState, useEffect } from 'react'
import {
	MetafieldIdentifierType,
	getMetafieldReference,
} from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'

export type MetafieldVideoProps = {
	shopifyProduct: any
	metafield: MetafieldIdentifierType
	height?: number
	controls?: boolean
	autoPlay?: boolean
}

const MetafieldVideo: React.FC<MetafieldVideoProps> = (props) => {
	const {
		shopifyProduct,
		metafield,
		controls = false,
		autoPlay = false,
		height = 300,
	} = props

	const { loading, product, findProduct } = useProducts()

	const [mp4, setMp4] = useState<string | null>(null)
	const [ogg, setOgg] = useState<string | null>(null)

	useEffect(() => {
		if (shopifyProduct && metafield) {   
      const metafieldIdentifier = {
        namespace: metafield?.split('.')[0],
        key: metafield?.split('.')[1],
      }   
			findProduct(shopifyProduct?.handle, [metafieldIdentifier])
		}
	}, [shopifyProduct, metafield])

	useEffect(() => {
		if (product) {
			let videoRef = getMetafieldReference(product, metafield.key)
			let mp4 = videoRef?.sources.find((source) => source.format === 'mp4')
			let ogg = videoRef?.sources.find((source) => source.format === 'ogg')
			setMp4(mp4?.url)
			setOgg(ogg?.url)
		}
	}, [product])

	if (!mp4) return null
	return (
		<video
			height={`${height}px`}
			width={'100%'}
			controls={controls}
			autoPlay={autoPlay}
		>
			<source src={mp4} type="video/mp4" />
			<source src={ogg} type="video/ogg" />
			Your browser does not support the video tag.
		</video>
	)
}

export default MetafieldVideo
