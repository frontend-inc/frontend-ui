import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { Button, Box, useTheme } from '@mui/material'
import { useAuth } from 'frontend-js'
import { MediaModal } from '../../../components'

export type CalendlyProps = {
	calendlyUrl: string
	enableTheme?: boolean
  buttonText?: string
}

// https://www.npmjs.com/package/react-calendly
const Calendly: React.FC<CalendlyProps> = (props) => {
	const { calendlyUrl, buttonText="Schedule time with me" } = props
	const { currentUser } = useAuth()
	const theme = useTheme()

  const [open, setOpen] = useState(false)

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
    <Box sx={ sx.root }>
      <Button 
        size="large"
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
      >
        { buttonText }
      </Button>
      <MediaModal 
        open={ open }
        handleClose={() => setOpen(false)}
      >
        <Box sx={ sx.calendly }>
          <InlineWidget
            styles={styles.root}
            url={calendlyUrl}
            pageSettings={pageSettings}
            prefill={prefill}        
            data-resize="true"
          />
        </Box>
      </MediaModal>
    </Box>
	)
}

export default Calendly

const sx = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendly: {
    width: {
      xs: '100%',
      sm: 620,
      md: 960,
    },
    height: '100%',
  },
}

const styles = {
	root: {
    width: '100%',
		overflow: 'none',
    height: '1200px',    
	},  
}
