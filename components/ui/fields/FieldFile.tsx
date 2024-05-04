import React from 'react'
import { Stack, Link } from '@mui/material'
import { Icon, Label, FieldWrapper } from '../../../components'

type FieldFileProps = {
	value?: any
	handleClick?: () => void
	label?: string
	rest?: any
}

const FieldFile: React.FC<FieldFileProps> = (props) => {
	const { value, label, handleClick, ...rest } = props
  console.log('FieldFile', value)
	return (
		<FieldWrapper label={label} {...rest}>
      <Stack direction='row' spacing={1}>
        <Icon 
          name='File'
          size={20}
          color='text.primary'
        />
        {value?.content_type && (
          <Link 
            href={value?.url}          
            sx={sx.link}							
            target='_blank'			
          >
            { value?.content_type}
          </Link>
        )}
      </Stack>
		</FieldWrapper>
	)
}

export default FieldFile

const sx = {
	link: {
    color: 'text.secondary',
    textDecoration: 'none',
		'&:hover': {
      color: 'text.primary',
      textDecoration: 'underline',
    },
	},
	cell: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		p: '0.5rem',
	},
}
