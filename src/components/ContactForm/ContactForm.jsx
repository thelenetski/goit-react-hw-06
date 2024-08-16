import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const newContact = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={newContact}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.contactForm}>
          <label htmlFor={nameFieldId}>Name and Surname</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add new contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
