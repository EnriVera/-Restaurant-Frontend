import React from "react";
import { Button } from "./style/buttonGoogle.style";

function ButtonGoogle({ type, info, children }, props) {
  return (
    <>
        <Button type={type}>{children}</Button>
    </>
  );
}

export default ButtonGoogle;
