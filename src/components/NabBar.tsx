import { HStack, Image} from "@chakra-ui/react"
import wsLogo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void;
}

const NabBar = ({onSearch}: Props) => {
  return (
    <HStack padding="10px">
        <Image src={wsLogo} alt="Logo of websit" boxSize="60px"/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NabBar