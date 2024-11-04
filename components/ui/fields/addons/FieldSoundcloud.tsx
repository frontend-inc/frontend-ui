'use client'

import React from 'react'
import { SoundcloudEmbed } from '../../..'

export type FieldSoundcloudProps = {
	value: string	
  height?: number 
  width?: number
	label?: string
}

const FieldSoundcloud: React.FC<FieldSoundcloudProps> = (props) => {
	const { value } = props || {}
	return (
    <div className="w-full justify-center items-center">
      <SoundcloudEmbed src={value}  />
    </div>
  )
}

export default FieldSoundcloud
