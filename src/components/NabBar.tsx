import { HStack, Image, Text } from "@chakra-ui/react"
import wsLogo from "../assets/logo.webp"

const NabBar = () => {
  return (
    <HStack>
        <Image src={wsLogo} alt="Logo of websit" boxSize="60px"/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NabBar