import React from 'react'
import { AuthButton, Placeholder } from '../../components'

const AuthRequired: React.FC = () => {
  return(
    <Placeholder 
      icon='User'
      title="Please sign in"
      description="You need to sign in to view this content"
      actions={
        <AuthButton />
      }
    />
  )
}

export default AuthRequired