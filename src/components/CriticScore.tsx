import { Badge } from "@chakra-ui/react"

interface Props {
    score: number,
}

const CriticScore = ({score}:Props) => {

    let color = score > 89 ? 'green' : score > 79 ? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore