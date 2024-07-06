import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionKanBan, CollectionToolbar } from '../../components'
import { CollectionKanBanProps } from '../../components/cms/collections/CollectionKanBan'
import { CollectionToolbarProps } from '../../components/cms/collections/CollectionToolbar'
import { SectionProps, HeadingProps, FormProps, ForeignProps } from '../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { Query, ResourceForm } from '../../components'
import { FormProvider } from '../../context'

type CmsForeignKanBanProps = SectionProps & 
  HeadingProps & 
  CollectionKanBanProps & 
  CollectionToolbarProps & 
  FormProps & 
  ForeignProps 

const CmsForeignKanBan: React.FC<CmsForeignKanBanProps> = (props) => {
	const {
    resource,
    url,
    foreignUrl,
    foreignContentType,
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

export default CmsForeignKanBan
