import React from 'react'
import { CollectionList } from '../..'
import { 
  SortOptionType, 
  SearchFilterOptionType, 
  DisplayFieldType
} from '../../../types'

export type LikesProps = {
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
	field: any
  displayFields?: DisplayFieldType[]
	url: string
	handle: string
	href: any
	foreignUrl?: string
  filterAnchor?: 'left' | 'top'
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	perPage?: number
	query?: any
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
  enableLikes?: boolean
  enableInfiniteLoad?: boolean
  enableLoadMore?: boolean
}

const Likes: React.FC<LikesProps> = (props) => {

	const {
		url,
  ...rest	
  } = props


	return (
    <CollectionList 
      enableLikes
      url={`${url}/likes`}
      // Todo: Component errors without a default value 
      query={{}}
      { ...rest }
    />
	)
}

export default Likes
