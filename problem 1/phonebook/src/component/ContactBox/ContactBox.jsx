import {
  Box,
  Button,
  Image,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { searchData } from "../../Redux/products/Prodaction";

export const ContactBox = ({ ToggleContact }) => {
  let character = "https://cdn-icons-png.flaticon.com/512/4298/4298256.png";
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const dibouncing = () => {
    dispatch(searchData(text))
  };

  let call = 0;

  const throttle = (func, delay, e) => {
    setText(e.target.value)
    function make() {
      if (Date.now() - call > delay) {
        call = Date.now();
        func.apply();
      }
    }
    make();
  };

  return (
    <Box
      display={"gird"}
      justifyContent={"center"}
      alignContent={"center"}
      textAlign={"left"}
      h="10vh"
      mt="1rem"
    >
      <Flex
        display={"flex"}
        justifyContent={"space-between"}
        verticalAlign={"bottom"}
      >
        <Box display={"flex"}>
          <Text mr="8px" onClick={ToggleContact}>
            Add Contact
          </Text>
        </Box>

        <Box>
          <InputGroup borderRadius={5} size="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.600" />}
            />
            <Input
              onChange={(e) => {
                throttle(dibouncing, 1000, e);
              }}
              value={text}
              type="text"
              placeholder="Search..."
              border="1px solid #949494"
            />
            <InputRightAddon p={0} border="none"></InputRightAddon>
          </InputGroup>
        </Box>

        {/* <Box>
            <InfoIcon />
        </Box>

        <Box>
            <SettingsIcon />
        </Box> */}

        <Box>
          <Image w="30px" src={character} alt="" />
        </Box>
      </Flex>
    </Box>
  );
};
