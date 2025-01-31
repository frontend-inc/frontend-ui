'use client'

import React, { useRef, useState, useEffect } from 'react'
import {
	BubbleMenu,
	useEditor,
	EditorContent,
  useCurrentEditor,
  // @ts-ignore
} from '@tiptap/react'
//@ts-ignore
import { Color } from '@tiptap/extension-color'
//@ts-ignore
import { TextStyle } from '@tiptap/extension-text-style'
import { Surface } from '../../../components/tiptap/components/ui/Surface'
import { Toolbar } from '../../../components/tiptap/components/ui/Toolbar'
import { RemixIcon } from '../..'
//@ts-ignore
import StarterKit from '@tiptap/starter-kit'
//@ts-ignore
import TextAlign from '@tiptap/extension-text-align'
//@ts-ignore
import Link from '@tiptap/extension-link'
import { TextInputProps } from '../../../types'
import { cn } from '@nextui-org/react'
import { useDebounce } from 'use-debounce'
import { Button } from '@nextui-org/react'
import * as Popover from '@radix-ui/react-popover'
import { DropdownButton } from '../../../components/tiptap/components/ui/Dropdown'
import { useTextmenuCommands } from '../../../components/tiptap/components/menus/TextMenu/hooks/useTextmenuCommands'
import { useTextmenuStates } from '../../../components/tiptap/components/menus/TextMenu/hooks/useTextmenuStates'

export const TAILWIND_COLOR_MAP = {
  black: '#000000',
  white: '#ffffff',
	slate: '#64748b',
	gray: '#6b7280',
	zinc: '#71717a',
	neutral: '#737373',
	stone: '#78716c',
	red: '#ef4444',
	orange: '#f97316',
	amber: '#f59e0b',
	yellow: '#eab308',
	lime: '#84cc16',
	green: '#22c55e',
	emerald: '#10b981',
	teal: '#14b8a6',
	cyan: '#06b6d4',
	sky: '#0ea5e9',
	blue: '#3b82f6',
	indigo: '#6366f1',
	violet: '#8b5cf6',
	purple: '#a855f7',
	fuchsia: '#d946ef',
	pink: '#ec4899',
	rose: '#f43f5e',
}

type ButtonType = {
  icon: string
  label: string
  action: () => void
  isActive: boolean
}

type MenuBarButtonProps = {
  button: ButtonType
  editor: any
}

const MenuBarButton: React.FC<MenuBarButtonProps> = (props) => {
	const { button, editor } = props || {}
	return (
		<Button
			isIconOnly
      size="sm"
			variant="solid"      
			className={cn(        
				'bg-white hover:bg-black/10',
				button.isActive && 'bg-black hover:bg-black/90'
			)}
			onPress={button.action}
			disabled={!editor.can().chain().focus().run()}
			aria-label={button.label}
		>
			<RemixIcon
				name={button.icon}
				className={cn('text-black', button.isActive && 'text-white')}
			/>
		</Button>
	)
}

type MenuPopoverProps = {
  isActive: boolean
  icon: string
  buttons: ButtonType[]
  editor: any
}

const MenuPopover: React.FC<MenuPopoverProps> = (props) => {

  const { icon, buttons, editor } = props || {}

  const [open, setOpen] = useState(false)

  return(
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Toolbar.Button
          className={cn(
            'bg-white hover:bg-black/10 ',
            props.isActive && 'bg-black hover:bg-black/90 '
          )}
        >
          <RemixIcon 
            name={ icon } 
            className={cn('text-black', props.isActive && 'text-white')}
          />
        </Toolbar.Button>
      </Popover.Trigger>
      <Popover.Content side="bottom" align="start" sideOffset={8}>
        <Surface className="p-2 flex flex-col min-w-[16rem]">
          { buttons.map((button, index) => (
          <Popover.Close key={ index }>
            <DropdownButton onClick={button.action}>
              <RemixIcon name={ button.icon } />
              { button.label }
            </DropdownButton>
          </Popover.Close>
          ))}
        </Surface>
      </Popover.Content>
    </Popover.Root>           
  )
}

type MenuColorPickerProps = {
  activeColor: string
  buttons: ButtonType[]
}

