import React from 'react'
import { HeroArticle } from '../../../components'
import { HeroProps } from './Hero'

const HeroDocument: React.FC<HeroProps> = (props) => {
	return <HeroArticle disableImage {...props} />
}

export default HeroDocument
