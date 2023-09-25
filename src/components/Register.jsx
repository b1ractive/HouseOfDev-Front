import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [formularioEnviado, setCambiarFormularioEnviado] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          last_name: "",
          email: "",
          password: "",
          confirmPassword: "",
          telephone: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.name) {
            errores.name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.last_name) {
            errores.last_name = "Por favor ingresa un apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.last_name)) {
            errores.last_name =
              "El apellido solo puede contener letras y espacios";
          }

          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }

          if (!valores.password) {
            errores.password = "Por favor ingresa una contraseña";
          } else if (!/^.{6,12}$/.test(valores.password)) {
            errores.password =
              "La contaseña debe contener al menos 6 caracteres";
          }

          if (!valores.confirmPassword) {
            errores.confirmPassword = "Por favor confirma la contraseña";
          } else if (valores.password !== valores.confirmPassword) {
            errores.confirmPassword = "Las contraseñas no coinciden";
          }

          if (!valores.telephone) {
            errores.telephone = "Por favor ingresa un número de teléfono";
          } else if (!/^\d{7,14}$/.test(valores.telephone)) {
            errores.telephone =
              "El número de teléfono debe contener al menos 7 digitos";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          axios
            .post(
              "http://localhost:3000/api/auth/register",
              {
                name: valores.name,
                last_name: valores.last_name,
                email: valores.email,
                password: valores.password,
                telephone: Number(valores.telephone),
              },
              { withCredentials: true }
            )
            .then(() => {
              navigate("/login");
              setCambiarFormularioEnviado(true);
              setTimeout(() => setCambiarFormularioEnviado(false), 2000);
            });
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div className="container-inputs">
              <div>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre"
                />
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.name}</div>}
                />
              </div>
              <div>
                <label htmlFor="last_name">Apellido</label>
                <Field
                  type="text"
                  name="last_name"
                  placeholder="Ingrese su apellido"
                />
                <ErrorMessage
                  name="last_name"
                  component={() => (
                    <div className="error">{errors.last_name}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
              </div>
              <div>
                <label htmlFor="password">Constraseña</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Ingrese una contraseña"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="confirm_password">Confirmar Constraseña</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Ingrese una contraseña"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component={() => (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="telephone">Telefono</label>
                <Field
                  type="tel"
                  name="telephone"
                  placeholder="Ingrese su número"
                />
                <ErrorMessage
                  name="telephone"
                  component={() => (
                    <div className="error">{errors.telephone}</div>
                  )}
                />
              </div>
              <button type="submit">Enviar</button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
