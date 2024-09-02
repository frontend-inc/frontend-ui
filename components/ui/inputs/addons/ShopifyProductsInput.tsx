import React, { useEffect, useState, useContext } from 'react'
import { AutocompleteInput } from '../../..'
import { Image, Placeholder } from '../../..'
import { SyntheticEventType } from '../../../../types'
import { useProducts } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { Box, Collapse, Stack } from '@mui/material'
import { uniq } from 'lodash'


const ShopifyProductImage = (handle) => {

  const { product, findProduct } = useProducts()

  useEffect(() => {
    if(handle){
      findProduct(handle)
    }
  }, [handle])

  if(!product) return null;
  return(
    <Box sx={sx.productCard}>
      <Image
        enableGradient
        disableBorder
        src={product?.images?.edges?.[0]?.node?.url}
        alt={product?.title}
        height={180}
        width={180}
      />
    </Box>
  )
}

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
}

const ShopifyProductsInput: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_handle',
		handleChange,
	} = props

  const [shopifyProducts, setShopifyProducts] = useState([])
	const { domain, storefrontAccessToken } = useContext(ShopifyContext) as any

	const { loading, product, products, setProduct, findProduct, findProducts } =
		useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (newValue) => {
		findProducts(newValue)
		if (newValue == '') {
			setProduct(null)
		}
	}

	useEffect(() => {
		if (products) {
			setOptions(
				products?.map((product) => ({
					label: product.title,
					value: product.handle,
					image: product.images?.edges?.[0]?.node?.url,
				}))
			)
		}
	}, [products])

	useEffect(() => {
		if (value) {
			setShopifyProducts(value || [])
		}
	}, [value])

	const handleAutocompleteChange = (e) => {
		const { value } = e.target
    setShopifyProducts(uniq([
      ...shopifyProducts,
      value
    ]))

		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	useEffect(() => {
		findProducts({
			first: 10,
		})
	}, [])

  const handleDelete = (product) => {
    let filtered = setShopifyProducts(shopifyProducts.filter((p) => p !== product))
    handleChange({
      target: {
        name,
        value: filtered
      }
    })
  }

	if (!domain || !storefrontAccessToken){
    return (
      <Placeholder
        title="Shopify setup required"
        description="Shopify provider is not setup"
      />
    )
  }
	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			<Collapse in={shopifyProducts?.length > 0}>
        <Stack direction="row" spacing={1}>
          { shopifyProducts.map((product) => (
            <ShopifyProductImage
              key={ product}
              product={product}
              handleDelete={() => handleDelete(product)}				
            />
          ))}
        </Stack>
			</Collapse>
			<AutocompleteInput
				name={name}
				label={label}
				value={value}
				options={options}
				handleChange={handleAutocompleteChange}
				handleInputChange={handleInputChange}
				direction={direction}
				placeholder={placeholder}
			/>
		</Stack>
	)
}

export default ShopifyProductsInput

const sx = {
	root: {
		width: '100%',
	},
	productCard: {
		width: 180,
		minHeight: 180,
		borderRadius: 1,
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		p: 0,
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: 2,
		},
	},
	productContent: {
		p: 1,
	},
}
