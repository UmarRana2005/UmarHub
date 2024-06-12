import { Game } from '@/hooks/useGame'
import { Image, Card, CardBody, Heading, HStack} from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCropImage from '@/services/image-crop'
interface Props {
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <>
    <Card width='300px' borderRadius={10} overflow='hidden'>
        <Image key={game.id} src={getCropImage(game.background_image)} alt='Game Picture' />
        <CardBody>
            <Heading fontSize='2xl' key={game.id}>{game.name}</Heading>
            <HStack justifyContent='space-between'>
            <PlatformIconsList platform={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore Score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard