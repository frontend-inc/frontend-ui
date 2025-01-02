'use client'

import React from 'react'
import { Empty, Typography } from '../../../components'
import { Accordion as NextAccordion, AccordionItem } from '@nextui-org/react'

export type AccordionProps = {
	variant?: 'light' | 'shadow' | 'bordered' | 'splitted'
	items?: {
		title: string
		subtitle: string
		image?: string
	}[]
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const { variant, items = [] } = props

	return (
		<>
			<NextAccordion
        variant={ variant }
        selectionMode="multiple"
      >
				{items?.map((item, i) => (
					<AccordionItem
						key={i}
            aria-label={item?.title}
						title={item?.title}
					>
            <Typography variant="subtitle2" className='pb-2'>
              { item?.subtitle }
            </Typography>
          </AccordionItem>
				))}
      </NextAccordion>
      {items?.length == 0 && (
        <Empty
          icon="ri-search-line"
          title="No content"
          description="Your content will appear here."
        />
      )}
		</>
	)
}

export default Accordion
