'use client'

import React from 'react'
import { Section } from '../../components'
import { Text, Heading } from '../../components'
import { TextProps } from '../../components/ui/typography/Text'
import { SectionProps, HeadingProps } from '../../types'

type UITextProps = SectionProps & HeadingProps & TextProps

const UIText: React.FC<UITextProps> = (props) => {
	const { 
    label,
		title,
		subtitle,
		textAlign='center',
    fontSize='lg',
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
      <div className="flex flex-col space-y-4">
        <Heading 
          label={label} 
          title={title} 
          subtitle={subtitle} 
          textAlign={textAlign} 
          size={fontSize}
        />
        <Text {...rest} />
      </div>
		</Section>
	)
}

export default UIText
