import React, { useState } from 'react'
import { Button } from "@/shadcn/ui/button"
import { Card, CardContent } from "@/shadcn/ui/card"
import MediaBrowser from './MediaBrowser'
import { Search } from "lucide-react"
import { ImageType } from '../../../types'

type MediaInputProps = {
  name: string
  value: ImageType
  objectFit?: 'cover' | 'contain'
  handleAddAttachment: (field: string, id: number) => void
  handleRemoveAttachment: (field: string) => void
}

const MediaInput: React.FC<MediaInputProps> = ({
  name,
  value,
  objectFit = 'cover',
  handleAddAttachment,
  handleRemoveAttachment,
}) => {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const handleSubmit = async (resources: any[]) => {
    const resourceIds = resources.map((res) => res?.id)
    await handleAddAttachment(name, resourceIds[0])
    setOpen(false)
  }

  const handleRemove = async () => {
    await handleRemoveAttachment(name)
    setOpen(false)
  }

  const handleAddClick = () => {
    setOpenEdit(true)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4 space-y-4">
        <div className="flex flex-row gap-2">
          <Button
            variant="secondary"
            onClick={handleAddClick}
            className="flex items-center"
          >
            <Search className="mr-2 h-4 w-4" />
            Browse
          </Button>
        </div>
        <MediaBrowser
          open={openEdit}
          handleClose={() => setOpenEdit(false)}
          handleSubmit={handleSubmit}
        />
      </CardContent>
    </Card>
  )
}

export default MediaInput