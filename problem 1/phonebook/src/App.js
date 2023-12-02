import { Box } from "@chakra-ui/react";
import "./App.css";
import { ContactBox } from "./component/ContactBox/ContactBox";
import { ListContact } from "./component/ListContact/ListContact";
import { AddContact } from "./component/AddContact/AddContact";
import { useState } from "react";

function App() {
  const [addContact, setAddContact] = useState(true);

  const ToggleContact = () => {
    setAddContact(!addContact);
  };

  return (
    <Box w="95%" m="auto" className="App">
      {addContact ? (
        <>
          <ContactBox ToggleContact={ToggleContact} />
          <ListContact />
        </>
      ) : (
        <AddContact ToggleContact={ToggleContact} />
      )}
    </Box>
  );
}

export default App;
