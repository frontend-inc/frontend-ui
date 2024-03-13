import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Field } from '../..'
import { flattenDocument } from '../../../helpers'

type DetailsProps = {
	fields: any[]
	url: string
	resource: any
  enableBorder?: boolean 
}

const FULL_WIDTH_VARIANTS = [
  'text',
  'image'
]

const Details: React.FC<DetailsProps> = (props) => {
	const { 
    resource, 
    fields,
    enableBorder=false 
  } = props
	const [document, setDocument] = useState<any>()

	useEffect(() => {
		if (resource) {
			setDocument(flattenDocument(resource))
		}
	}, [resource])

	return (
		<Box sx={sx.root}>
      <Box sx={sx.content}>
        {document && fields.map((field, i) => (
          <Box 
            key={i}
            sx={{
              ...sx.item,              
              ...(enableBorder && sx.itemBorder),
              ...(FULL_WIDTH_VARIANTS.includes(field?.variant) && sx.itemFullWidth)
            }}
          >
            <Field
              field={field} 
              document={document} 
            />
          </Box>
        ))}
      </Box>
		</Box>
	)
}

export default Details

const sx = {
	root: {
		width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
	},
  content: {
    width: '100%',
    maxWidth: 800,
    display: 'grid',
    gridTemplateColumns: {
      md: '1fr 1fr 1fr',
      xs: '1fr'
    },
    gap: '16px'
  },
  item: {    
    width: '100%',
    gridColumn: 'span 1',
    borderRadius: theme => `${theme.shape.borderRadius}px`,
  },
  itemBorder: {    
    p: 2,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'primary.contrastText',    
  },    
  itemFullWidth: {
    gridColumn: 'span 3'
  },
}
