'use client'

import React, { useRef, useState, useEffect } from 'react'
import {
	BubbleMenu,
	useEditor,
	EditorContent,
	useCurrentEditor,
} from '@tiptap/react'
import { RemixIcon } from '../..'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { TextInputProps } from '../../../types'
import { cn } from '@nextui-org/react'
import { useDebounce } from 'use-debounce'
import { Button } from '@nextui-org/react'

const MenuBarButton: React.FC<MenuBarButtonProps> = (props) => {
	const { btn, editor } = props || {}
	return (
		<Button
			isIconOnly
			variant="solid"
			className={cn(
				'bg-white hover:bg-black/10',
				btn.isActive && 'bg-black hover:bg-black/90'
			)}
			onPress={btn.action}
			disabled={!editor.can().chain().focus().run()}
			aria-label={btn.label}
		>
			<RemixIcon
				name={btn.icon}
				className={cn('text-black', btn.isActive && 'text-white')}
			/>
		</Button>
	)
}

const MenuBar = ({ editor }) => {
	if (!editor) return null

	const headingLevels = [1, 2, 3, 4, 5, 6]

	const textAlignOptions = [
		{
			label: 'Align Left',
			action: () => editor.chain().focus().setTextAlign('left').run(),
			isActive: editor.isActive({ textAlign: 'left' }),
			icon: 'ri-align-left',
		},
		{
			label: 'Align Center',
			action: () => editor.chain().focus().setTextAlign('center').run(),
			isActive: editor.isActive({ textAlign: 'center' }),
			icon: 'ri-align-center',
		},
		{
			label: 'Align Right',
			action: () => editor.chain().focus().setTextAlign('right').run(),
			isActive: editor.isActive({ textAlign: 'right' }),
			icon: 'ri-align-right',
		},
	]

	const headingOptions = headingLevels.map((level) => ({
		label: `Heading ${level}`,
		action: () => editor.chain().focus().toggleHeading({ level }).run(),
		isActive: editor.isActive('heading', { level }),
		icon: `ri-h-${level}`,
	}))

	const formattingOptions = [
		{
			label: 'Paragraph',
			action: () => editor.chain().focus().setParagraph().run(),
			isActive: editor.isActive('paragraph'),
			icon: 'ri-text',
		},
		{
			label: 'Bold',
			action: () => editor.chain().focus().toggleBold().run(),
			isActive: editor.isActive('bold'),
			icon: 'ri-bold',
		},
		{
			label: 'Italic',
			action: () => editor.chain().focus().toggleItalic().run(),
			isActive: editor.isActive('italic'),
			icon: 'ri-italic',
		},
		{
			label: 'Code Block',
			action: () => editor.chain().focus().toggleCodeBlock().run(),
			isActive: editor.isActive('codeBlock'),
			icon: 'ri-code-box-line',
		},
	]

	const listOptions = [
		{
			label: 'Bullet List',
			action: () => editor.chain().focus().toggleBulletList().run(),
			isActive: editor.isActive('bulletList'),
			icon: 'ri-list-unordered',
		},
		{
			label: 'Ordered List',
			action: () => editor.chain().focus().toggleOrderedList().run(),
			isActive: editor.isActive('orderedList'),
			icon: 'ri-list-ordered',
		},
		{
			label: 'Blockquote',
			action: () => editor.chain().focus().toggleBlockquote().run(),
			isActive: editor.isActive('blockquote'),
			icon: 'ri-double-quotes-l',
		},
	]
	const redoButtons = [
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

	const buttons = [
		...formattingOptions,
		...headingOptions,
		...listOptions,
		...textAlignOptions,
		...redoButtons,
	]

	return (
		<div className="w-full items-start justify-start md:min-w-[800px] p-2 bg-white rounded-2xl shadow-lg flex flex-wrap gap-2 z-50">
			{buttons.map((btn, index) => (
				<MenuBarButton key={index} btn={btn} editor={editor} />
			))}
		</div>
	)
}

const HTMLEditor: React.FC<TextInputProps> = (props) => {
	const { label, name, value, handleChange } = props || {}

	const [text, setText] = useState(value || '')
	const [debouncedText] = useDebounce(text, 500)

	const extensions = [
		StarterKit,
		TextAlign.configure({
			types: ['heading', 'paragraph'],
			alignments: ['left', 'center', 'right', 'justify'],
		}),
	]

	const editor = useEditor({
		extensions,
		content: value || '<p></p>',
		onUpdate: ({ editor }) => {
			setText(editor?.getHTML())
		},
		editorProps: {
			attributes: {
				class:
					'cursor-text w-full prose outline-none focus:outline-none focus:ring-0 focus:outline-none',
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
		<div className="w-full prose flex flex-col space-y-2">
			{editor && (
				<BubbleMenu editor={editor}>
					<MenuBar editor={editor} />
				</BubbleMenu>
			)}
			<EditorContent editor={editor} />
		</div>
	)
}

export default HTMLEditor
