import React, { useState, useEffect } from 'react'
import { useDocuments } from '../../../hooks'
import { useSelected } from '../../../hooks'
import { Drawer, SearchInput } from '../../../components'
import { Button, CircularProgress, List } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import DocumentListItem from './DocumentListItem'

type DocumentListDrawerProps = {
	open: boolean
	field: any
	appId?: string // router type is array
	handleSubmit: (items: any[]) => void
	handleClose: () => void
	enableMultipleSelect?: boolean
}

const DocumentListDrawer: React.FC<DocumentListDrawerProps> = (props) => {
	const {
		open,
		field,
		handleSubmit,
		handleClose,
		enableMultipleSelect = false,
	} = props

	const [keywords, setKeywords] = useState('')

	const { selected, selectedIds, setSelected, handleSelect, handleClear } =
		useSelected()

	const { loading, documents, findDocuments, loadMore, page, numPages } =
		useDocuments({
			contentType: field?.foreign_collection?.name,
		})

	const handleSelectClick = (document) => {
		if (enableMultipleSelect) {
			handleSelect(document)
		} else {
			setSelected([document])
		}
	}

	const handleAddClick = () => {
		handleSubmit(selected)
		setKeywords('')
		handleClear()
	}

	const handleKeywordChange = (e) => {
		setKeywords(e.target.value)
	}

	const handleSearch = () => {
		findDocuments({
			keywords: keywords,
			page: 1,
		})
	}

	const handleLoadMore = async () => {
		await loadMore()
	}

	const handleLoadDocuments = async () => {
		await findDocuments({
			page: 1,
		})
	}

	useEffect(() => {
		if (open && field) {
			handleLoadDocuments()
		}
	}, [open, field])

	return (
		<Drawer
			open={open}
			title={`Add ${field?.foreign_collection?.singular_name}`}
			handleClose={handleClose}
			buttons={
				<Button
					fullWidth
					variant="contained"
					disabled={!selected}
					onClick={handleAddClick}
				>
					Add
				</Button>
			}
		>
			<SearchInput
				name="keywords"
				handleChange={handleKeywordChange}
				value={keywords}
				handleSearch={handleSearch}
				placeholder={`Search ${field?.foreign_collection?.plural_name}...`}
			/>
			<List>
				{documents?.map((document, idx) => (
					<DocumentListItem
						key={idx}
						document={document}
						selected={selectedIds.includes(document?.id)}
						handleClick={() => handleSelectClick(document)}
					/>
				))}
			</List>
			{numPages > page && (
				<Button
					fullWidth
					onClick={handleLoadMore}
					endIcon={
						loading ? <CircularProgress disableShrink /> : <ExpandMore />
					}
				>
					Load More
				</Button>
			)}
		</Drawer>
	)
}

export default DocumentListDrawer
