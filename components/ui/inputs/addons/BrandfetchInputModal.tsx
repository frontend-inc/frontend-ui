import React, { useState } from 'react'
import { Button, Stack, Box, Collapse } from '@mui/material'
import { Image, InputLabel, Drawer, BrandfetchInput } from '../../..'

type BrandfetchInputProps = {
	label?: string
	name: string
	value: string
	direction?: 'row' | 'column'
	handleChange: (e: any) => void
}

const BrandfetchInputModal: React.FC<BrandfetchInputProps> = (props) => {
	const { label = 'Logo', name, value, handleChange } = props || {}

	const [open, setOpen] = useState(false)

	const handleBrandChange = (storage: any) => {
		console.log('storage', storage)
		handleChange({
			target: {
				name,
				value: storage?.url,
			},
		})
		setOpen(false)
	}

	const handleDelete = () => {
		handleChange({ target: { name, value: '' } })
	}

	return (
		<>
			<Stack direction="row" spacing={0} alignItems="flex-start">
				<InputLabel label={label} />
				<Stack direction="column" spacing={1}>
					<Collapse in={Boolean(value)}>
						<Image
							src={value}
							height={128}
							width={128}
							alt="logo"
							objectFit="contain"
							enableDelete
							handleDelete={handleDelete}
						/>
					</Collapse>
					<Box>
						<Button
							onClick={() => setOpen(true)}
							color="secondary"
							variant="contained"
						>
							Browse
						</Button>
					</Box>
				</Stack>
			</Stack>
			<Drawer open={open} handleClose={() => setOpen(false)}>
				<BrandfetchInput onComplete={handleBrandChange} />
			</Drawer>
		</>
	)
}

export default BrandfetchInputModal
