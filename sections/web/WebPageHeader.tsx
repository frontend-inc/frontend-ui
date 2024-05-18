import React from 'react'
import { Section } from '../../components'
import { PageHeader } from '../../components'
import { PageHeaderProps } from '../../components/web/pages/PageHeader'
import { SectionProps } from '../../types'

type WebPageHeaderProps = SectionProps & PageHeaderProps

const WebPageHeader: React.FC<WebPageHeaderProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<PageHeader {...rest} />
		</Section>
	)
}

export default WebPageHeader
