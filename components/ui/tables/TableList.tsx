import React from 'react'
import { 
  Box, 
  TableBody, 
  Typography,
  TableRow as MuiTableRow, 
  TableCell as MuiTableCell  
} from '@mui/material'
import {
	TableContainer,
	TableHeaders,
	TableRow,
	Pagination,
  Placeholder
} from '../../../components'

type TableProps = {
  title?: string
	loading: boolean
	fields: Array<any>
	rows: Array<any>
  toolbar?: React.ReactNode
	enableBorder?: boolean
  disableBorderRadius?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean  
	handleClick?: (item: any) => void
	handleEdit?: (row: any) => void
  handleDelete?: (row: any) => void	
	page?: number
	perPage?: number
	numPages?: number
  numResults?: number
	totalCount?: number
	query: any
	styles?: any
  selected?: any
  selectedIds?: any
  handleSelect?: (row: any) => void
  handleSelectAll?: () => void
  handleSort: (field: any) => void  
  handlePaginate: (e: any, page: number) => void
}

const TableList: React.FC<TableProps> = (props) => {

	const {
    title,
    toolbar,
		loading,
		fields,
		rows,
    enableBorder,
    disableBorderRadius,
		enableSelect = false,
		enableEdit = false,
    enableDelete = false,
		handleClick,
		handleEdit,
    handleDelete,
		query,
    selected,
    selectedIds,
    handleSelect,
    handleSelectAll,
    handleSort,
    handlePaginate,
    page,
    perPage,
    numPages,
    numResults,
    totalCount,
    styles={}
	} = props

	return (
    <Box 
      sx={{
        ...sx.root,
        ...(enableBorder && sx.rootBorder),
        ...(disableBorderRadius && sx.disableBorderRadius),
      }}
    >
      <Box p={1} sx={ sx.toolbar }>
        { title && (
          <Typography variant="subtitle1" color='text.primary'>
            { title }
          </Typography>
        )}
        { toolbar && toolbar }
      </Box>
			<TableContainer styles={styles}>
        <TableBody>
          <TableHeaders
            enableEdit={enableEdit}
            enableSelect={enableSelect}
            enableDelete={enableDelete}          
            fields={fields}
            sortBy={query?.sort_by}
            sortDirection={query?.sort_direction}
            checked={selected?.length > 0 && selected?.length === rows?.length}
            handleSort={handleSort}
            handleSelectAll={handleSelectAll}
          />
					{rows?.map((row) => (
						<TableRow
							key={row?.id}
							row={row}
							fields={fields}
							selectedIds={selectedIds}
							enableSelect={enableSelect}
							enableEdit={enableEdit}
              enableDelete={enableDelete}
							handleClick={handleClick}
							handleEdit={handleEdit}
              handleDelete={handleDelete}
							handleSelect={handleSelect}
						/>
					))}
          { !loading && rows?.length == 0 && (
            <MuiTableRow>
              <MuiTableCell colSpan={fields?.length + 1}>
                <Placeholder
                  icon="Search"
                  title="No results found"
                  description="Try changing your search query."
                />
              </MuiTableCell>
            </MuiTableRow>
          )}
				</TableBody>
			</TableContainer>
			<Pagination
				page={page}
        perPage={perPage}
				numPages={numPages}
				totalCount={totalCount}
        numResults={numResults}
				loading={loading}
				handlePaginate={handlePaginate}
			/>
		</Box>
	)
}

export default TableList


const sx = {
	root: {
    overflow: 'hidden',
    borderRadius: theme => `${theme.shape.borderRadius}px`,
	},
  rootBorder: {
    border: '1px solid',
		borderColor: 'divider',
  },
  disableBorderRadius: {
    borderRadius: 0
  },
  toolbar: {
    minHeight: 40,
    width: "100%"
  }
}
