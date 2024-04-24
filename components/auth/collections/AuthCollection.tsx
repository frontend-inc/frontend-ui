import React from 'react'
import { AuthRequired, Collection } from '../..'
import { CollectionProps } from '../../cms/collections/Collection'

const AuthCollection: React.FC<CollectionProps> = (props) => {
  return (
    <AuthRequired>
      <Collection {...props} />
    </AuthRequired>
  )
}

export default AuthCollection
