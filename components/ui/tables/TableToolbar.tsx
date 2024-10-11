import React, { useState, useEffect } from 'react'
import { SearchInput } from '../../../components'
import { IconButton, Hidden, Badge, Button } from '../../../tailwind'
import { Edit, Filter, Trash } from 'lucide-react'
import { TableFilterButton } from '../../../components'

type TableToolbarProps = {
  loading?: boolean
  selected: any[]
  query: any
  enableDelete?: boolean
  enableEdit?: boolean
  handleKeywordChange: (e: any) => void
  handleKeywordSearch: (term: string) => void
  handleFilter: (ev: any) => void
  handleEdit?: (items: any[]) => void
  handleDelete?: (items: any[]) => void
  handleClearQuery: () => void
  handlePublish?: (items: any[]) => void
  handleUnpublish?: (items: any[]) => void
  secondaryActions?: React.ReactNode
}

const TableToolbar: React.FC<TableToolbarProps> = (props) => {
  const {
    loading,
    selected,
    query,
    enableDelete = false,
    enableEdit = false,
    handleKeywordChange,
    handleKeywordSearch,
    handleFilter,
    handleEdit,
    handleDelete,
    handlePublish,
    handleUnpublish,
    handleClearQuery,
    secondaryActions,
  } = props

  const [badgeCount, setBadgeCount] = useState(0)

  useEffect(() => {
    if (query?.filters) {
      setBadgeCount(Object.keys(query.filters)?.length)
    } else {
      setBadgeCount(0)
    }
  }, [query?.filters])

  return (
    <div className="flex flex-row justify-between items-center w-full sm:w-auto">
      <div className="flex flex-row justify-start items-center w-full gap-2.5">
        <div>
          <SearchInput
            value={query?.keywords}
            handleChange={handleKeywordChange}
            handleSearch={handleKeywordSearch}
          />
        </div>
        <Hidden mdDown>
          <div className="flex flex-row justify-start items-center">
            <TableFilterButton
              loading={loading}
              query={query}
              handleClick={handleFilter}
              badgeCount={badgeCount}
              handleClearFilters={handleClearQuery}
            />
          </div>
        </Hidden>
      </div>
      <div className="w-60 flex flex-row justify-end items-center">
        <div className="flex flex-row justify-start items-center">
          <Hidden mdDown>
            <div className="flex flex-row space-x-1">
              {selected?.length > 0 && (
                <>
                  {enableDelete && (
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => handleDelete(selected)}
                    >
                      Delete
                    </Button>
                  )}
                  {enableEdit && (
                    <>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handlePublish(selected)}
                      >
                        Publish
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleUnpublish(selected)}
                      >
                        Unpublish
                      </Button>
                    </>
                  )}
                </>
              )}
              {secondaryActions && secondaryActions}
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className="flex flex-row justify-start items-center">
              <Badge
                badgeContent={badgeCount}
              >
                <IconButton onClick={handleFilter}>
                  <Filter className="w-5 h-5 text-foreground" />
                </IconButton>
              </Badge>
              {selected?.length > 0 && (
                <>
                  {enableDelete && (
                    <IconButton onClick={handleDelete}>
                      <Trash className="w-5 h-5 text-foreground" />
                    </IconButton>
                  )}
                  {enableEdit && (
                    <IconButton onClick={handleEdit}>
                      <Edit className="w-5 h-5 text-foreground" />
                    </IconButton>
                  )}
                </>
              )}
            </div>
          </Hidden>
        </div>
      </div>
    </div>
  )
}

export default TableToolbar