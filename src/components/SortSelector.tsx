import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
interface Props{
    onSelectOrder:(sortOrder:string)=>void,
    selectedOrder:string,
}
const SortSelector = ({onSelectOrder,selectedOrder}:Props) => {
    const sortOrders= [
        {value:'',label:'Relevance'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Released'},
        {value:'-added',label:'Date Added'},
        {value:'created',label:'Created'},
        {value:'-updated',label:'Updated'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average Rating'},
    ]
    const currentOrder = sortOrders.find(order=>order.value === selectedOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Order by: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem key={order.value} value={order.value} onClick={()=>onSelectOrder(order.value)}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
      )
}

export default SortSelector