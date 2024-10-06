import { Button } from "../../shadcn/ui/button"
import Link from "next/link"
import { ButtonProps } from "../../shadcn/ui/button"
import { LinkProps } from "next/link"
import { ReactNode } from "react"

interface LinkButtonProps extends ButtonProps {
  href: LinkProps["href"]
  children: ReactNode
}

function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button variant='link' asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  )
}

export {
  LinkButton
}