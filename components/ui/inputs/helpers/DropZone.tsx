"use client"

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud, DownloadCloud } from 'lucide-react'

type DropZoneProps = {
  onDrop: (file: File, preview: any) => Promise<void>
  label?: string
  dropLabel?: string
}

const DropZone: React.FC<DropZoneProps> = ({ 
  onDrop, 
  label = 'Upload file', 
  dropLabel = 'Drop file here' 
}) => {
  const [loading, setLoading] = useState(false)

  const handleOnDrop = useCallback((files: File[]) => {
    const reader = new FileReader()
    const file = files[0]
    reader.onload = async (e) => {
      const preview = {
        src: e.target?.result,
        name: file.name,
        size: file.size,
        type: file.type,
      }
      setLoading(true)
      try {
        await onDrop(file, preview)
      } catch (error) {
        console.error('Error uploading file:', error)
        // You might want to add some error handling UI here
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }, [onDrop])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleOnDrop,
  })

  return (
    <div 
      {...getRootProps()} 
      className="m-px p-4 flex flex-col justify-center items-center rounded border-2 border-gray-300 bg-white text-center hover:m-0 hover:border-3 hover:border-blue-500 hover:cursor-pointer transition-all duration-300"
    >
      <input {...getInputProps()} />
      {loading ? (
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      ) : (
        <>
          {isDragActive ? (
            <DownloadCloud className="text-gray-400 w-8 h-8" />
          ) : (
            <UploadCloud className="text-gray-400 w-8 h-8" />
          )}
          <p className="mt-2 text-sm text-gray-500">
            {isDragActive ? dropLabel : label}
          </p>
        </>
      )}
    </div>
  )
}

export default DropZone