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
  FormProps & { 
    resource: any   
  }

const CmsSimilar: React.FC<CmsListProps> = (props) => {
	const {
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
    url,
    query={},
    perPage,
		...rest
	} = props

  let similarUrl = `${url}/${resource?.id}/similar` 

	return (
    <QueryProvider url={url}>
      <Query 
        url={similarUrl}
        query={query}
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
          <CollectionList 
            {...rest} 
          />
        </Section>
      </Query>
    </QueryProvider>
	)
}

export default CmsSimilar