const MenuColorPicker: React.FC<MenuColorPickerProps> = (props) => {

  const { activeColor, buttons } = props || {}

  const [open, setOpen] = useState(false)
  return(
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Toolbar.Button>
          <div 
            className={ cn(
              'w-6 h-6 rounded-xl',
            )}             
            style={{
              backgroundColor: activeColor || 'black'
            }}
          />
        </Toolbar.Button>
      </Popover.Trigger>
      <Popover.Content side="bottom" align="start" sideOffset={8}>
        <Surface className="p-2 grid grid-cols-4 min-w-[16rem]">
          { buttons.map((button, index) => (
             <Popover.Close key={ index }>
              <DropdownButton onClick={button.action}>
                <div 
                  className='w-6 h-6 rounded-xl' 
                  style={{
                    backgroundColor: button.color 
                  }}
                />
            </DropdownButton>
          </Popover.Close>
          ))}          
        </Surface>
      </Popover.Content>
    </Popover.Root>    
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
    {
      label: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
      icon: 'ri-double-quotes-l',
    }
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
	]

  const colorButtons = Object.keys(TAILWIND_COLOR_MAP).map((color) => ({
    action: () => commands.onChangeColor(TAILWIND_COLOR_MAP[color]),
    isActive: editor.isActive('textStyle', { color: TAILWIND_COLOR_MAP[color] }),
    color: TAILWIND_COLOR_MAP[color],
  }))

  const getActiveHeaderIcon = () => {
    const activeHeader = headingOptions.find((option) => option.isActive)
    return activeHeader ? activeHeader.icon : 'ri-heading'
  }

  const commands = useTextmenuCommands(editor)
  const states = useTextmenuStates(editor)

  const getActiveFormats = (editor) => ({
      h1: editor.isActive('heading', { level: 1 }),
      h2: editor.isActive('heading', { level: 2 }),
      h3: editor.isActive('heading', { level: 3 }),
      h4: editor.isActive('heading', { level: 4}),
      h5: editor.isActive('heading', { level: 5 }),
      h6: editor.isActive('heading', { level: 6 }),
      bold: editor.isActive('bold'),
      italic: editor.isActive('italic'),
      codeBlock: editor.isActive('codeBlock'),
      bulletList: editor.isActive('bulletList'),
      orderedList: editor.isActive('orderedList'),
      blockquote: editor.isActive('blockquote'),
      textAlignLeft: editor.isActive({ textAlign: 'left' }),
      textAlignCenter: editor.isActive({ textAlign: 'center' }),
      textAlignRight: editor.isActive({ textAlign: 'right' }),
      ...colorButtons.reduce((acc, button) => {
        acc[button.color] = button.isActive;
        return acc;
      }, {}),
  })
    
  const [activeFormats, setActiveFormats] = useState({});

  useEffect(() => {
    if (!editor) return;
  
    const updateActiveFormats = () => {
      setActiveFormats(getActiveFormats(editor));
    };
  
    editor.on("selectionUpdate", updateActiveFormats);
    editor.on("transaction", updateActiveFormats);
  
    return () => {
      editor.off("selectionUpdate", updateActiveFormats);
      editor.off("transaction", updateActiveFormats);
    };
  }, [editor]);
    
	return (
		<div 
      className="w-full flex gap-2 items-start justify-start p-2 bg-white rounded-2xl shadow-lg z-50"
      style={{
        width: "600px"
      }}
    >
      <MenuPopover 
        icon={ getActiveHeaderIcon() } 
        buttons={headingOptions} 
        editor={editor} 
        isActive={
          activeFormats['h1'] ||
          activeFormats['h2'] ||
          activeFormats['h3'] ||
          activeFormats['h4'] ||
          activeFormats['h5'] ||
          activeFormats['h6']
        } 
      />
			{formattingOptions.map((button, index) => (
				<MenuBarButton key={index} button={button} editor={editor} />
			))} 
      { listOptions.map((button, index) => (
        <MenuBarButton key={index} button={button} editor={editor} />
      ))}
      { textAlignOptions.map((button, index) => (
        <MenuBarButton key={index} button={button} editor={editor} />
      ))}      
      <MenuColorPicker 
        editor={editor} 
        activeColor={states.currentColor} 
        buttons={colorButtons} 
      />
		</div>
	)
}

const HTMLEditor: React.FC<TextInputProps> = (props) => {
	const { label, name = 'html', value, handleChange } = props || {}

	const [text, setText] = useState(value || '')
	const [debouncedText] = useDebounce(text, 500)

	const extensions = [
		StarterKit,
    TextStyle,
    Color.configure({ types: ['textStyle'] }),
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
        <div className='w-full md:w-[600px] md:min-w-[600px] z-50'>
          <BubbleMenu editor={editor}>
            <MenuBar editor={editor} />
          </BubbleMenu>
        </div>
			)}
			<EditorContent editor={editor} />
		</div>
	)
}

export default HTMLEditor
