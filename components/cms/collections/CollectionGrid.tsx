import React, { useContext } from 'react' 
import { 
  Collection,
  CardVert,
  AvatarVert,
  CoverVert 
} from '../..'
import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'

type CollectionGridProps = {
	title?: string
	url: string
	style: 'card' | 'avatar' | 'cover'
	fields?: any
	editing?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	navigateUrl: any
	perPage?: number
	query?: any
	enableSearch?: boolean
	enableFilters?: boolean
	enableSortTitle?: boolean
	enableSortPrice?: boolean
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
}

const CollectionGrid: React.FC<CollectionGridProps> = (props) => {

  const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const {
    title,
    url,
    style = 'card',
    fields,
    editing,
    query: defaultQuery = {},
    perPage = 20,
    enableSearch = false,
    enableFilters = false,
    enableSortTitle = false,
    enableSortPrice = false,
    enableInfiniteLoad = false,
    enableLoadMore = true,
    navigateUrl,
    buttonText,
    enableBorder = false,
    enableGradient = false,
  } = props 

  const COMPONENTS = {
    "card": CardVert,
    "avatar": AvatarVert,
    "cover": CoverVert
  }

  const Component = COMPONENTS[style]

  const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}
  return(
  <Collection 
    title={ title }
    url={ url }    
    layout="grid"
    style={ style }
    fields={ fields }
    editing={ editing }
    navigateUrl={ navigateUrl }    
    enableInfiniteLoad={ enableInfiniteLoad }
    enableLoadMore={ enableLoadMore }
    perPage={ perPage }
    query={ defaultQuery }
    enableSearch={ enableSearch }
    enableFilters={ enableFilters }
    enableSortTitle={ enableSortTitle }
    enableSortPrice={ enableSortPrice }        
    renderItem={(resource: any, index) => (
      <Component 
        key={ index }
        title={ resource?.title }
        description={ resource?.description }
        image={ resource?.image?.url }
        video={ resource?.video?.url }
        editing={ editing }
        buttonText={ buttonText }        
        handleClick={() => handleClick(resource)}
        enableBorder={ enableBorder }
        enableGradient={ enableGradient }
      />
    )}
  />  
  )
}

export default CollectionGrid 

