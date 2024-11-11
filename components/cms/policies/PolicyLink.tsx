import React, { useState } from 'react'
import { Drawer, Button } from '../../../components'
import { usePolicies } from '../../../hooks'

type PolicyLinkProps = {
	label: string
	handle: string
}

const PolicyLink: React.FC<PolicyLinkProps> = (props) => {
	const { label, handle } = props || {}

	const { loading, policy, findPolicy } = usePolicies()

	const [open, setOpen] = useState(false)

	const handleClick = async () => {
		setOpen(true)
		await findPolicy(handle)
	}

	return (
		<>
			<Button
				variant="link"
				className="p-2 text-sm text-muted-foreground hover:underline"
				onClick={handleClick}
			>
				{label}
			</Button>
			<Drawer
				loading={loading}
				title={policy?.title}
				open={open}
				handleClose={() => setOpen(false)}
				maxWidth="sm"
			>
				<div className="p-6 text-foreground text-medium whitespace-pre-line">
					{policy?.body}
				</div>
			</Drawer>
		</>
	)
}

export default PolicyLink
