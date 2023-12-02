import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { davatar } from "davatar";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { DeleteProduct, GetProduct } from "../../Redux/products/Prodaction";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ListContact = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.prodManager);
  const toast = useToast();
  const navigate = useNavigate()

  const Delete = (data) => {
    dispatch(DeleteProduct(data));
    toast({
      title: "contact is deleted",
      position: "top",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };


  const HandelNavigate = (ele) =>{
    navigate("/edit")
    localStorage.setItem("phonebookEdit", JSON.stringify(ele))
  }
  
  useEffect(() => {
    dispatch(GetProduct());
  }, []);

  return (
    <Box>
      <Flex borderBottom={"1px solid gray"}>
        <Text pb="10px">Name</Text>
        <Spacer />
        <Text display={["none", "none", "flex"]}>Number</Text>
        <Spacer />
      </Flex>

      <Flex>
        <Text>contact ({data.length})</Text>
      </Flex>

      <Box>
        {data &&
          data[0] &&
          data.map((ele) => {
            const imageDataUrl = davatar.generate({
              size: 50,
              text: `${ele.firstName} ${ele.lastName}`,
              backgroundColor: "cyan",
            });

            return (
              <Flex p="25px" key={ele["_id"]} justifyContent={"space-between"}>
                <Flex>
                  <Image
                    mr="30px"
                    borderRadius={"50%"}
                    src={imageDataUrl}
                    alt={"dp"}
                  />
                  <Text>
                    {ele.firstName} {ele.lastName}
                  </Text>
                </Flex>

                <Text pr="30px" display={["none", "none", "flex"]}>
                  {ele.number}
                </Text>

                <Flex gap="25px">
                  <Text onClick={()=>HandelNavigate(ele)}>
                    <EditIcon />
                  </Text>

                  <Text onClick={() => Delete(ele)}>
                    <DeleteIcon />
                  </Text>
                </Flex>
              </Flex>
            );
          })}
      </Box>
    </Box>
  );
};
