import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionKanBan, CollectionContainer } from '../../components'
import { CollectionKanBanProps } from '../../components/cms/collections/CollectionKanBan'
import { SectionProps, HeadingProps } from '../../types'

type CmsKanBanProps = SectionProps & 
  HeadingProps & 
  CollectionKanBanProps 

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
        fields={fields}        
        enableSearch={enableSearch}
        filterOptions={filterOptions}
        perPage={200}
      >
        <CollectionKanBan 
          {...rest} 
          url={url}
          enableCreate={enableCreate}
        />
      </CollectionContainer>
    </Section>          
	)
}

export default CmsKanBan
