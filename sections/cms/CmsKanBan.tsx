import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionKanBan, CollectionToolbar } from '../../components'
import { CollectionKanBanProps } from '../../components/cms/collections/CollectionKanBan'
import { CollectionToolbarProps } from '../../components/cms/collections/CollectionToolbar'
import { SectionProps, HeadingProps, FormProps } from '../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { Query, ResourceForm } from '../../components'
import { FormProvider } from '../../context'

type CmsKanBanProps = SectionProps & 
  HeadingProps & 
  CollectionKanBanProps & 
  CollectionToolbarProps & 
  FormProps

const CmsKanBan: React.FC<CmsKanBanProps> = (props) => {
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
            perPage={200}
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
              />
              <CollectionKanBan 
                {...rest} 
                enableCreate={enableCreate}
              />
            </Section>
          </Query>
          <ResourceForm />
        </FormProvider>
      </ResourceProvider>
    </QueryProvider>
	)
}

export default CmsKanBan
