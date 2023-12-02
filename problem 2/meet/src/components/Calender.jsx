import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const time1 = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "9:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 AM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState(time1);

  const Arr = [
    {
      day: "Monday",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM, 1:00 PM",
    },
    {
      day: "Tuesday",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM,  1:00 PM",
    },
    {
      day: "Wednesday",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM, 1:00 PM, 3:30 PM, 4:00 PM,  4:30 PM",
    },
    {
      day: "Thursday",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM,  1:00 PM",
    },
    {
      day: "Friday",
      startTime: "8 Am",
      endTime: "5 PM",
      range: "12:30 PM,  1:00 PM",
    },
    {
      day: "Saturday",
      startTime: "8 Am",
      endTime: "12 Noon",
      range: "12:30 PM,  1:00 PM",
    },
  ];

  const HandelChange = () => {
    let day = weekday[value.getDay()];

    if (day === "Sunday") {
      let Arr = new Array(9).fill(".......");
      setTime(Arr);
      return;
    } else {
      setTime([...time1]);
    }

    if (day !== "Saturday") {
      setTime([...time1]);
    }

    let obj = {};

    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i].day == day) {
        obj = Arr[i];
        break;
      }
    }

    let ans = [];

    for (let i = 0; i < time1.length; i++) {
      let first = time1[i].split(":");
      let sec = obj.endTime.split(" ");
      ans.push(time1[i]);
      if (first[0] === sec[0]) {
        break;
      }
    }

    let arr = obj.range.split(",");

    for (let i = 0; i < ans.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (ans[i] === arr[j].trim()) {
          ans[i] = ".........";
        }
      }
    }

    console.log(ans, "-", arr);

    setTime(ans);
  };

  useEffect(() => {
    HandelChange();
  }, [value]);

  return (
    <Box mt="25px" display={["grid", "grid", "flex", "flex"]} gap="50px">
      {/* <Center > */}
      <Box pl={["0rem", "0rem", "4rem", "4rem"]}>
        <Center>
          <Calendar pt="0px" onChange={onChange} value={value} />
        </Center>
      </Box>
      {/* </Center> */}

      <Box w={["70%", "70%", "50%"]} m="auto">
        <SimpleGrid columns={[2, 2, 2, 3]} spacing={1}>
          {time.map((ele) => {
            return (
              <Box border={"1px solid"} p="25px">
                {ele}
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
