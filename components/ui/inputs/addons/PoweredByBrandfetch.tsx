'use client'

import React from 'react'
import Link from 'next/link'

export default function PoweredByBrandfetch() {
	return (
		<div className="flex items-start justify-center space-x-1">
			<div className="text-sm text-muted-foreground">Powered by</div>
        <Link
					href="https://brandfetch.io"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm hover:underline flex items-center text-foreground"
				>
          Brandfetch
        </Link>					
		</div>
	)
}
