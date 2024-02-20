import React from 'react'
import { AttachmentInput } from '../../../components'
import { AttachmentInputProps } from '../../../types'

const ImageInput: React.FC<AttachmentInputProps> = (props) => {
	return <AttachmentInput {...props} variant="image" />
}

export default ImageInput
