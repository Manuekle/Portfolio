import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormComponent() {
  const [formData, setFormData] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validate={(res) => {
        let error = {};

        // Validacion Nombre
        if (!res.name) {
          error.name = "Please enter a name";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(res.name)) {
          error.name = "Name can only contain letters and space";
        }
        // Validacion Email
        if (!res.email) {
          error.email = "Please enter an email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(res.email)
        ) {
          error.email =
            "The email can only contain letters, numbers, hyphens, points and at sign";
        }
        // Validacion Telefono
        if (!res.phone) {
          error.phone = "Please enter a phone number";
        } else if (!/^[0-9]{10}$/.test(res.phone)) {
          error.phone = "The phone number can only contain 10 numbers";
        }
        // Validacion Mensaje
        if (!res.message) {
          error.message = "Please enter a message";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,200}$/.test(res.message)) {
          error.message = "Message can only contain letters and space";
        }
        return error;
      }}
      onSubmit={(res, { resetForm }) => {
        resetForm();
        setFormData(true);
        setTimeout(() => {
          setFormData(false), 5000;
        });
        return console.log(res);
      }}
    >
      {({ errors }) => (
        <Form className="pt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="NAME"
                className="w-full nes-input tracking-wider bg-transparent is-dark"
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.name}
                  </div>
                )}
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                className="w-full nes-input tracking-wider bg-transparent is-dark"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.email}
                  </div>
                )}
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="number"
                id="phone"
                name="phone"
                placeholder="PHONE"
                className="w-full nes-input tracking-wider bg-transparent is-dark"
              />

              <ErrorMessage
                name="phone"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.phone}
                  </div>
                )}
              />
            </div>
            <div className="col-span-2">
              <Field
                type="text"
                rows="4"
                id="message"
                name="message"
                placeholder="MESSAGE"
                className="w-full nes-input tracking-wider bg-transparent is-dark"
              ></Field>
              <ErrorMessage
                name="message"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.message}
                  </div>
                )}
              />
            </div>
            <div className="col-span-2">            
              <button
                type="submit"
                className="w-full flex justify-center nes-btn is-primary"
              >
                {!formData && (
                  <img src="https://cdn.pixabay.com/photo/2022/06/28/12/27/letter-7289597_960_720.png" className="w-16"/>
                )}
                {formData && (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeMiterlimit="10"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormComponent;
