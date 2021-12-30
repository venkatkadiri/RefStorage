import React from "react";
import TextComponent from "../Components/TextComponent";
import PasswordComponent from "../Components/PasswordComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { Box } from "@material-ui/core";

function Faq({ store }) {
  return (
    <div>
      <Box>Faq Text</Box>
      <TextComponent name="Faq_text" store={store} />
      <Box>PassWord</Box>
      <PasswordComponent name="Faq_password" store={store} />
      <br></br>
      <ButtonComponent name="Faq_Submit" store={store} />
    </div>
  );
}

export default Faq;
