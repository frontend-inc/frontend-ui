import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import { MenuLinkType } from '../../../types'
import FooterLinks from './FooterLinks'
import { SocialLink } from '../..'
import Logo from './Logo'
import Image from 'next/image'
import moment from 'moment'

type FooterProps = {  
  menuItems?: MenuLinkType[]
  handleClick: (path: string) => void	  
  facebook?: string
  instagram?: string
  linkedin?: string
  twitter?: string
  youtube?: string  
  tiktok?: string
}

const Footer: React.FC<FooterProps> = (props) => {
	const { 
    handleClick, 
    menuItems, 
    facebook,
    instagram,
    linkedin,
    twitter,
    youtube,
    tiktok      
  } = props
  
  const { logo, name } = useContext(AppContext)

	return (
		<Stack sx={sx.root} spacing={1} direction="column">        
        <Grid container spacing={0}>
          <Grid xs={12} sm={3}>
          <Box sx={ sx.logoContainer }>
            <Box sx={ sx.logo }>
              <Image  
                src={logo} 
                width={180} 
                height={60} 
                alt={'logo'}
                layout="responsive"
              />    
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={9}>
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
        <Box sx={ sx.socialUrls }>          
            { facebook && <SocialLink provider="facebook" url={ facebook } /> }
            { instagram && <SocialLink provider="instagram" url={ instagram } /> }
            { linkedin && <SocialLink provider="linkedin" url={ linkedin } />  }
            { twitter && <SocialLink provider="twitter" url={ twitter } />  }
            { youtube && <SocialLink provider="youtube" url={ youtube } />  }              
            { tiktok && <SocialLink provider="tiktok" url={ tiktok } />  }          
        </Box>
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
	},
  logo: {   
    height: 120,
    width: 120
  },
  logoContainer: {
    px: 4,
    py: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',    
  },	
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, 1fr)',      
      md: 'repeat(4, 1fr)',
    },
    width: '100%',
  },
  copyright: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 2
  },
  socialUrls: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    borderTop: '1px solid',
    borderColor: 'divider',
    py: 1
  },
}
