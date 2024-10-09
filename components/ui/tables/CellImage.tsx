import React from 'react'
import { Image } from '../../../components'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'

type CellImageProps = {
	value: {
		url
	}
	handleClick?: any
	size?: number
}

const CellImage: React.FC<CellImageProps> = (props) => {
	const { value, handleClick } = props
	let src = cloudinaryImageFromVideoUrl(value?.url)
	return (		
    <div className='max-h-[64px] max-w-[64px]'>
      <Image				
        src={src}
        aspectRatio={4/3}
        alt={'Image'}
        handleClick={ handleClick }
      />		
    </div>
	)
}

export default CellImage
