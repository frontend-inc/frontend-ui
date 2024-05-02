import React from 'react'
import { AuthRequired, ForeignCollection } from '../../../components'
import { ForeignCollectionProps } from '../../cms/collections/ForeignCollection'

const AuthForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
  return (
    <AuthRequired>
      <ForeignCollection {...props} />
    </AuthRequired>
  )
}

export default AuthForeignCollection
