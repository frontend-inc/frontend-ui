'use client'

import React from 'react'
import { Stack, Section, Heading } from '../../components'
import { KlaviyoSubscribe } from '../../components'
import { KlaviyoSubscribeProps } from '../../components/addons/klaviyo/KlaviyoSubscribe'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type AddonKlaviyoSubscribeProps = SectionProps &
  StackProps & 
	HeadingProps &
	KlaviyoSubscribeProps

const AddonKlaviyoSubscribe: React.FC<AddonKlaviyoSubscribeProps> = (props) => {
	const {
		direction = 'row',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		variant,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'lg',
		requireAuth,
		editable,
		handleChange,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack direction={direction} spacing={10} className="items-center">
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						size={fontSize}
						textAlign={direction == 'row' ? 'left' : 'center'}
						editable={editable}
						handleChange={handleChange}
					/>
				</Stack>
				<Stack
					direction={direction}
					size="2/3"
					className="items-center h-full justify-center"
				>
			    <KlaviyoSubscribe {...rest} />
        </Stack>
      </Stack>
		</Section>
	)
}

export default AddonKlaviyoSubscribe
