import React, { useEffect } from 'react'
import {
	SearchToolbar,
} from '../../../components'
import { useFields } from '../../../hooks'

export type CollectionToolbarProps = {
	query: any
	url: string
	filterUser: boolean
	filterTeam: boolean
	perPage: number
	enableSearch?: boolean
	enableGeoSearch?: boolean
	enableCreate?: boolean
	handleAdd?: () => void
}

const CollectionToolbar: React.FC<CollectionToolbarProps> = (props) => {
	
	const {
		url,
    ...rest 
	} = props

  const {     
    fetchSearchFields,
    filterFields,
    sortFields 
  } = useFields({
    url
  })

  useEffect(() => {
    if(url){
      fetchSearchFields()
    }
  }, [url])

	return (
    <SearchToolbar 
      { ...rest }
      url={url}      
      filterOptions={ filterFields }
      sortOptions={ sortFields }
    />		
	)
}

export default CollectionToolbar

const sx = {
	root: {
		width: '100%',
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	toolbar: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
	toolbarActions: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
	},
	buttonContainer: {
		width: {
			xs: '100%',
			sm: 'auto',
		},
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
	searchBar: {
		width: '100%',
	},
}
