'use client'

import React from 'react'
import { DocumentList } from '../..'
import { DocumentListProps } from './DocumentList'

export type FileListProps = DocumentListProps

const FileList: React.FC<FileListProps> = (props) => {
	return <DocumentList {...props} style="file" layout="list" />
}

export default FileList
