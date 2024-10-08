import React, { useState, useContext } from 'react'
import { Typography, Button } from '../../../tailwind'
import { truncate } from '../../../helpers'
import { ShopifyProductType } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import SwipeableShopifyProductImages from './images/SwipeableShopifyProductImages'
import { ShopifyProductModal, ShopifyAddToCartButton } from '..'
import { OkendoStarRating } from '../../addons'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyProductCardProps = {
  product: ShopifyProductType
  handleClick?: () => void
  buttonText?: string
  height?: number
  width?: number
  enableBorder?: boolean
  enableAddToCart?: boolean
  enableQuantity?: boolean
  enableQuickShop?: boolean
  enableOkendoStarRating?: boolean
  buttonVariant?: 'contained' | 'outlined' | 'text'
}

export default function ShopifyProductCard({
  product,
  handleClick,
  height = 320,
  enableBorder = false,
  enableAddToCart = false,
  enableQuantity = false,
  enableQuickShop = false,
  enableOkendoStarRating = false,
  buttonVariant = 'contained',
  buttonText,
}: ShopifyProductCardProps) {
  const [open, setOpen] = useState(false)
  const { setSearchOpen } = useContext(ShopifyContext) as any

  const handleQuickShop = () => {
    setOpen(true)
  }

  const handleItemClick = () => {
    if (handleClick) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setSearchOpen(false)
      handleClick()
    }
  }

  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded",
      enableBorder && "border border-divider"
    )}>
      <SwipeableShopifyProductImages
        product={product}
        height={height}
        handleClick={handleItemClick}
        disableBorderRadius={enableBorder}
      />
      <div className="p-4 pt-0 space-y-4">
        <div className={cn(
          "flex flex-col py-1",
        )}>
          <Typography color="text.primary" variant="subtitle2">
            {truncate(product?.title)}
          </Typography>
          {enableOkendoStarRating && <OkendoStarRating product={product} />}
          <Typography color="text.secondary" variant="body2">
            {formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
          </Typography>
        </div>
        <div className="flex flex-col space-y-2">
          {enableAddToCart && (
            <ShopifyAddToCartButton
              product={product}
              variant={product?.variants?.edges[0]?.node}
              label={buttonText}
              enableQuantity={enableQuantity}
              buttonVariant={buttonVariant}
              size="small"
              enableFavorites
            />
          )}
          {enableQuickShop && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleQuickShop}
              className="w-full"
            >
              Quick Shop
            </Button>
          )}
        </div>
      </div>
      <ShopifyProductModal
        open={open}
        handleClose={() => setOpen(false)}
        shopifyProduct={product}
        enableQuantity={enableQuantity}
        buttonText={buttonText}
      />
    </div>
  )
}