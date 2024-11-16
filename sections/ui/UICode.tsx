'use client'

import React from 'react'
import { Section } from '../../components'
import { Code } from '../../components'
import { CodeProps } from '../../components/ui/typography/Code'
import { SectionProps } from '../../types'

type UICodeProps = SectionProps & CodeProps

const UICode: React.FC<UICodeProps> = (props) => {
	const { 
    bgColor, 
    mode, 
    py, 
    px, 
    maxWidth='sm', 
    requireAuth, 
    ...rest 
  } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>        
      <Code {...rest} />
		</Section>
	)
}

export default UICode
