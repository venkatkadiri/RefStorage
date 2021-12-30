import React, { useEffect } from "react";
import { useRef } from "react";

function PasswordComponent(props) {
  const passeordRef = useRef(null);
  let store = props.store;
  useEffect(() => {
    console.log(passeordRef.current.attributes.name.nodeValue);

    if (
      !store.hasOwnProperty(`${passeordRef.current.attributes.name.nodeValue}`)
    ) {
      store[
        passeordRef.current.attributes.name.nodeValue
      ] = `${passeordRef.current.attributes.name.nodeValue}`;
      console.log(store);
    }
  }, []);
  return (
    <div>
      <input
        ref={passeordRef}
        type="psssword"
        name={props.name}
        id={props.name}
      />
    </div>
  );
}

export default PasswordComponent;
