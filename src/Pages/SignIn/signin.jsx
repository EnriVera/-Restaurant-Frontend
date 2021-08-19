import React from "react";
import { Section, Article, Form, DivFirstLast, DivSession } from "./style/signin.style";
import InputT from "../../Components/Input/input.components";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/button.components";
import ButtonGoogle from "../../Components/ButtonGoogle/buttonGoogle.components";
import SvgArrowRight from '/public/arrow-right.icon'
import SvgGoogle from "../../../public/google.icon";
import { Link } from 'react-router-dom';
import MessageSusse from "../../Components/MessageSusseful/messageSusse.components";
function SignIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const fff = () => {
    const d = new MessageSusse()

  }
  return (
    <>
      <Section>
        <Article>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DivFirstLast>
              <InputT
                style={".5rem .5rem .5rem 0"}
                text={"FirstName"}
                infoInput={{
                  type: "text",
                  name: "first-name",
                  ref: register("first-name", {
                    required: {
                      value: true,
                      message: "FirstName es requerido",
                    },
                    maxLength: {
                      value: 10,
                      message: "No más de 10 carácteres!",
                    },
                  }),
                }}
              />
              <InputT
                style={".5rem 0 .5rem .5rem"}
                infoInput={{
                  type: "text",
                  name: "last-name",
                  ref: register("last-name", {
                    required: {
                      value: true,
                      message: "LastName es requerido",
                    },
                    maxLength: {
                      value: 10,
                      message: "No más de 5 carácteres!",
                    },
                  }),
                }}
                text={"LastName"}
              />
            </DivFirstLast>
            <InputT
              infoInput={{
                type: "email",
                name: "email-address",
                ref: register("email-address", {
                  required: {
                    value: true,
                    message: "Email es requerido",
                  },
                  // pattern:  /[A-Za-z]{3}/
                }),
              }}
              text={"Email Address"}
            />
            <InputT
              infoInput={{
                type: "password",
                name: "password",
                ref: register("password", {
                  required: {
                    value: true,
                    message: "Password es requerido",
                  },
                  // pattern:  /[A-Za-z]{3}/
                }),
              }}
              text={"Password"}
            />
            <DivSession>
              <p>Not you have to session? <Link to="/signup">Sign Up</Link> </p>
            </DivSession>
            <Button type="submit"> <p>Sign In</p> <SvgArrowRight />  </Button>
            <ButtonGoogle><SvgGoogle /> <p>Login with google</p></ButtonGoogle>
          </Form>
        </Article>
      </Section>
    </>
  );
}

export default SignIn;