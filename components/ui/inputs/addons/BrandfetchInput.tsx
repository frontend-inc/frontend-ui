'use client'

import React, { useState } from 'react'
import { useBrandfetch, useAdminMedia } from '../../../../hooks'
import { Card, CardContent } from 'frontend-shadcn'
import {
	Image,
	Label,
	TouchableOpacity,
	BrandfetchAutosuggest,
	CircularLoader,
} from '../../..'
import PoweredByBrandfetch from './PoweredByBrandfetch'

type BrandfetchInputProps = {
	onComplete: (resource: any) => void
}

const BrandfetchInput: React.FC<BrandfetchInputProps> = (props) => {
	const { onComplete } = props || {}

	const { resizeLogo, brand, fetchBrand } = useBrandfetch()

	const { loading, uploadFromUrl } = useAdminMedia()

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
		<div className="flex flex-col space-y-4 w-full">
      <div className="w-full flex flex-row justify-center items-center">
			  <BrandfetchAutosuggest handleChange={handleBrandChange} />
      </div>
			<PoweredByBrandfetch />
			{loading && <CircularLoader />}
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{!loading &&
					brand?.logos?.map((logo) => (
						<React.Fragment key={logo.domain}>
							{logo?.formats
								?.filter((f) => f.format != 'svg')
								.map((format, index) => (
									<Card
										key={`${logo.domain}-${index}`}
										className="flex flex-col space-y-4 bg-muted/20 hover:bg-muted/50 p-4 hover:border-primary overflow-hidden"
									>
                    <CardContent>
										<TouchableOpacity
											handleClick={() => handleClick(format, logo)}
										>
											<div className="relative rounded overflow-hidden h-[160px] w-[200px] flex items-center justify-center">
												<Image
													src={format?.src}
													height={220}
													width={200}
													alt={logo?.domain}
													objectFit="contain"
												/>
											</div>
										</TouchableOpacity>
										<div>
											<Label label={format.format} />
										</div>
                    </CardContent>
                  </Card>
								))}
						</React.Fragment>
					))}
			</div>
		</div>
	)
}

export default BrandfetchInput
