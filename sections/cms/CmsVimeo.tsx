import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { ShowProps } from '../../components/cms/show/Show'
import { SectionProps } from '../../types'

type CmsVimeoProps = SectionProps & ShowProps

const CmsVimeo: React.FC<CmsVimeoProps> = (props) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Show       
        {...rest} 
        style={'vimeo'}
      />
		</Section>
	)
}

export default CmsVimeo
