import React, { useState } from 'react'
import { useUnsplash, useMedia } from '../../../../hooks'
import { Button, Stack, Box } from '@mui/material'
import { SearchInput } from '../../../../components'
import UnsplashCard from './UnsplashCard'
import UnsplashModal from './UnsplashModal'
import { ExpandMore } from '@mui/icons-material'
import PoweredByUnsplash from './PoweredByUnsplash'
import { UnsplashImageType } from '../../../../types'

type UnsplashProps = {
	onComplete?: (resp: any) => void
}

const UnsplashList: React.FC<UnsplashProps> = (props) => {
	const { onComplete } = props

	const [showModal, setShowModal] = useState(false)
	const [keywords, setKeywords] = useState('')

	//@ts-ignore
	const [image, setImage] = useState<UnsplashImageType>({})

	const { loading, uploadFromUrl } = useMedia()

	const handleUpload = async (url, name) => {
		try {
			let resp = await uploadFromUrl(url, name)
			if (onComplete) {
				onComplete(resp)
			}
		} catch (e) {
			console.log(e)
		} finally {
			setShowModal(false)
			//@ts-ignore
			setImage({})
		}
	}

	const { images, search, loadMore } = useUnsplash()

	const handleChange = (ev) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = async () => {
		await search(keywords)
	}

	const handleLoadMore = async () => {
		await loadMore(keywords)
	}

	const handleImageClick = (image) => {
		setImage(image)
		setShowModal(true)
	}

	return (
		<Box sx={sx.root}>    
      <Stack spacing={1}>
        <SearchInput
          name="keywords"
          value={keywords}
          placeholder="Search unsplash..."
          handleChange={handleChange}
          handleSearch={handleSearch}
        />			
        <PoweredByUnsplash />
      </Stack>  
			<Box sx={sx.grid}>
				{images?.map((image, i) => (
					<UnsplashCard key={i} image={image} handleClick={handleImageClick} />
				))}
			</Box>
			{images?.length > 0 && images?.length % 10 == 0 && (
				<Button
					sx={sx.loadMore}
					fullWidth
					color="secondary"
					variant="contained"
					endIcon={<ExpandMore />}
					onClick={handleLoadMore}
				>
					Load More
				</Button>
			)}
			<UnsplashModal
				loading={loading}
				open={showModal}
				image={image}
				handleClose={() => setShowModal(false)}
				handleUpload={handleUpload}
			/>
		</Box>
	)
}

export default UnsplashList

const sx = {
	root: {
		width: '100%',
	},
	button: {
		my: 1,
	},
	grid: {
		mt: 2,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(164px, 1fr))',
		gap: '10px',
	},
	unsplashLogo: {
		mt: 2,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	loadMore: {
		my: 2,
	},
}
