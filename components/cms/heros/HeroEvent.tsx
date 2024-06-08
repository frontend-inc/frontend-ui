import React from 'react'
import { HeroArticle } from '../../../components'
import { HeroProps } from './Hero'

const HeroEvent: React.FC<HeroProps> = (props) => {
	return <HeroArticle direction="column-reverse" {...props} />
}

export default HeroEvent
