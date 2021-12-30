import React, { useEffect } from "react";
import { useRef } from "react";

function TextComponent(props) {
  const TextRef = useRef(null);
  useEffect(() => {
    console.log(TextRef.current.attributes.name.nodeValue);
  }, []);
  return <input ref={TextRef} type="text" name={props.name} />;
}

export default TextComponent;
