'use client'

import React from 'react'
import { SocialFieldType } from '../../../types'
import { SocialButton } from '../..'
import { get } from 'lodash'

type SocialFieldProps = {
	field: SocialFieldType
	resource: any
}

const SocialField: React.FC<SocialFieldProps> = (props) => {
	const { field, resource } = props || {}
	const { provider, name } = field || {}
	let url = get(resource, name)
	return <SocialButton provider={provider} url={url} />
}

export default SocialField
