import React, { useRef, useState, useEffect } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from 'frontend-shadcn';
import { BubbleMenu, useEditor, EditorProvider, EditorContent, useCurrentEditor } from '@tiptap/react'
import { IconButton, InputLabel, RemixIcon } from '../..'
import { Separator } from 'frontend-shadcn'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { TextInputPropsType } from '../../../types'
import { cn } from 'frontend-shadcn'
import { useDebounce } from 'use-debounce'

const MenuBar = ({ editor }) => {

  if (!editor) return null;

  const headingLevels = [1, 2, 3]

  const textAlignOptions = [
    { label: 'Align Left', action: () => editor.chain().focus().setTextAlign('left').run(), isActive: editor.isActive({ textAlign: 'left' }), icon: 'ri-align-left' },
    { label: 'Align Center', action: () => editor.chain().focus().setTextAlign('center').run(), isActive: editor.isActive({ textAlign: 'center' }), icon: 'ri-align-center' },
    { label: 'Align Right', action: () => editor.chain().focus().setTextAlign('right').run(), isActive: editor.isActive({ textAlign: 'right' }), icon: 'ri-align-right' },
  ];

  const headingOptions = headingLevels.map(level => ({
    label: `Heading ${level}`,
    action: () => editor.chain().focus().toggleHeading({ level }).run(),
    isActive: editor.isActive('heading', { level }),
    icon: `ri-h-${level}`,
  }));

  const formattingOptions = [
    { label: 'Paragraph', action: () => editor.chain().focus().setParagraph().run(), isActive: editor.isActive('paragraph'), icon: 'ri-text' },
    { label: 'Bold', action: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive('bold'), icon: 'ri-bold' },
    { label: 'Italic', action: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive('italic'), icon: 'ri-italic' },
    { label: 'Code Block', action: () => editor.chain().focus().toggleCodeBlock().run(), isActive: editor.isActive('codeBlock'), icon: 'ri-code-box-line' },
  ];

  const listOptions = [
    { label: 'Bullet List', action: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive('bulletList'), icon: 'ri-list-unordered' },
    { label: 'Ordered List', action: () => editor.chain().focus().toggleOrderedList().run(), isActive: editor.isActive('orderedList'), icon: 'ri-list-ordered' },
    { label: 'Blockquote', action: () => editor.chain().focus().toggleBlockquote().run(), isActive: editor.isActive('blockquote'), icon: 'ri-double-quotes-l' },
  ];
  const redoButtons = [
    { action: () => editor.chain().focus().undo().run(), isActive: false, icon: 'ri-arrow-go-back-line', label: 'Undo' },
    { action: () => editor.chain().focus().redo().run(), isActive: false, icon: 'ri-arrow-go-forward-line', label: 'Redo' },
  ];


  return (
    <div className="w-full md:min-w-[800px] p-2 bg-white rounded-xl shadow-lg flex flex-wrap space-x-2">
      {formattingOptions.map((btn, index) => (
        <IconButton
          key={index}
          onClick={btn.action}
          disabled={!editor.can().chain().focus().run()}
          className={cn(
            btn.isActive && 'bg-accent text-black',
          )}
          aria-label={btn.label}
        >
          <RemixIcon name={btn.icon} />
        </IconButton>
      ))}
      {headingOptions.map((btn, index) => (
        <IconButton
          key={index}
          onClick={btn.action}
          disabled={!editor.can().chain().focus().run()}
          className={cn(
            btn.isActive && 'bg-accent text-black',
          )}
          aria-label={btn.label}
        >
          <RemixIcon name={btn.icon} />
        </IconButton>
      ))}
      {listOptions.map((btn, index) => (
        <IconButton
          key={index}
          onClick={btn.action}
          disabled={!editor.can().chain().focus().run()}
          className={cn(
            btn.isActive && 'bg-accent text-black',
          )}
          aria-label={btn.label}
        >
          <RemixIcon name={btn.icon} />
        </IconButton>
      ))}
      { textAlignOptions.map((btn, index) => (
        <IconButton
          key={index}
          onClick={btn.action}
          disabled={!editor.can().chain().focus().run()}
          className={cn(
            btn.isActive && 'bg-accent text-black',
          )}
          aria-label={btn.label}
        >
          <RemixIcon name={btn.icon} />
        </IconButton>
      ))}
      {redoButtons.map((btn, index) => (
        <IconButton
          key={index}
          onClick={btn.action}
          disabled={!editor.can().chain().focus().run()}
          className={cn(
            btn.isActive && 'bg-accent text-black',
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
    StarterKit,
    TextAlign.configure({
      types: ['heading','paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
    }),
    Link.configure({
      openOnClick: false,
      autolink: true,
      defaultProtocol: 'https',
      protocols: ['http', 'https'],
      isAllowedUri: (url, ctx) => {
        try {
          // construct URL
          const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

          // use default validation
          if (!ctx.defaultValidate(parsedUrl.href)) {
            return false
          }

          // disallowed protocols
          const disallowedProtocols = ['ftp', 'file', 'mailto']
          const protocol = parsedUrl.protocol.replace(':', '')

          if (disallowedProtocols.includes(protocol)) {
            return false
          }

          // only allow protocols specified in ctx.protocols
          const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

          if (!allowedProtocols.includes(protocol)) {
            return false
          }

          // disallowed domains
          const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
          const domain = parsedUrl.hostname

          if (disallowedDomains.includes(domain)) {
            return false
          }

          // all checks have passed
          return true
        } catch (error) {
          return false
        }
      },
      shouldAutoLink: url => {
        try {
          // construct URL
          const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

          // only auto-link if the domain is not in the disallowed list
          const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
          const domain = parsedUrl.hostname

          return !disallowedDomains.includes(domain)
        } catch (error) {
          return false
        }
      },
    }),
  ]  
  
  const editor = useEditor({
    extensions,
    content: value || '<p></p>', 
    onUpdate: ({ editor }) => {      
      setText(editor?.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'cursor-text w-full prose outline-none focus:outline-none focus:ring-0 focus:outline-none',
      },
    },
  })

  useEffect(() => {
    if(handleChange){
      handleChange({
        target: {
          name, 
          value: debouncedText
        }   
      })
    }
  }, [handleChange, debouncedText])  

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
    <div className="w-full prose flex flex-col space-y-2">
       { editor && (
        <BubbleMenu editor={editor}>
          <MenuBar editor={editor} />              
          </BubbleMenu>    
        )}
       <EditorContent editor={editor} />
    </div>
  )
}

export default HTMLInput

