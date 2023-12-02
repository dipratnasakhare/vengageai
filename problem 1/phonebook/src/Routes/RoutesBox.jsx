import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { ContactBox } from "../component/ContactBox/ContactBox";
import { ListContact } from "../component/ListContact/ListContact";
import { AddContact } from "../component/AddContact/AddContact";
import { EditBox } from "../component/EditBox/EditBox";
export const RoutesBox = () => {
  const [addContact, setAddContact] = useState(true);

  const ToggleContact = () => {
    setAddContact(!addContact);
  };

  return (
    <div>
      <Routes>
        <Route path="/edit" element={<EditBox />} />
        <Route
          path="/"
          element={
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
          }
        ></Route>
      </Routes>
    </div>
  );
};
