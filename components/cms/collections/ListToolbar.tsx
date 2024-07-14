import React, { useEffect } from 'react'
import {
	SearchToolbar,
} from '../..'
import { useFields } from '../../../hooks'

export type ListToolbarProps = {
	query: any
	url: string
	filterUser: boolean
	filterTeam: boolean
	perPage: number
	enableSearch?: boolean
	enableGeoSearch?: boolean
	enableCreate?: boolean
  enableFilters?: boolean
  enableSorting?: boolean
	handleAdd?: () => void
}

const ListToolbar: React.FC<ListToolbarProps> = (props) => {
	
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

export default ListToolbar

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
