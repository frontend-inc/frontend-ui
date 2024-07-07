import React from 'react'
import { ResourceForm } from '../../../components'
import { FormFieldType } from '../../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'

export type HeroContainerProps = {
  url: string
  fields: FormFieldType[]
  children: React.ReactNode
  resource: any
}

const HeroContainer: React.FC<HeroContainerProps> = (props) => {

  const { 
    url,
    fields,
    resource,
    children,    
  } = props || {}

  return(
    <QueryProvider url={url}>
      <ResourceProvider 
        url={url}
        name="document"
        resource={resource}
      >
        { children }
        <ResourceForm 
          fields={fields}          
        />
      </ResourceProvider>
    </QueryProvider>
  )
}

export default HeroContainer