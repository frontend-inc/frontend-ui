import React from 'react'
import { DataReferencesModal } from '../..'
import { DataReferencesProps } from '../../cms/data/DataAddToListModal'

const CollectionReferences: React.FC<DataReferencesProps> = (props) => {    
  const query = { current_user: true }
  return <DataReferencesModal query={query} {...props} />
}

export default CollectionReferences