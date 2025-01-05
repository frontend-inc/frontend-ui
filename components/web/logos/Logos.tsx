'use client'

import React from 'react'
import { Empty } from '../../../components'
import { Marquee } from '../../../components'
import Image from 'next/image'

export type LogosProps = {
	logos: {
		image: string
		title: string
	}[]
	height?: number
	width?: number
}

const Logos: React.FC<LogosProps> = (props) => {
	const { logos = [], height = 48, width = 128 } = props

	return (
		<div className="flex flex-col w-full">
			<div className="relative flex flex-wrap w-full justify-center items-center gap-4 sm:flex-nowrap">
				<Marquee className="duration-3000">
					{logos.map((logo, i) => (
						<div
							key={i}
							className={
								'p-4 max-h-[50px] max-w-[140px] rounded-lg w-full flex items-center justify-center'
							}
						>
							<Image
								src={logo?.image }
								height={height}
								width={width}
								style={{
									objectFit: 'contain',
									height,
									width,
								}}
								layout="responsive"
								alt={logo?.title}
							/>
						</div>
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>
			{logos?.length === 0 && (
				<Empty title="No logos" description="Logos will appear here" />
			)}
		</div>
	)
}

export default Logos
