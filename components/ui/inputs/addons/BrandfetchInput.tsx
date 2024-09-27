import React, { useEffect, useState } from 'react'
import { Link, Button, Stack, Box, Typography, Collapse } from '@mui/material'
import { Label, Image, InputLabel, Drawer, BrandfetchAutosuggest, TouchableOpacity } from '../../..'
import { useBrandfetch } from '../../../../hooks'

type BrandfetchInputProps = {
  label?: string
  name: string
  value: string
  direction?: 'row' | 'column'
  handleChange: (e: any) => void
}

const BrandfetchInput: React.FC<BrandfetchInputProps> = (props) => {

  const {
    label='Logo',
    name,
    value,
    direction,
    handleChange 
  } = props || {}

  const {     
    brand,
    fetchBrand,
    resizeLogo
  } = useBrandfetch()

  const [open, setOpen] = useState(false)

  const handleLogoClick = (format) => {
    console.log('format', format)
    const url = format.src 
    handleChange({ target: { name, value: url } })
    setOpen(false)
  }    

  const handleBrandChange = (ev) => {    
    const { value } = ev.target    
    fetchBrand(value)
  }

  const handleDelete = () => {
    handleChange({ target: { name, value: '' } })
  }

  return (
    <>    
      <Stack direction="row" spacing={0} alignItems='flex-start'>
      <InputLabel label={ label } />
      <Stack direction="column" spacing={1}>
        <Collapse in={value}>        
          <Image 
            src={ resizeLogo(value, { width: 256, height: 256 }) }
            height={ 128 }
            width={ 128 }
            alt="logo"
            objectFit='contain'
            enableDelete
            handleDelete={ handleDelete }
          />      
        </Collapse>      
        <Box>
        <Button 
          onClick={() => setOpen(true)}
          color="secondary"
          variant="contained"
        >
          Browse
        </Button>      
        </Box>
      </Stack>
    </Stack>
    <Drawer 
      open={ open }
      handleClose={() => setOpen(false)}
    >
      <Stack direction="column" spacing={1}>
        <BrandfetchAutosuggest                     
          handleChange={ handleBrandChange }
        />                
        <Typography variant="caption">
          Powered by <Link href="https://www.brandfetch.com" target="_blank">
            Brandfetch.com
          </Link>
        </Typography>
        <Box sx={ sx.grid }>
        { brand?.logos?.map((logo) => (
          <>
            { logo?.formats?.filter(f => f.format != 'svg').map((format) => (              
              <Stack direction="column" spacing={1} sx={ sx.card }>
                <TouchableOpacity handleClick={() => handleLogoClick(format)}>
                <Box sx={ sx.logo }>
                  <Image 
                    src={ format?.src }                
                    height={128}                
                    width={128}
                    alt={ logo?.domain }  
                    objectFit='contain'              
                  />                
                </Box>                
                </TouchableOpacity>
                <Box><Label label={ format.format } /></Box>
              </Stack>
            ))}            
          </>
        ))}
      </Box>
      </Stack>
    </Drawer>
    </>
  )
}

export default BrandfetchInput

const sx = {
  grid: {    
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))',
    gap: 1
  },
  logo: {
    position: 'relative',
    borderRadius: 1,
    overflow: 'hidden',
    height: 128,
    width: 128,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  card: {
    bgcolor: 'background.paper',
    p: 1,
    borderRadius: 1,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 2
    }
  }
  
}