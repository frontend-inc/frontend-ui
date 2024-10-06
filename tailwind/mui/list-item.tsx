import React, { forwardRef } from "react"
import { cn } from "../../shadcn/lib/utils"

// ListItem Component
const ListItem = forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "py-2 px-4 flex items-center text-sm",
      className
    )}
    {...props}
  />
))
ListItem.displayName = "ListItem"

// ListItemText Component
const ListItemText = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    primary?: React.ReactNode
    secondary?: React.ReactNode
  }
>(({ className, primary, secondary, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col", className)}
    {...props}
  >
    {primary && (
      <span className="text-sm font-medium leading-none">{primary}</span>
    )}
    {secondary && (
      <span className="text-xs text-muted-foreground mt-1">{secondary}</span>
    )}
  </div>
))
ListItemText.displayName = "ListItemText"

// ListItemButton Component
const ListItemButton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full items-center py-2 px-4 text-sm rounded-md transition-colors hover:bg-accent focus:bg-accent focus:outline-none",
      className
    )}
    role="button"
    tabIndex={0}
    {...props}
  />
))
ListItemButton.displayName = "ListItemButton"

// ListItemIcon Component
const ListItemIcon = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mr-2 h-4 w-4 shrink-0", className)}
    {...props}
  />
))
ListItemIcon.displayName = "ListItemIcon"

export { 
  ListItem, 
  ListItemText, 
  ListItemButton, 
  ListItemIcon 
}