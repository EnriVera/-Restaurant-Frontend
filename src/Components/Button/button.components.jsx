import React from "react";
import { Buttonn } from "./style/button.style";

function Button({ type, info, children }, props) {
  return (
    <>
        <Buttonn type={type}>{children}</Buttonn>
    </>
  );
}

export default Button;
