import React from "react";
import TextComponent from "../Components/TextComponent";
import PasswordComponent from "../Components/PasswordComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { Box } from "@material-ui/core";

function Home({ store }) {
  return (
    <div>
      <form>
        <Box>Home Text</Box>
        <TextComponent name="Home_text" store={store} />
        <Box>Password</Box>
        <PasswordComponent name="Home_password" store={store} />
        <br />
        <ButtonComponent name="Home_Submit" store={store} />
      </form>
    </div>
  );
}

export default Home;
