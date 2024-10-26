'use client'

import React from 'react'
import { useAlerts } from '../../../../hooks'
import { Icon,Modal } from '../../../../components'
import UnsplashLogo from './UnsplashLogo'
import { AspectRatio } from 'frontend-shadcn'
import { Button, Typography, CircularProgress } from '../../../../components'
import copy from 'copy-to-clipboard'
import PoweredByUnsplash from './PoweredByUnsplash'
import { useUnsplash } from '../../../../hooks'
import { UnsplashImageType } from '../../../../types'
import Image from 'next/image'
import Link from 'next/link'

type UnsplashViewerModalProps = {
	open: boolean
	loading: boolean
	image: UnsplashImageType
	handleUpload: (url: string, filename: string) => void
	handleClose: () => void
}

const UnsplashModal: React.FC<UnsplashViewerModalProps> = ({
	loading = false,
	open,
	image,
	handleClose,
	handleUpload,
}) => {
	const { showAlertSuccess } = useAlerts()
	const { fetchDownloadLocation } = useUnsplash()

	const handleCopyUrlClick = () => {
		copy(image?.urls?.regular)
		showAlertSuccess('Asset URL copied to clipboard')
	}

	const handleDownloadClick = async () => {
		let downloadUrl = await fetchDownloadLocation(image)
		handleUpload(downloadUrl, image?.slug)
	}

	const handleUnsplashClick = () => {
		const url =
			image?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	const handleUserClick = () => {
		let url =
			image?.user?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	return (
		<Modal
			open={open}
			loading={loading}
			handleClose={handleClose}
			title={<PoweredByUnsplash />}
			maxWidth="md"
			buttons={
				<>
					<Button
            variant="secondary"
						onClick={handleUnsplashClick}
						className="flex items-center"
            endIcon={ 
              <Icon name="ExternalLink" className="text-secondary-foreground" />
            }
					>
						<UnsplashLogo className='fill-white' />						
					</Button>
					<Button
            variant="secondary"
						onClick={handleCopyUrlClick}
						className="flex items-center"
					>
						<Icon name="Copy" className="text-secondary-foreground mr-2" />
						Copy URL
					</Button>
					<Button onClick={handleDownloadClick} className="flex items-center">
						<Icon name="Download" className="mr-2 text-primary-contrast" />
						Import
					</Button>
				</>
			}
		>
			{!loading ? (
				<div className="flex flex-col w-full">
          
					<Image
						alt={image?.alt_description}
						src={image?.urls?.regular}
						height={250}
            width={500}  
            className="object-cover max-h-[250px] w-full rounded-lg"          
					/>
          
					<div className="py-2 w-full flex flex-row justify-between items-start">
						<div className="w-full">
							<div className="flex items-center">
								<button className="relative w-[32px] h-[32px] rounded-full mr-2" onClick={handleUserClick}>
									<Image
										// @ts-ignore
										src={image?.user?.profile_image?.small}
										alt={image?.user?.name}
                    layout="fill"
                    className='object-cover rounded-full'
									/>
								</button>
								<div>
									<Link
										href={`${image?.user?.links?.html}?utm_source=frontend.co&utm_medium=referral`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-foreground hover:text-foreground/90"
									>
										{image?.user?.name}
									</Link>
									<Typography variant="body2" className="text-gray-500 w-full">
										{image?.description}
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="p-6 flex justify-center items-center w-full">
					<CircularProgress />
				</div>
			)}
		</Modal>
	)
}

export default UnsplashModal
