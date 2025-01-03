'use client'

import React from 'react'
import { Empty, DocumentList, BlogListItems } from '../..'
import { DocumentListProps } from './DocumentList'

export type BlogListProps = DocumentListProps

const BlogList: React.FC<BlogListProps> = (props) => {
	return (
		<DocumentList
			{...props}
			list={BlogListItems}
			contentType="article"
			emptyIcon="ri-quill-pen-fill"
			emptyTitle="No blog posts"
			emptyDescription="Create your first blog post to get started."
		/>
	)
}

export default BlogList
