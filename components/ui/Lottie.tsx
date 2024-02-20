import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactLottiePlayer from 'react-lottie-player'

type LottieProps = {
	src: string
	loop?: boolean
}

const Lottie: React.FC<LottieProps> = (props) => {
	const { src, loop = true } = props

	const [data, setData] = useState()
	const [loading, setLoading] = useState(true)

	const fetchLottie = async () => {
		setLoading(true)
		let resp = await axios.get(src)
		setData(resp.data)
		setLoading(false)
	}

	useEffect(() => {
		if (src) {
			fetchLottie()
		}
	}, [src])

	if (loading) return null
	return (
		<ReactLottiePlayer
			play
			loop={loop}
			animationData={data}
			style={{
				width: '100%',
				height: 'auto',
			}}
		/>
	)
}

export default Lottie
