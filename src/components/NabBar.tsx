import { HStack, Image} from "@chakra-ui/react"
import wsLogo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const NabBar = () => {
  return (
    <HStack padding="10px">
        <Image src={wsLogo} alt="Logo of websit" boxSize="60px"/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NabBar