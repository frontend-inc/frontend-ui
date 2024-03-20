import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import { MenuLinkType } from '../../../types'
import FooterLinks from './FooterLinks'
import Logo from './Logo'
import moment from 'moment'
import { MailchimpSubscribe, KlaviyoSubscribe } from '../../../components'

type FooterProps = {  
  menuItems?: MenuLinkType[]
  socialUrls?: string[]
  handleClick: (path: string) => void	  
  enableEmail?: boolean
  emailProvider?: 'mailchimp' | 'klaviyo'
  mailchimpFormId?: string
  klaviyoListId?: string
  klaviyoApiKey?: string
}

const Footer: React.FC<FooterProps> = (props) => {
	const { 
    enableEmail=false, 
    emailProvider,
    klaviyoListId,
    klaviyoApiKey, 
    mailchimpFormId,
    handleClick, 
    menuItems, 
    socialUrls 
  } = props
  
  const { logo, name } = useContext(AppContext)

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Stack direction="column" spacing={2}>
            <Logo 
              src={logo} 
              width={180} 
              height={60} 
              handleClick={() => handleClick('/')}
            />     
            {(enableEmail && mailchimpFormId && emailProvider == 'mailchimp') && (
              <MailchimpSubscribe
                formId={ mailchimpFormId }
                buttonText='Subscribe'
              />
            )}   
            {(enableEmail && klaviyoListId && klaviyoApiKey && emailProvider == 'klaviyo') && (
              <KlaviyoSubscribe
                listId={ klaviyoListId }
                apiKey={ klaviyoApiKey }
                buttonText='Subscribe'
              />
            )}   

          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box sx={sx.grid}>
            { menuItems?.map((menuItem, i) => (          
              <FooterLinks  
                key={i}
                menuItem={ menuItem }
                handleClick={ handleClick }
              />            
            ))}
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Box
          sx={ sx.copyright }
        >
          <Typography
            sx={sx.link}					
            variant={'body2'}
            color="text.secondary"
          >
            &copy; copyright { moment().format('YYYY')} { name }
          </Typography>				
        </Box>
      </Container>
		</Stack>
	)
}

export default Footer

const sx = {
	root: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'background.default',
    py: 2
	},
	link: {
		cursor: 'pointer',
	},
  grid: {
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
    width: '100%',
    padding: 2,
  },
  copyright: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid',
    borderColor: 'divider',
    pt: 1
  }
}
