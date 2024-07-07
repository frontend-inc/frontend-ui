import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionCarouselList, CollectionToolbar } from '../../components'
import { CollectionCarouselListProps } from '../../components/cms/collections/CollectionCarouselList'
import { CollectionToolbarProps } from '../../components/cms/collections/CollectionToolbar'
import { SectionProps, HeadingProps, FormProps, ForeignProps } from '../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { Query, ResourceForm } from '../../components'
import { FormProvider } from '../../context'

type CmsForeignCarouselProps = SectionProps & 
  HeadingProps & 
  CollectionCarouselListProps & 
  CollectionToolbarProps & 
  FormProps & 
  ForeignProps  

const CmsForeignCarousel: React.FC<CmsForeignCarouselProps> = (props) => {
	const {
    url,
    foreignUrl,
    foreignContentType,
    resource,
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
    fields,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,    
    query={},
    filterUser,
    filterTeam,
    perPage,
		...rest
	} = props

  const searchUrl = `${url}/${resource?.id}/${foreignContentType}`

	return (
    <QueryProvider url={searchUrl}>
      <ResourceProvider url={foreignUrl} name='document'>
        <FormProvider
          editFields={fields}
          createFields={fields}
        >
          <Query 
            url={url}
            query={query}
            filterUser={filterUser}
            filterTeam={filterTeam}
            perPage={perPage}
          >
            <Section
              bgcolor={bgcolor}
              py={py}
              px={px}
              maxWidth={maxWidth}
              requireAuth={requireAuth}
              requireTeam={requireTeam}
              requirePaid={requirePaid}
              requireAdmin={requireAdmin}
            >
              <Heading
                label={label}
                title={title}
                description={description}
                textAlign={textAlign}
              />
              <CollectionToolbar
                url={url}
                query={query}
                perPage={perPage}
                filterUser={filterUser}
                filterTeam={filterTeam}  
                enableSearch={enableSearch}              
                filterOptions={filterOptions}
                sortOptions={sortOptions} 
                enableCreate={enableCreate}                 
              />
              <CollectionCarouselList 
                {...rest} 
              />
            </Section>
          </Query>
          <ResourceForm 
            resource={resource}
          />
        </FormProvider>
      </ResourceProvider>
    </QueryProvider>
	)
}

export default CmsForeignCarousel
