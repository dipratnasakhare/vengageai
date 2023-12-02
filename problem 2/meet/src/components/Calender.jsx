import {
  Box,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [bool, setbool] = useState(true);


  const time = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "9:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "9:00",
    "9:30",
  ];

  const Arr = [
    {
        day: "Monday",
        code: "Mon",
        startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM to 1 PM",
    },
    {
      day: "Tuesday",
      code:"Tue",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM to 1 PM",
    },
    {
      day: "Wednesday",
      code:"wed",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM to 1 PM & 3:30 PM to 4:30 PM",
    },
    {
      day: "Thursday",
      code:"Thur",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM to 1 PM",
    },
    {
      day: "Friday",
      code:"Fri",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM to 1 PM",
    },
    {
      day: "Saturday",
      code:"Sat",
      startTime: "8 Am",
      endTime: "12 Noon",
      range: "12:30 PM to 1 PM",
    },
  ];

  useEffect(() => {

    const date = new Date() 

    let obj = {}

    console.log(value)

    for(let i = 0; i < Arr.length; i++){
        // if(Arr.code == )
    }

    // console.log(value, "1")
    // console.log(date, "2")
   
  }, [value])






  return (
    <Box>
      <Center>
        <Calendar onChange={onChange} value={value} />
      </Center>

      {bool && (
        <>
          <SimpleGrid columns={3} spacing={10}>
            {time.map((ele) => {
              return <Box border={'1px solid'} p="25px">{ele}</Box>;
            })}
          </SimpleGrid>
        </>
      )}

      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Day</Th>
                <Th>Start time</Th>
                <Th>End time</Th>
                <Th>Unvailable time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Arr.map((ele) => {
                return (
                  <Tr>
                    <Td>{ele.day}</Td>
                    <Td>{ele.startTime}</Td>
                    <Td>{ele.endTime}</Td>
                    <Td>{ele.range}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
