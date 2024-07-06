import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionTable, CollectionToolbar } from '../../components'
import { CollectionTableProps } from '../../components/cms/collections/CollectionTable'
import { CollectionToolbarProps } from '../../components/cms/collections/CollectionToolbar'
import { SectionProps, HeadingProps, FormProps, ForeignProps } from '../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { Query, ResourceForm } from '../../components'
import { FormProvider } from '../../context'

type CmsForeignTableProps = SectionProps & 
  HeadingProps & 
  CollectionTableProps & 
  CollectionToolbarProps & 
  FormProps & 
  ForeignProps  

const CmsForeignTable: React.FC<CmsForeignTableProps> = (props) => {
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
              <CollectionTable 
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

export default CmsForeignTable
