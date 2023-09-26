import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames' 
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'



interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card >
        <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
        <CardBody>
            <HStack marginY={1} marginBottom={3} justifyContent='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard