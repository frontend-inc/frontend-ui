import React, { useState } from 'react'
import { Icon, Drawer, IconLoading } from '../../../../components'
import { Button, Tooltip, IconButton } from '@mui/material'
import { SyntheticEventType, TextInputPropsType } from '../../../../types'
import AiPromptForm from './AiPromptForm'

type AiPromptModalProps = TextInputPropsType & {
	loading?: boolean
	label: string
	handleSubmit: (ev: any) => void
}

const AiPromptModal: React.FC<AiPromptModalProps> = (props) => {
	const { loading = false, label = '', handleSubmit } = props

	const [open, setOpen] = useState(false)
	const [prompt, setPrompt] = useState('')

	const handleChange = (ev) => {
		setPrompt(ev.target.value)
	}

	return (
		<>
			<Tooltip title="Use AI to generate text">
				<IconButton size="small" onClick={() => setOpen(!open)}>
					<Icon name="Sparkles" color="text.primary" />
				</IconButton>
			</Tooltip>
			<Drawer
				title={label}
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={
							loading ? (
								<IconLoading loading={loading} />
							) : (
								<Icon name="Sparkles" color="primary.contrastText" />
							)
						}
					>
						{!loading && `Generate`}
					</Button>
				}
			>
				<AiPromptForm open={open} value={prompt} handleChange={handleChange} />
			</Drawer>
		</>
	)
}

export default AiPromptModal
