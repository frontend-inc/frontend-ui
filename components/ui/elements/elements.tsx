'use client'
import React from 'react'
import { Image, Skeleton } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

interface StableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function StableImage({ src, ...rest }: StableImageProps) {  
  if(!src){
    <Skeleton className='w-full h-full' />
  }
  return <Image src={ src } { ...rest }/>;
}

const H1 = (props) => {
  const { text, children, ...rest } = props
  return <h1 {...rest}>{ text }{children }</h1>
}

const H2 = (props) => {
  const { text, children,...rest } = props
  return <h2 {...rest}>{ text }{children }</h2>
}

const H3 = (props) => {
  const { text, children,...rest } = props
  return <h3 {...rest}>{ text }{children }</h3>
}

const H4 = (props) => {
  const { text, children,...rest } = props
  return <h4 {...rest} >{ text }{children }</h4>
}

const H5 = (props) => {
  const { text, children,...rest } = props
  return <h5 {...rest}>{ text }{children }</h5>
}

const H6 = (props) => {
  const { text, children,...rest } = props
  return <h6 {...rest}>{ text }{children }</h6>
}

const P = (props) => {
  const { text, children,...rest } = props
  return <p {...rest}>{ text }{children }</p>
}

const UL = (props) => {
  const { text, children,...rest } = props
  return <ul {...rest}>{ text }{children }</ul>
}

const LI = (props) => {
  const { text, children,...rest } = props
  return <li {...rest}>{ text }{children }</li>
}

const OL = (props) => {
  const { text, children,...rest } = props
  return <ol {...rest}>{ text }{children }</ol>
}

export { 
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  UL,
  LI,
  OL,
  StableImage
}
