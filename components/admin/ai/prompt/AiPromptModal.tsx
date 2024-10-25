'use client'

import React, { useState } from 'react'
import { Icon, Sheet, IconLoading } from '../../../../components'
import { Tooltip, Button, IconButton } from '../../../core'
import { TextInputPropsType } from '../../../../types'
import AiPromptForm from './AiPromptForm'
import { Sparkles } from 'lucide-react'

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
				<IconButton onClick={() => setOpen(!open)}>
					<Sparkles className="w-5 h-5 text-foreground" />
				</IconButton>
			</Tooltip>
			<Sheet
				title={label}
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						onClick={handleSubmit}
						loading={loading}
						startIcon={!loading && <Icon name="Sparkles" />}
					>
						Generate
					</Button>
				}
			>
				<AiPromptForm open={open} value={prompt} handleChange={handleChange} />
			</Sheet>
		</>
	)
}

export default AiPromptModal
