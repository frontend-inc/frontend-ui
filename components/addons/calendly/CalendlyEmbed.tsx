'use client'

import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { useAuth } from 'frontend-js'

export type CalendlyEmbedProps = {
	calendlyUrl: string
	enableTheme?: boolean
	buttonText?: string
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = (props) => {
	const { calendlyUrl } = props
	const { currentUser } = useAuth()

	const [prefill, setPrefill] = useState({})

	useEffect(() => {
		if (currentUser?.email) {
			setPrefill({
				email: currentUser.email,
				firstName: currentUser.first_name,
				lastName: currentUser.last_name,
				name: currentUser.name,
			})
		}
	}, [currentUser?.email])

	if (!calendlyUrl) return null
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full sm:w-[640px] md:w-[768px]">
				<InlineWidget
					styles={{
						width: '100%',
						overflow: 'none',
						height: '1000px',
					}}
					url={calendlyUrl}
					prefill={prefill}
					data-resize="true"
				/>
			</div>
		</div>
	)
}

export default CalendlyEmbed
