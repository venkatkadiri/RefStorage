import React from "react";
import TextComponent from "../Components/TextComponent";
import PasswordComponent from "../Components/PasswordComponent";
import ButtonComponent from "../Components/ButtonComponent";

function About({ store }) {
  return (
    <div>
      <form>
        <TextComponent name="About_text" store={store} />
        <PasswordComponent name="About_password" store={store} />
        <ButtonComponent name="About_Submit" store={store} />
      </form>
    </div>
  );
}

export default About;
