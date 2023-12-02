import {
  Box,
  Flex,
  Image,
  Center,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { postData } from "../../Redux/products/Prodaction";
import { useDispatch } from "react-redux";





export const AddContact = ({ToggleContact}) => {


    const dispatch = useDispatch()
    const [first, setFirst]  = useState("")
    const [last, setLast]  = useState("")
    const [number, setNumber]  = useState("")
    const [company, setCompany]  = useState("")

    const [Bool, setBool] = useState(true)


    useEffect(() => {
        if(first && last && company  !== "" && number.length >= 10){
            setBool(false)
        }
    }, [first, last, number, company])


    const Post = () => {
        let data = {
            firstName:first,
            lastName:last,
            company,
            number
        }

        dispatch(postData(data))
        ToggleContact()
    }




  return (
    <Box mt="1rem" display={"grid"} gap="20px">
      <Flex justifyContent={"space-around"}>
        <Button onClick={ToggleContact} bg="none" color="blue.400">Cancel</Button>
        <Button bg="none" color="black">New Contact</Button>
        <Button onClick={Post} bg="none" isDisabled={Bool}>Done</Button>
      </Flex>
      <Center mt="25px">
        <Image
          borderRadius={"50%"}
          src={
            "data:image/png;base64,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"
          }
          alt="dp"
        />
      </Center>{" "}
      <Center>
        {" "}
        {/* <Text color="blue">Add Photo</Text> */}
      </Center>
     

     <Box display={"grid"} gap={"20px"}>
        <Input value={first} onChange={(e)=>setFirst(e.target.value)} placeholder="first name" size="md" />
        <Input value={last} onChange={(e)=>setLast(e.target.value)} placeholder="last name" size="md" />
        <Input value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="company" size="md" />
     
        <InputGroup>
          <InputLeftAddon children="+91" />
          <Input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder="phone number" />
        </InputGroup>
     </Box>
    </Box>
  );
};
