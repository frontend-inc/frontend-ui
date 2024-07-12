import React from 'react'
import { SortableList, SortableListItem } from '../../../../components'
import { DocumentLinkType } from '../../../../types'
import SortableDocumentLinkItem from './SortableDocumentLinkItem'

type SortableDocumentLinksProps = {
  documentLinks: DocumentLinkType[]
  handleDrop: (sorted: any) => void
  handleDelete: (resource: any) => void 
  handleEdit: (resource: any) => void
}

const SortableDocumentLinks: React.FC<SortableDocumentLinksProps> = (props) => {

  const {
    documentLinks,
    handleDrop,
    handleDelete,
    handleEdit 
  } = props || {}

  const sorted = documentLinks?.sort((a, b) => a.position - b.position)

  if(!sorted) return null;
  return(
    <SortableList 
      droppableId='document-links'
      items={ sorted }
      handleDrop={handleDrop}
      renderItem={(link) => (
        <SortableDocumentLinkItem
          key={link.id}
          image={link?.target?.image?.url}
          title={link?.target?.title}
          subtitle={link?.target?.content_type}
          isDragging={link?.isDragging}
          handleDelete={() => handleDelete(link?.target)}
          handleEdit={() => handleEdit(link?.target)}
        />
      )}
    />
  )
}

export default SortableDocumentLinks