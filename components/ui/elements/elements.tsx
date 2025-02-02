import React from 'react'
import { Typography } from "../typography";

const H1 = (props) => {
  const { text, ...rest } = props
  return <Typography {...rest} variant="h1">{ text }</Typography>
}

const H2 = (props) => {
  const { text, ...rest } = props
  return <Typography {...rest} variant="h2" >{ text }</Typography>
}

const H3 = (props) => {
  const { text, ...rest } = props
  return <Typography  {...rest} variant="h3">{ text }</Typography>
}

const H4 = (props) => {
  const { text, ...rest } = props
  return <Typography {...rest} variant="h4" >{ text }</Typography>
}

const H5 = (props) => {
  const { text, ...rest } = props
  return <Typography {...rest} variant="h5" >{ text }</Typography>
}

const H6 = (props) => {
  const { text, ...rest } = props
  return <Typography {...rest} variant="h6">{ text }</Typography>
}

const P = (props) => {
  const { text, ...rest } = props
  return <Typography {...rest} variant="body1">{ text }</Typography>
}

export { 
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
}
