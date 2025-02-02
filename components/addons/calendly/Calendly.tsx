'use client'

import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { Button } from '@nextui-org/react'
import { useAuth } from 'frontend-js'
import { MediaModal } from '../../../components'

export type CalendlyProps = {
	calendlyUrl: string
	buttonText?: string
}

const Calendly: React.FC<CalendlyProps> = (props) => {
	const { calendlyUrl, buttonText = 'Schedule time with me' } = props
	const { currentUser } = useAuth()
	const [open, setOpen] = useState(false)

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
			<Button
				size="lg"
				variant="solid"
				color="primary"
				onPress={() => setOpen(true)}
			>
				{buttonText}
			</Button>
			<MediaModal open={open} handleClose={() => setOpen(false)}>
				<div className="w-full sm:w-[620px] md:w-[960px] h-full">
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
			</MediaModal>
		</div>
	)
}

export default Calendly
