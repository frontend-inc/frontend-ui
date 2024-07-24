import React from 'react'
import { List } from '../..'
import { ListProps } from './List'
import CarouselListItems from './CarouselListItems'

export type CarouselListProps = ListProps 

const CarouselList: React.FC<CarouselListProps> = (props) => {

	return (
		<List
      { ...props }
      list={
        CarouselListItems
      }
		/>
	)
}

export default CarouselList
