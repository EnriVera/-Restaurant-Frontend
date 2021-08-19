
import React, {useEffect} from "react";
import { Div, InputText, LabelText } from "./style/input.style";

function InputT({text, infoInput, style}) {
  return (
    <>
      <Div props={style}>
        <LabelText>{text}</LabelText>
        <InputText name={infoInput.name} type={infoInput.type} {...infoInput.ref}/>
      </Div>
    </>
  );
}
export default InputT