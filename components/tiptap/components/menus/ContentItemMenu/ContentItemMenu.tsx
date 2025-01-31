import { Icon } from '@block-editor/components/ui/Icon'
import { Toolbar } from '@block-editor/components/ui/Toolbar'
import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import { Editor } from '@tiptap/react'

import * as Popover from '@radix-ui/react-popover'
import { Surface } from '@block-editor/components/ui/Surface'
import { DropdownButton } from '@block-editor/components/ui/Dropdown'

import useContentItemActions from './hooks/useContentItemActions'
import { useData } from './hooks/useData'
import { useEffect, useState } from 'react'

export type ContentItemMenuProps = {
  editor: Editor
}

export const ContentItemMenu = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const data = useData()
  const actions = useContentItemActions(editor, data.currentNode, data.currentNodePos)

  useEffect(() => {
    if (menuOpen) {
      editor.commands.setMeta('lockDragHandle', true)
    } else {
      editor.commands.setMeta('lockDragHandle', false)
    }
  }, [editor, menuOpen])

  return (
    <DragHandle
      pluginKey="ContentItemMenu"
      editor={editor}
      onNodeChange={data.handleNodeChange}
      tippyOptions={{
        offset: [-2, 16],
        zIndex: 99,
      }}
    >
      <div className="flex items-center gap-0.5">
        <Toolbar.Button onClick={actions.handleAdd}>
          <Icon name="Plus" />
        </Toolbar.Button>
        <Popover.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Popover.Trigger asChildA>
            <Toolbar.Button>
              <Icon name="GripVertical" />
            </Toolbar.Button>
          </Popover.Trigger>
          <Popover.Content side="bottom" align="start" sideOffset={8}>
            <Surface className="p-2 flex flex-col min-w-[16rem]">
              <Popover.Close>
                <DropdownButton onClick={actions.resetTextFormatting}>
                  <Icon name="RemoveFormatting" />
                  Clear formatting
                </DropdownButton>
              </Popover.Close>
              <Popover.Close>
                <DropdownButton onClick={actions.copyNodeToClipboard}>
                  <Icon name="Clipboard" />
                  Copy to clipboard
                </DropdownButton>
              </Popover.Close>
              <Popover.Close>
                <DropdownButton onClick={actions.duplicateNode}>
                  <Icon name="Copy" />
                  Duplicate
                </DropdownButton>
              </Popover.Close>
              <Toolbar.Divider horizontal />
              <Popover.Close>
                <DropdownButton
                  onClick={actions.deleteNode}
                  className="text-red-500 bg-white hover:bg-white dark:text-white dark:bg-black dark:hover:text-white dark:hover:bg-black bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-20"
                >
                  <Icon name="Trash2" />
                  Delete
                </DropdownButton>
              </Popover.Close>
            </Surface>
          </Popover.Content>
        </Popover.Root>
      </div>
    </DragHandle>
  )
}
