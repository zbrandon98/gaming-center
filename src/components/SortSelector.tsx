import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDoubleDown } from "react-icons/bs"


const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
            Sort By: Relavnce
        </MenuButton>
        <MenuList>
            <MenuItem>Relavence</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Data</MenuItem>
            <MenuItem>Average Rating</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector