"use client"

import * as React from "react"
import { cn } from "frontend-shadcn"
import {
  NavigationMenu as ShadcnNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "frontend-shadcn"

export function NavigationMenu({ links, handleClick }) {

  return (
    <ShadcnNavigationMenu>
      <NavigationMenuList>
        {links.map((node) => (
          <React.Fragment key={node.id}>
            <MenuNode node={node} handleClick={handleClick} />
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </ShadcnNavigationMenu>
  )
}

function MenuNode({ node, handleClick }) {
  const hasChildren = node.children && node.children.length > 0

  return (
    <NavigationMenuItem>
      {hasChildren ? (
        <>
          <NavigationMenuTrigger>
            <span className="text-md font-medium text-foreground">
              {node.label}
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              {node.children.map((child) => (
                <ListItem
                  key={child.id}
                  href={child.url}
                  title={child.label}
                  onClick={() => handleClick?.(child)}
                >
                  {child.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => handleClick?.(node)}
          >
            <span className="text-md font-medium text-primary">
              {node.label}
            </span>
          </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title?: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors " +
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-1">
              {title && (
                <div className="text-sm text-foreground font-medium leading-none">{title}</div>
              )}
              {children && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              )}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
