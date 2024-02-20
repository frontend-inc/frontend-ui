import React from 'react'

export type SyntheticEvent =
	| React.ChangeEvent<HTMLInputElement>
	| {
			target: {
				name: string
				value: any
			}
	  }
