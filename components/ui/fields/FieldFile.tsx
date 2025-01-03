'use client'

import React from 'react'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { RemixIcon } from '../../../components'
import { Button } from '@nextui-org/react'
import { cloudinaryDownloadUrl, downloadFile } from '../../../helpers'
import { cn } from '@nextui-org/react'

const FieldFile: React.FC<FieldElementProps> = (props) => {
	const { value, label, className } = props

	const handleClick = () => {
		if (value?.url) {
			const downloadUrl = cloudinaryDownloadUrl(value.url, value.filename)
			downloadFile(downloadUrl)
		}
	}

	return (
		<FieldWrapper label={label}>
			<div className={cn('w-full flex justify-center', className)}>
				<Button
					size="lg"
					variant="ghost"
					className="max-w-[240px]"
					onPress={handleClick}
					startContent={<RemixIcon name="ri-download-2-fill" />}
				>
					{value?.filename}
				</Button>
			</div>
		</FieldWrapper>
	)
}

export default FieldFile
