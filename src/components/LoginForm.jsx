import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="retroForm">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Correo electrónico no válido")
            .required("Campo requerido"),
          password: Yup.string().required("Campo requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:3000/api/auth/login", values, {
              withCredentials: true,
            })
            .then(() => {
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        <Form>
          <h2 className="house">HOUSE OF DEV</h2>
          <h2 className="achicarLetra">Tu nueva vivienda esta aqui.</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
              placeholder="EMAIL"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
              placeholder="PASSWORD"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <button type="submit" className="form-control">
            Iniciar sesión
          </button>
        </Form>
      </Formik>
      <br></br>
      <p>No tienes una cuenta?</p>
      <Link to={"/register"}>
        <button type="submit" className="form-control">
          Registrarse
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;
