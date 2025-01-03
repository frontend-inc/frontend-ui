'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { SubscriptionPlans } from '../../components'
import { SubscriptionPlansProps } from '../../components/web/subscriptions/SubscriptionPlans'
import { SectionProps, HeadingProps } from '../../types'

type UISubscriptionPlansProps = Omit<SectionProps, "variant"> & HeadingProps & SubscriptionPlansProps

const UISubscriptionPlans: React.FC<UISubscriptionPlansProps> = (props) => {
	
  const {
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'xl',
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
			<div className="flex flex-col space-y-4 w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
					size={fontSize}
					editable={editable}
					handleChange={handleChange}
				/>
				<SubscriptionPlans {...rest} />
			</div>
		</Section>
	)
}

export default UISubscriptionPlans
