import React from "react";
import TextComponent from "../Components/TextComponent";
import PasswordComponent from "../Components/PasswordComponent";
import ButtonComponent from "../Components/ButtonComponent";

function Contact({ store }) {
  return (
    <div>
      <form>
        <TextComponent name="Contact_text" store={store} />
        <PasswordComponent name="Contact_password" store={store} />
        <ButtonComponent name="Contact_Submit" store={store} />
      </form>
    </div>
  );
}

export default Contact;
