import React from 'react'
import { Game } from '@/hooks/useGame'
import { Image, Card, CardBody, Heading} from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
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
            <PlatformIconsList platform={game.parent_platforms.map(p=>p.platform)}/>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard