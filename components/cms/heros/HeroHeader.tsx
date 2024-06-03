import React from 'react'
import { PageHeader } from '../../../components'
import { ActionType } from '../../../types'

export type HeroHeaderProps = {
  resource: any & {
    title?: string
    subtitle?: string
    label?: string    
  }
  links: {
		label: string
		path: string
	}[]
	maxLinks?: number
	actions: ActionType[]
	enableBorder?: boolean
}

const HeroHeader: React.FC<HeroHeaderProps> = (props) => {
  const { resource, ...rest } = props
  const { title, label } = resource || {}
	return (
		<PageHeader 
      label={label}
      title={title}
      { ...rest }
    />
	)
}

export default HeroHeader
