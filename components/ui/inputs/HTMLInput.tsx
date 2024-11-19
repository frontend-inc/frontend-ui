// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react'
import { useEditor, EditorProvider, EditorContent, useCurrentEditor } from '@tiptap/react'
import { IconButton, InputLabel, RemixIcon } from '../..'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import { TextInputPropsType } from '../../../types'
import { cn } from 'frontend-shadcn'
import { useDebounce } from 'use-debounce'

const MenuBar = (props) => {

  const { editor } = props || {}
  //const { editor } = useCurrentEditor();

  if (!editor) return null;

  const buttons = [
    { action: () => editor.chain().focus().setParagraph().run(), isActive: editor.isActive('paragraph'), icon: 'ri-text', label: 'Paragraph' },
    { action: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive('bold'), icon: 'ri-bold', label: 'Bold' },
    { action: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive('italic'), icon: 'ri-italic', label: 'Italic' },
    { action: () => editor.chain().focus().toggleStrike().run(), isActive: editor.isActive('strike'), icon: 'ri-strikethrough', label: 'Strike' },    
    { action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), isActive: editor.isActive('heading', { level: 3 }), icon: 'ri-h-1', label: 'H1' },
    { action: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive('bulletList'), icon: 'ri-list-unordered', label: 'Bullet list' },
    { action: () => editor.chain().focus().toggleOrderedList().run(), isActive: editor.isActive('orderedList'), icon: 'ri-list-ordered', label: 'Ordered list' },
    { action: () => editor.chain().focus().toggleCodeBlock().run(), isActive: editor.isActive('codeBlock'), icon: 'ri-code-box-line', label: 'Code block' },
    { action: () => editor.chain().focus().toggleBlockquote().run(), isActive: editor.isActive('blockquote'), icon: 'ri-double-quotes-l', label: 'Blockquote' },
    
    { action: () => editor.chain().focus().undo().run(), isActive: false, icon: 'ri-arrow-go-back-line', label: 'Undo' },
    { action: () => editor.chain().focus().redo().run(), isActive: false, icon: 'ri-arrow-go-forward-line', label: 'Redo' },
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {buttons.map((btn, index) => (
        <IconButton
          key={index}
          onClick={btn.action}
          disabled={!editor.can().chain().focus().run()}
          className={cn(
            btn.isActive && 'bg-accent text-accent-foreground'
          )}
          aria-label={btn.label}
        >
          <RemixIcon name={btn.icon} />
        </IconButton>
      ))}
    </div>
  );
};

const HTMLInput: React.FC<TextInputPropsType> = (props) => {
  const { label, name, value, handleChange } = props || {}

  const [text, setText] = useState(value || '')
  const [debouncedText] = useDebounce(text, 500)

  const extensions = [
    StarterKit.configure({
    paragraph: { HTMLAttributes: { class: 'my-2 text-sm text-foreground leading-relaxed' } },
    bold: { HTMLAttributes: { class: 'text-foreground font-semibold' } },
    strong: { HTMLAttributes: { class: 'text-sm italic text-foreground font-bold' } },
    italic: { HTMLAttributes: { class: 'text-sm text-foreground italic' } },
    bulletList: { HTMLAttributes: { class: 'text-sm text-foreground list-disc pl-4' } },
    orderedList: { HTMLAttributes: { class: 'text-sm text-foreground list-decimal pl-4' } },
    codeBlock: { HTMLAttributes: { class: 'text-sm text-muted-foreground font-mono p-3 my-2 bg-border rounded-lg' } },
    blockquote: { HTMLAttributes: { class: 'text-lg text-muted-foreground italic border-l-4 border-border pl-4' } },
    heading: { HTMLAttributes: { class: `text-xl font-semibold text-foreground` } },    
    h1: { HTMLAttributes: { class: 'text-3xl font-semibold text-foreground' } }
    })
  ]

  const editor = useEditor({
    extensions,
    content: value || '<p></p>', // Set initial content to the value prop
    onUpdate: ({ editor }) => {
      // Trigger handleChange whenever the editor content changes
      setText(editor?.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'w-full focus:outline-none p-2 border border-border rounded-lg border-1 border-border focus:ring-2 focus:ring-ring focus:ring-offset-3',
      },
    },
  })

  useEffect(() => {
    handleChange({
      target: {
        name, 
        value: debouncedText
      }
    })
  }, [debouncedText])  

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      if (value) {
        setText(value);
      }
      isInitialMount.current = false;
    }
  }, [value]);

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  return (
    <div className="w-full prose prose-sm flex flex-col space-y-2">
        { label && <InputLabel label={label} /> }
       <MenuBar editor={editor} />
       <EditorContent editor={editor} />
    </div>
  )
}

export default HTMLInput
