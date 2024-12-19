'use client'

import React from 'react'
import { DocumentList, BlogListItems } from '../..'
import { DocumentListProps } from './DocumentList'

export type BlogListProps = DocumentListProps

const BlogList: React.FC<BlogListProps> = (props) => {
	return <DocumentList {...props} list={BlogListItems} />
}

export default BlogList
