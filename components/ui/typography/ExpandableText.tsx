import React, { useState } from 'react'
import {
  Stack,
  Typography,
  Link,
} from '@mui/material'

const MAX_CHARS = 200

type ExpandableTextProps = {
  text: string
  maxChars?: number
  color?: string 
}

const ExpandableText: React.FC<ExpandableTextProps> = (props) => {
  const { text, color='text.primary', maxChars = MAX_CHARS } = props || {}
  const [open, setOpen] = useState(false)
  return(
    <Stack direction="column" spacing={0}>
      {open ? (
        <Typography variant="body1" color={ color } sx={sx.text}>
          {text}
        </Typography>
      ) : (
        <Typography variant="body1" color={ color } sx={sx.text}>
          {text?.slice(0, maxChars)}
        </Typography>
      )}
      {text?.length > maxChars && (
        <Link onClick={() => setOpen(!open)} sx={sx.link}>
          {open ? 'See less' : '... See all'}
        </Link>
      )}
    </Stack>
  )
}

export default ExpandableText

const sx = {
  text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
}