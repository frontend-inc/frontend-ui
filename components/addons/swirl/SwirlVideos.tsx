import React from 'react'
import { Box } from '@mui/material'
import { 
  SwirlShortVideos 
} from "swirl-short-videos-typescript"

export type SwirlVideosProps = {
  dataCode: string
  dataPlaylistCode: string
  serverType?: 'development' | 'prod'
}

const SwirlVideos: React.FC<SwirlVideosProps> = (props) => {
	const { dataCode, dataPlaylistCode, serverType="prod" } = props

	return (
		<Box sx={sx.root}>
			<SwirlShortVideos 
        dataCode={ dataCode } 
        dataPlalistCode={ dataPlaylistCode } 
        serverType={ serverType }
      />
		</Box>
	)
}

export default SwirlVideos

const sx = {
	root: {
		width: '100%',
		minHeight: 100
	},
}
