import React from 'react'
import { DataReferencesModal } from '../..'
import { DataReferencesProps } from '../data/DataReferencesModal'

const CollectionReferences: React.FC<DataReferencesProps> = (props) => {    
  const query = { current_user: true }
  return <DataReferencesModal query={query} {...props} />
}

export default CollectionReferences