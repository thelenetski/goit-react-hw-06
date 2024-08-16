import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contact}>
      <div className={css.contactData}>
        <div>
          <FaUser />
          <p>{contact.name}</p>
        </div>
        <div>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
