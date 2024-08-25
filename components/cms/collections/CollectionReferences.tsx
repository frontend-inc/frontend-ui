import React from 'react'
import { DataReferences } from '../../../components'
import { DataReferencesProps } from '../data/DataReferences'

const CollectionReferences: React.FC<DataReferencesProps> = (props) => {    
  const query = { current_user: true }
  return <DataReferences query={query} {...props} />
}

export default CollectionReferences