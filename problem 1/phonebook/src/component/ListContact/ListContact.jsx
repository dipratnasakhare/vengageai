import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { davatar } from "davatar"
import { DeleteIcon } from '@chakra-ui/icons'
import { DeleteProduct, GetProduct } from "../../Redux/products/Prodaction";
import { useDispatch, useSelector } from "react-redux";


export const ListContact = () => {

 const dispatch = useDispatch()
 const { data } = useSelector((store)=>store.prodManager)


 const Delete = (data) => {
  dispatch(DeleteProduct(data))
  dispatch(GetProduct())
}
  useEffect(() => {
   dispatch(GetProduct())
  }, [])

 
  return (
    <Box>
      <Text pb="10px" textAlign={"start"} borderBottom={"1px solid gray"}>
        Name
      </Text>
      <Text mt="10px" textAlign={"start"}>
        contact ({data.length})
      </Text>

      <Box>
        {data && data[0] &&
          data.map((ele) => {

            const imageDataUrl = davatar.generate({
              size: 50,
              text: `${ele.firstName} ${ele.lastName}`,
              backgroundColor: "cyan",
            });

            return (
              <Flex p="25px" key={ele["_id"]}>
                <Image mr="30px" borderRadius={"50%"} src={imageDataUrl} alt={"dp"} />
                <Text>{ele.firstName} {ele.lastName}</Text>
                <Spacer />
                <Text onClick={()=>Delete(ele)}><DeleteIcon /></Text>
              </Flex>
            );
          })}
      </Box>

     

     
    </Box>
  );
};
