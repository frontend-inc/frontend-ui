'use client'

import React from 'react'
import { FieldWrapper, Typography } from '../../../components'
import { FieldElementProps } from './Field'
import { Button, RemixIcon } from '../../../components'
import { cloudinaryDownloadUrl, downloadFile } from '../../../helpers'
import { cn } from 'frontend-shadcn'

const FieldFile: React.FC<FieldElementProps> = (props) => {
	const { value, label, className } = props


  const handleClick = () => {
    if(value?.url) {
      const downloadUrl = cloudinaryDownloadUrl(value.url, value.filename)
      downloadFile(downloadUrl)
    }
  }

	return (
		<FieldWrapper label={label}>
      <div className={cn(
        'w-full flex justify-center',
        className
      )}>
        <Button 
          size="lg"
          variant="outline"
          className='max-w-[240px]'
          onClick={ handleClick }
          startIcon={<RemixIcon name="ri-download-2-fill" />}
        >
          { value?.filename }
        </Button>
			</div>
		</FieldWrapper>
	)
}

export default FieldFile
