import './App.css';
import { Calender } from './components/Calender';
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box w="90%" p="25px" border={"1px solid black"}  m="auto" className="App">
       <Calender />
    </Box>
  );
}

export default App;
