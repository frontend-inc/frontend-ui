import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { useTheme } from '@mui/material'
import { useAuth } from 'frontend-js'

export type CalendlyProps = {
	calendlyUrl: string
	enableTheme?: boolean
}

// https://www.npmjs.com/package/react-calendly
const Calendly: React.FC<CalendlyProps> = (props) => {
	const { calendlyUrl } = props
	const { currentUser } = useAuth()
	const theme = useTheme()

	const [prefill, setPrefill] = useState({})
	const [pageSettings, setPageSettings] = useState({})

	useEffect(() => {
		if (theme) {
			setPageSettings({
				backgroundColor: theme.palette.background.default,
				hideEventTypeDetails: false,
				hideLandingPageDetails: false,
				primaryColor: theme.palette.primary.main,
				textColor: theme.palette.text.primary,
			})
		}
	}, [theme])

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
		<InlineWidget
			styles={styles.root}
			url={calendlyUrl}
			pageSettings={pageSettings}
			prefill={prefill}
		/>
	)
}

export default Calendly

const styles = {
	root: {
		height: '700px',
		overflow: 'none',
	},
}
