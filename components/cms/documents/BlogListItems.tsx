'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { Container, DocumentListItem, DataLayout } from '../..'
import { ButtonType, MetafieldType } from '../../../types'
import { BlurFade } from '../..'

export type BlogListItemsProps = {
	layout?: 'list' | 'grid' | 'slider'
	selectable?: boolean
	href?: string
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	metafields: MetafieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	slots?: {
		list?: any
		item?: any
	}
}

const BlogListItems: React.FC<BlogListItemsProps> = (props) => {
	
  const {
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		selectable,
		layout = 'grid',
		buttons = [],
		style = 'card',
		handleClick,
		metafields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableComments = false,
		slots = {
			item: {},
		},
	} = props

	const handleShowClick = (resource) => {
		if (handleClick) {
			handleClick(resource)
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	const firstPost = resources?.[0]
	const remainingPosts = resources?.slice(1) || []  

  const firstPostStyle = {
    card: 'card',
    cover: 'cover',
    list: 'card'
  }

	return (
    <Container maxWidth="lg">
      <div className="flex flex-col w-full space-y-2">
        {firstPost && (
          <BlurFade delay={0.25} inView key={firstPost.id}>
            <DocumentListItem
              {...slots.item}
              style={firstPostStyle[style]}
              selectable={selectable}
              resource={firstPost}
              metafields={metafields}
              handleClick={() => handleShowClick(firstPost)}
              buttons={buttons}
              enableComments={enableComments}
              enableFavorites={enableFavorites}
              enableLikes={enableLikes}
              enableGradient={enableGradient}
              enableOverlay={enableOverlay}
            />
          </BlurFade>
        )}
        <DataLayout {...slots.list} layout={layout} loading={loading}>
          {remainingPosts?.map((resource, idx) => (
            <BlurFade delay={0.25 + idx * 0.05} inView key={resource?.id}>
              <DocumentListItem
                style={style}
                selectable={selectable}
                resource={resource}
                metafields={metafields}
                handleClick={() => handleShowClick(resource)}
                buttons={buttons}
                enableComments={enableComments}
                enableFavorites={enableFavorites}
                enableLikes={enableLikes}
                enableGradient={enableGradient}
                enableOverlay={enableOverlay}
                {...slots.item}
              />
            </BlurFade>
          ))}
        </DataLayout>
        <LoadMore
          page={page}
          numPages={numPages}
          handlePaginate={handlePaginate}
        />
      </div>
    </Container>
	)
}

export default BlogListItems
