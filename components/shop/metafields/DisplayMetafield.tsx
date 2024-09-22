import React from 'react'
import { Field, AccordionItem } from '../../../components'
import { DisplayFieldType } from '../../../types'

type DisplayMetafieldProps = {
  field: DisplayFieldType  
  resource: any 
  disablePadding?: boolean
}

const DisplayMetafield: React.FC<DisplayMetafieldProps> = (props) => {

  const { field, resource, disablePadding  } = props

  return (
    <AccordionItem
      disablePadding={disablePadding}
      primary={field.label}
      startIcon={ field.icon }
      secondary={
        <Field           
          disableLabel
          field={ field }
          resource={resource}
        />  
      }
    />
  )
}

export default DisplayMetafield