'use client'
import React, { useEffect, useState, useRef } from 'react'
import { EditorContent } from '@tiptap/react'

import { LinkMenu } from '@block-editor/components/menus'

import { useBlockEditor } from '@block-editor/hooks/useBlockEditor'

import '@block-editor/styles/index.css'

import ImageBlockMenu from '@block-editor/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@block-editor/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@block-editor/extensions/Table/menus'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '../menus/ContentItemMenu'
import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider'
import { SyntheticEventType } from 'frontend-js'
import { useDebounce } from 'use-debounce'

type BlockEditorProps = {
  name: string
  value: string
  handleChange: (event: SyntheticEventType) => void
  aiToken: string
  ydoc: Y.Doc
  provider: TiptapCollabProvider
}

export const BlockEditor: React.FC<BlockEditorProps> = (props) => {

  const { 
    name, 
    value='<p>Start typing...</p>',
    handleChange,
    aiToken, 
    ydoc,
    provider 
  } = props || {}

  const menuContainerRef = useRef(null)
  
  const [content, setContent] = useState(value)
  const [debouncedContent] = useDebounce(content, 500)

  useEffect(() => {
    handleChange({
      target: {
        name,
        value: debouncedContent
      }
    })
  }, [debouncedContent])

  useEffect(() => {
    if (content !== value) {
      setContent(value)
    }
  }, [value])

  const handleUpdate = ({ editor, ...rest }) => {
    setContent(editor.getHTML())    
  }

  const { 
    editor, 
    users, 
    collabState,
  } = useBlockEditor({ 
    aiToken, 
    ydoc,
    provider,
    content: content,
    onUpdate: handleUpdate, 
  })

  if (!editor || !users) {
    return null
  }

  return (
    <div ref={menuContainerRef} className="relative flex flex-col flex-1 w-full h-full">
      <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
      <ContentItemMenu editor={editor} />
      <LinkMenu editor={editor} appendTo={menuContainerRef} />
      <TextMenu editor={editor} />
      <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
      <TableRowMenu editor={editor} appendTo={menuContainerRef} />
      <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
      <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
    </div>
  )
}

export default BlockEditor
