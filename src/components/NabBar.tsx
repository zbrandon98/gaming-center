import { HStack, Image} from "@chakra-ui/react"
import wsLogo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"


const NabBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={wsLogo} alt="Logo of websit" boxSize="60px"/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NabBar