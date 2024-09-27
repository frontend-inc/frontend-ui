import React, { useEffect, useState } from 'react'
import { Link, Button, Stack, Box, Typography, Collapse } from '@mui/material'
import { IconLoading, Image, SearchInput, InputLabel, Drawer, TouchableOpacity } from '../../..'
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
    loading,
    logos,
    searchLogos,
    resizeLogo
  } = useBrandfetch()

  const [open, setOpen] = useState(false)
  const [keywords, setKeywords] = useState('')

  const handleClick = (logo) => {
    const url = resizeLogo(logo?.icon, { width: 128, height: 128 })
    handleChange({ target: { name, value: url } })
    setOpen(false)
  }    

  const handleKeywordChange = (e) => setKeywords(e.target.value)

  const handleSearch = async () => {
    await searchLogos(keywords)
  }

  const handleDelete = () => {
    handleChange({ target: { name, value: '' } })
  }

  console.log('logos', logos)

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
            enableGradient 
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
        <SearchInput 
          value={ keywords }
          handleChange={ handleKeywordChange }
          handleSearch={ handleSearch }
        />      
        <Button 
          color="secondary"
          variant="contained"
          onClick={ handleSearch }          
        >
          { !loading ? 'Search' : <IconLoading /> } 
        </Button>
        <Typography variant="caption">
          Powered by <Link href="https://www.brandfetch.com" target="_blank">
            Brandfetch.com
          </Link>
        </Typography>
        <Box sx={ sx.grid }>
        { Array.isArray(logos) && 
          logos?.map((logo) => (
            <TouchableOpacity key={logo?.brandId} handleClick={() => handleClick(logo) }>
              <Box sx={ sx.logo }>            
                <Image 
                  src={ resizeLogo(logo?.icon, { width: 128, height: 128 }) }
                  height={ 64 }
                  width={ 64 }
                  alt="logo"                
                />            
            </Box>
          </TouchableOpacity>          
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))',
    gap: 1
  },
  logo: {
    borderRadius: 1,
    overflow: 'hidden',
    height: 64,
    width: 64,
    '&:hover': {
      border: '2px solid',
      borderColor: 'primary.main',
    }
  },
  
}