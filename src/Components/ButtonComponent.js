import React, { useEffect } from "react";
import { useRef } from "react";

function ButtonComponent(props) {
  const ButtonRef = useRef(null);
  let store = props.store;
  useEffect(() => {
    console.log(ButtonRef);
    if (
      !store.hasOwnProperty(`${ButtonRef.current.attributes.name.nodeValue}`)
    ) {
      store[
        ButtonRef.current.attributes.name.nodeValue
      ] = `${ButtonRef.current.attributes.name.nodeValue}`;
      console.log(store);
    }
  }, []);
  return (
    <div>
      <button ref={ButtonRef} type="submit" name={props.name} id={props.name}>
        Submit
      </button>
    </div>
  );
}

export default ButtonComponent;
