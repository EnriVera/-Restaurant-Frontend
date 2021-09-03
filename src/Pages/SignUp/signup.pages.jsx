import React from "react";
import {
  Section,
  Article,
  Form,
  DivFirstLast,
  DivSession,
  ErrorInput,
} from "./style/signup.style";
import InputT from "../../Components/Input/input.components";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/button.components";
import SvgArrowRight from "/public/arrow-right.icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddNotification } from "../../../reducers/message/message.reducers";
import Toast from "../../Components/Message/message.components";
function SignUp() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if(data.password === data.confirmPassword) {
      dispatch(
        AddNotification({
          type: "SUCCESS",
          title: "SignUp susseful",
        })
      );
    }
    else {
      dispatch(
        AddNotification({
          type: "DANGER",
          title: "Password not valid",
        })
      );
    }
  };
  return (
    <>
      <Section>
        <Article>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DivFirstLast>
              <div div style={{ margin: ".1rem .5rem 0 0" }}>
                <InputT
                  text={"FirstName"}
                  infoInput={{
                    type: "text",
                    name: "firstName",
                    ref: register("firstName", {
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
                {errors.firstName && (
                  <ErrorInput>{errors.firstName.message}</ErrorInput>
                )}
              </div>
              <div style={{ margin: ".1rem 0 0 .5rem" }}>
                <InputT
                  infoInput={{
                    type: "text",
                    name: "lastName",
                    ref: register("lastName", {
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
                {errors.lastName && (
                  <ErrorInput>{errors.lastName.message}</ErrorInput>
                )}
              </div>
            </DivFirstLast>
            <InputT
              infoInput={{
                type: "email",
                name: "",
                ref: register("emailAddress", {
                  required: {
                    value: true,
                    message: "Email es requerido",
                  },
                  pattern: {
                    value:
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    message: "Email not valid",
                  },
                }),
              }}
              text={"Email Address"}
            />
            {errors.emailAddress && (
              <ErrorInput>{errors.emailAddress.message}</ErrorInput>
            )}
            <InputT
              infoInput={{
                type: "password",
                name: "password",
                ref: register("password", {
                  required: {
                    value: true,
                    message: "Password es requerido",
                  },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=-_]).{8,20}$/,
                    message: `Password not valid: It must contain 8 - 20 characters, 1 uppercase letter and a special sign`,
                  },
                }),
              }}
              text={"Password"}
            />
            {errors.password && (
              <ErrorInput>{errors.password.message}</ErrorInput>
            )}
            <InputT
              infoInput={{
                type: "password",
                name: "confirmPassword",
                ref: register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Password es requerido",
                  },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=-_]).{8,20}$/,
                  },
                }),
              }}
              text={"Confirm Password"}
            />
            <DivSession>
              <p>
                You have to session? <Link to="/signin">Sign In</Link>
              </p>
            </DivSession>
            <Button type="submit">
              <p>Sign Up</p> <SvgArrowRight />{" "}
            </Button>
          </Form>
        </Article>
      </Section>
      <Toast position="bottom-left" autoDeleteInterval={4000} />
    </>
  );
}

export default SignUp;
