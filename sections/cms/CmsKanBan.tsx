import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionKanBanList, CollectionContainer } from '../../components'
import { CollectionKanBanListProps } from '../../components/cms/collections/CollectionKanBanList'
import { CollectionToolbarProps } from '../../components/cms/collections/CollectionToolbar'
import { SectionProps, HeadingProps, FormProps } from '../../types'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { Query, ResourceForm } from '../../components'
import { FormProvider } from '../../context'

type CmsKanBanProps = SectionProps & 
  HeadingProps & 
  CollectionKanBanListProps & 
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
      <CollectionContainer
        url={url}        
        resourceUrl={url}
        query={query}
        filterUser={filterUser}
        filterTeam={filterTeam}
        editFields={fields}
        createFields={fields}  
        enableSearch={enableSearch}
        filterOptions={filterOptions}
        perPage={200}
      >
        <CollectionKanBanList 
          {...rest} 
          url={url}
          enableCreate={enableCreate}
        />
      </CollectionContainer>
    </Section>          
	)
}

export default CmsKanBan
