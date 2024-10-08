import React from 'react'
import { Icon } from '../../../components'
import { Stack, Box, Typography } from '../../../tailwind'
import { cn } from "../../../shadcn/lib/utils"

type ShopifyCartTextProps = {
  label: string
  value: string
  icon?: string
}

export default function ShopifyCartText({ label, value, icon }: ShopifyCartTextProps) {
  return (
    <div className="flex flex-row justify-between w-full">
      <Typography variant="body1" color='text.secondary'>
        {label}
      </Typography>
      <Typography variant="body1">
        {value}
      </Typography>
    </div>
  )
}