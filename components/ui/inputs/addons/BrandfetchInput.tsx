import React, { useState } from 'react'
import { useBrandfetch, useMedia } from '../../../../hooks'
import {
	Image,
	Label,
	TouchableOpacity,
	BrandfetchAutosuggest,
	CircularLoader,
} from '../../..'
import { Link, Stack, Box, Typography } from '@mui/material'

type BrandfetchInputProps = {
	onComplete: (resource: any) => void
}

const BrandfetchInput: React.FC<BrandfetchInputProps> = (props) => {
	const { onComplete } = props || {}

	const { resizeLogo, brand, fetchBrand } = useBrandfetch()

	const [selected, setSelected] = useState(null)

	const { loading, uploadFromUrl } = useMedia()

	const handleBrandChange = (ev) => {
		const { value } = ev.target
		fetchBrand(value)
	}

	const handleClick = async (logoFormat, logo) => {
		const { src, format } = logoFormat || {}
		let domain = logo?.domain || 'logo'
		const filename = domain + '.' + format
		const resizedUrl = resizeLogo(src, { width: 512, height: 512 })
		const resp = await uploadFromUrl(resizedUrl, filename)
		if (onComplete) {
			onComplete(resp)
		}
	}

	return (
		<Stack direction="column" spacing={1}>
			<BrandfetchAutosuggest handleChange={handleBrandChange} />
			<Typography variant="caption">
				Powered by{' '}
				<Link href="https://www.brandfetch.com" target="_blank">
					Brandfetch.com
				</Link>
			</Typography>
			{loading && <CircularLoader />}
			<Box sx={sx.grid}>
				{!loading &&
					brand?.logos?.map((logo) => (
						<>
							{logo?.formats
								?.filter((f) => f.format != 'svg')
								.map((format) => (
									<Stack direction="column" spacing={1} sx={sx.card}>
										<TouchableOpacity
											handleClick={() => handleClick(format, logo)}
										>
											<Box sx={sx.logo}>
												<Image
													src={format?.src}
													height={164}
													width={164}
													alt={logo?.domain}
													objectFit="contain"
												/>
											</Box>
										</TouchableOpacity>
										<Box>
											<Label label={format.format} />
										</Box>
									</Stack>
								))}
						</>
					))}
			</Box>
		</Stack>
	)
}

export default BrandfetchInput

const sx = {
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(164px, 1fr))',
		gap: 1,
	},
	logo: {
		position: 'relative',
		borderRadius: 1,
		overflow: 'hidden',
		height: 164,
		width: 164,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		bgcolor: 'background.paper',
		p: 1,
		borderRadius: 1,
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: 2,
		},
	},
}
