import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionList, CollectionToolbar } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { CollectionToolbarProps } from '../../components/cms/collections/CollectionToolbar'
import { SectionProps, HeadingProps, FormProps } from '../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { Query, ResourceForm } from '../../components'
import { FormProvider } from '../../context'

type CmsListProps = SectionProps & 
  HeadingProps & 
  CollectionListProps & 
  CollectionToolbarProps & 
  FormProps

const CmsList: React.FC<CmsListProps> = (props) => {
	const {
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
    url,
    query={},
    filterUser,
    filterTeam,
    perPage,
		...rest
	} = props

	return (
    <QueryProvider url={url}>
      <ResourceProvider url={url} name='document'>
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
              <CollectionList 
                {...rest} 
              />
            </Section>
          </Query>
          <ResourceForm />
        </FormProvider>
      </ResourceProvider>
    </QueryProvider>
	)
}

export default CmsList
