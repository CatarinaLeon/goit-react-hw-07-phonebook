import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm/ContactForm.jsx";
import Filter from "../SearchFilter/SearchFilter.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import * as storage from "../../services/localStorage";
import * as actions from "../../redux/contactSlice/contactsSlice";

const App = () => {
  // const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useState([]);

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = storage.get("contacts");
    if (contacts && contacts.length > 0) {
      dispatch(actions.setContacts(contacts));
    }
  }, [dispatch]);

  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  const addNewContact = (name, number) => {
    const contactName = { name, number, id: nanoid() };
    const normalizedName = name.toLowerCase();
    const duplicateName = contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (duplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (name === "") {
      alert("Please type your info in the field. It is empty.");
    } else {
      dispatch(actions.addContacts(contactName));
    }
  };

  // const deleteContact = (id) => {
  //   dispatch(contacts.filter((contact) => contact.id !== id));
  // };
  const deleteContact = (id) => {
    dispatch(actions.deleteContacts(id));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const updateFilter = (event) => {
    dispatch(actions.updateFilter(event.currentTarget.value));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={updateFilter} />
        <ContactList contacts={filterContacts()} onClick={deleteContact} />
      </div>
    </>
  );
};

export default App;
