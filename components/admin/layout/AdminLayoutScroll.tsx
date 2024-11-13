'use client'

import React from 'react'
import { ScrollArea } from 'frontend-shadcn'

type AdminLayoutScrollProps = {
	children: React.ReactNode
	className?: string
}

const AdminLayoutScroll: React.FC<AdminLayoutScrollProps> = (props) => {
	const { children, className } = props || {}

	return <ScrollArea className={className}>{children}</ScrollArea>
}

export default AdminLayoutScroll
