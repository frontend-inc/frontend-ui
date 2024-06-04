import React from "react"
import { CardField } from "../../../../components"
import { DisplayFieldType } from "../../../../types"
import { Stack } from "@mui/material"

type CardFieldsProps = {
  color?: string
  fields: DisplayFieldType[]
  resource: any
}

const CardFields: React.FC<CardFieldsProps> = (props) => {

  const { fields, resource, color } = props || {}

  return(
    <Stack sx={ sx.root } direction="column" spacing={0.5} alignItems='flex-start'>
      { fields?.map((field, index) => (
        <CardField 
          key={index}
          color={color}
          field={field}
          resource={resource}
        />
      ))}     
  </Stack>
  )
}

export default CardFields

const sx = {
  root: {
    width: '100%'
  }
}