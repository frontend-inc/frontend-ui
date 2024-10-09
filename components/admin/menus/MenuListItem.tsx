import React from 'react'
import { cn } from "../../../shadcn/lib/utils"
import { Button } from "../../../shadcn/ui/button"
import { Typography } from '../../../tailwind'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../shadcn/ui/dropdown-menu"
import { MoreVertical, Pencil, Trash } from "lucide-react"

interface SidebarMenuItemProps {
  title: string
  secondaryActions?: React.ReactNode
  handleClick: () => void
  handleEdit?: () => void
  handleDelete?: () => void
}

export default function SidebarMenuItem({ title, secondaryActions, handleClick, handleEdit, handleDelete }: SidebarMenuItemProps) {
  return (
    <div className="flex items-center justify-between py-2 pl-4 px-2 hover:bg-accent rounded-md group">
      <button onClick={ handleClick } className="w-full focus:outline-none">
        <Typography variant="body2">
          {title}
        </Typography>
      </button>
        {(handleEdit || handleDelete) && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            { secondaryActions }
            { handleEdit && (
            <DropdownMenuItem onClick={handleEdit}>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            )}
            { handleDelete && (
            <DropdownMenuItem onClick={handleDelete}>
              <Trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}