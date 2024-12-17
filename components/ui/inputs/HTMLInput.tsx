// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react'
import {
	useEditor,
	EditorProvider,
	EditorContent,
	useCurrentEditor,
} from '@tiptap/react'
import { IconButton, InputLabel, RemixIcon } from '../..'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import CodeBlock from '@tiptap/extension-code-block'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Blockquote from '@tiptap/extension-blockquote'
import BubbleMenu from '@tiptap/extension-bubble-menu'
import { TextInputPropsType } from '../../../types'
import { cn } from 'frontend-shadcn'
import { useDebounce } from 'use-debounce'

const MenuBar = (props) => {
	const { editor } = props || {}
	//const { editor } = useCurrentEditor();

	if (!editor) return null

	const buttons = [
		{
			action: () => editor.chain().focus().setParagraph().run(),
			isActive: editor.isActive('paragraph'),
			icon: 'ri-text',
			label: 'Paragraph',
		},
		{
			action: () => editor.chain().focus().toggleBold().run(),
			isActive: editor.isActive('bold'),
			icon: 'ri-bold',
			label: 'Bold',
		},
		{
			action: () => editor.chain().focus().toggleItalic().run(),
			isActive: editor.isActive('italic'),
			icon: 'ri-italic',
			label: 'Italic',
		},
		{
			action: () => editor.chain().focus().toggleCodeBlock().run(),
			isActive: editor.isActive('codeBlock'),
			icon: 'ri-code-box-line',
			label: 'Code Block',
		},
		...[1, 2, 3, 4, 5, 6].map((level) => ({
			action: () => editor.chain().focus().toggleHeading({ level }).run(),
			isActive: editor.isActive('heading', { level }),
			icon: `ri-h-${level}`,
			label: `H${level}`,
		})),
		{
			action: () => editor.chain().focus().toggleBulletList().run(),
			isActive: editor.isActive('bulletList'),
			icon: 'ri-list-unordered',
			label: 'Bullet List',
		},
		{
			action: () => editor.chain().focus().toggleOrderedList().run(),
			isActive: editor.isActive('orderedList'),
			icon: 'ri-list-ordered',
			label: 'Ordered List',
		},
		{
			action: () => editor.chain().focus().toggleBlockquote().run(),
			isActive: editor.isActive('blockquote'),
			icon: 'ri-double-quotes-l',
			label: 'Blockquote',
		},
		{
			action: () => editor.chain().focus().setTextAlign('left').run(),
			isActive: editor.isActive({ textAlign: 'left' }),
			icon: 'ri-align-left',
			label: 'Align Left',
		},
		{
			action: () => editor.chain().focus().setTextAlign('center').run(),
			isActive: editor.isActive({ textAlign: 'center' }),
			icon: 'ri-align-center',
			label: 'Align Center',
		},
		{
			action: () => editor.chain().focus().setTextAlign('right').run(),
			isActive: editor.isActive({ textAlign: 'right' }),
			icon: 'ri-align-right',
			label: 'Align Right',
		},
		{
			action: () => editor.chain().focus().undo().run(),
			isActive: false,
			icon: 'ri-arrow-go-back-line',
			label: 'Undo',
		},
		{
			action: () => editor.chain().focus().redo().run(),
			isActive: false,
			icon: 'ri-arrow-go-forward-line',
			label: 'Redo',
		},
	]

	return (
		<div className="flex flex-wrap gap-2 mb-4">
			{buttons.map((btn, index) => (
				<IconButton
					key={index}
					onClick={btn.action}
					disabled={!editor.can().chain().focus().run()}
					className={cn(
            btn.isActive && 'bg-primary text-primary-foreground'
          )}
					aria-label={btn.label}
				>
					<RemixIcon
            name={btn.icon}
            className={cn(
              'text-foreground', 
              btn.isActive && 'text-primary-foreground'
            )}
          />
				</IconButton>
			))}
		</div>
	)
}

const HTMLInput: React.FC<TextInputPropsType> = (props) => {
	const { label, name, value, handleChange } = props || {}

	const [text, setText] = useState(value || '')
	const [debouncedText] = useDebounce(text, 500)

	// You can manually add css classes to the extensions
	// heading: { HTMLAttributes: { class: `pt-8 pb-4 text-2xl font-semibold text-muted-foreground` } },

	const extensions = [
		StarterKit,
		TextAlign.configure({
			types: ['heading', 'paragraph'],
			alignments: ['left', 'center', 'right', 'justify'],
		}),
		BubbleMenu.configure({
			pluginKey: 'bubbleMenu',
			element: document.createElement('div'),
		}),
	]

	const editor = useEditor({
		extensions,
		content: value || '<p></p>', // Set initial content to the value prop
		onUpdate: ({ editor }) => {
			// Trigger handleChange whenever the editor content changes
			setText(editor?.getHTML())
		},
		editorProps: {
			attributes: {
				class:
					'w-full prose prose-sm focus:outline-none p-2 border border-border rounded-lg border-1 border-border focus:ring-2 focus:ring-ring focus:ring-offset-3',
			},
		},
	})

	useEffect(() => {
		handleChange({
			target: {
				name,
				value: debouncedText,
			},
		})
	}, [debouncedText])

	const isInitialMount = useRef(true)
	useEffect(() => {
		if (isInitialMount.current) {
			if (value) {
				setText(value)
			}
			isInitialMount.current = false
		}
	}, [value])

	useEffect(() => {
		if (editor && editor.getHTML() !== value) {
			editor.commands.setContent(value)
		}
	}, [value, editor])

	return (
		<div className="w-full prose prose-sm flex flex-col space-y-2">
			{label && <InputLabel label={label} />}
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	)
}

export default HTMLInput
