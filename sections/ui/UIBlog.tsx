'use client'

import React from 'react'
import { Section } from '../../components'
import { Blog } from '../../components'
import { BlogProps } from '../../components/ui/typography/Blog'
import { SectionProps } from '../../types'

type UIBlogProps = SectionProps & BlogProps

const UIBlog: React.FC<UIBlogProps> = (props) => {
	const { 
    bgColor, 
    mode, 
    py='sm', 
    px, 
    maxWidth, 
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
      <Blog {...rest} />
		</Section>
	)
}

export default UIBlog
