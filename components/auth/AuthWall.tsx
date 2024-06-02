import React from 'react'
import Login from './login/Login'
import { AuthLayout, Heading } from '../../components'
import { 
  Box,
  Stack,
  Container 
} from '@mui/material'

const AuthWall: React.FC = () => {

  return(
    <Container maxWidth='sm'>
      <Box sx={ sx.root }>
        <Heading 
          description='Please sign in to continue.'
          textAlign='center'
        />     
        <AuthLayout>
          <Login />   
        </AuthLayout>                
      </Box>
    </Container>
  )
}

export default AuthWall

const sx = {
  root: {
    width: '100%',    
    height: 'calc(100vh - 120px)',
    gap: '40px',
    display: 'flex',
    flexDirection: "column", 
    justifyContent: 'center',
    alignItems: 'center',
  }
}