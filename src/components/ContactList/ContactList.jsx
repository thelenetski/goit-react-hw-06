import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const getVisibleTasks = (contacts, nameFilter) => {
  return (
    contacts.length > 0 &&
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const visibleTasks = getVisibleTasks(contacts, nameFilter);
  return (
    <div className={css.contactList}>
      <ul>
        {visibleTasks.length > 0 &&
          visibleTasks.map((user) => {
            return (
              <li key={user.id}>
                <Contact contact={user} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
