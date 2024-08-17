import React from 'react'
import { DataList } from '../..'
import { DataListProps } from './DataList'
import CarouselListItems from './CarouselListItems'

export type CarouselListProps = DataListProps

const CarouselList: React.FC<CarouselListProps> = (props) => {
	return <DataList {...props} list={CarouselListItems} />
}

export default CarouselList
