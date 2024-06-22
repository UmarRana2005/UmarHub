import { GameQuery } from '@/app/page'
import { Heading } from '@chakra-ui/react'
import React from 'react'
interface Props{
    gameQuery:GameQuery,
}
const GameHeading = ({gameQuery}:Props) => {
   const TextHeading =` ${gameQuery.platform?.name || ''} ${gameQuery.gener?.name || ''} Games`
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'>{TextHeading}</Heading>
  )
}

export default GameHeading