import React from 'react'
import { Game } from '@/hooks/useGame'
import { Image, Card, CardBody, Heading, Box } from '@chakra-ui/react'
interface Props {
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <>
    <Card borderRadius={10} overflow='hidden'>
        <Image key={game.id} src={game.background_image} alt='Game Picture' />
        <CardBody>
            <Heading fontSize='2xl' key={game.id}>{game.name}</Heading>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard