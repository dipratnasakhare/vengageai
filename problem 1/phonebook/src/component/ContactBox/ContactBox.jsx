import {
  Box,
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
import { AddIcon } from "@chakra-ui/icons";
import { searchData } from "../../Redux/products/Prodaction";
import { useEffect } from "react";

export const ContactBox = ({ ToggleContact }) => {
  let character = "https://cdn-icons-png.flaticon.com/512/4298/4298256.png";
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const dibouncing = () => {
    dispatch(searchData(text))
  };

  let call = 0;

  const throttle = (func, delay) => {
    function make() {
      if (Date.now() - call > delay) {
        call = Date.now();
        func.apply();
      }
    }
    make();
  };


  useEffect(() => {
    throttle(dibouncing, 1000)
  }, [text])

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
        <Flex gap="10px">
          <Image w="40px" src={character} alt="" />
          <Text mt="8px" display={["none", "none", "flex"]}>Phonebook</Text>
        </Flex>

        <Box>
          <InputGroup
            borderRadius={5}
            w={["100px", "150px", "200px"]}
            size="sm"
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.600" />}
            />
            <Input
              onChange={(e) => {
                setText(e.target.value);
                // throttle(dibouncing, 1000);
              }}
              value={text}
              type="text"
              placeholder="Search..."
              border="1px solid #949494"
            />
            <InputRightAddon p={0} border="none"></InputRightAddon>
          </InputGroup>
        </Box>

        <Box
          display={"flex"}
          gap="5px"
          border={"1px solid"}
          borderRadius={"20px"}
          p="5px"
        >
          <AddIcon mt="5px" />
          <Text onClick={ToggleContact}>Create contact</Text>
        </Box>
      </Flex>
    </Box>
  );
};
