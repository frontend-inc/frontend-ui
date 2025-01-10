'use client'

import React from 'react'
import { Stack, Section, Heading } from '../../components'
import { MailchimpSubscribe } from '../../components'
import { MailchimpSubscribeProps } from '../../components/addons/mailchimp/MailchimpSubscribe'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type AddonMailchimpSubscribeProps = SectionProps &
	HeadingProps &
	StackProps &
	MailchimpSubscribeProps

const AddonMailchimpSubscribe: React.FC<AddonMailchimpSubscribeProps> = (
	props
) => {
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
		isEditing,
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
			variant={variant}
		>
			<Stack direction={direction} spacing={10} className="items-center">
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						size={fontSize}
						textAlign={direction == 'row' ? 'left' : 'center'}
						isEditing={isEditing}
						handleChange={handleChange}
					/>
				</Stack>
				<Stack
					direction={direction}
					size="2/3"
					className="items-center h-full justify-center"
				>
					<MailchimpSubscribe {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default AddonMailchimpSubscribe
