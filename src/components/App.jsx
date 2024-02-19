import { useEffect, useState } from "react";
import css from "./App.module.css";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || []);
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { id: nanoid(), name: name, number: number };

    if (includesName(name)) {
      alert(`${name} is alreadry in contacts.`);
    } else {
      setContacts((prev) => [...prev, contact]);
      form.reset();
    }
  }

  const handleFilter = (e) => {
    const filterPhrase = e.currentTarget.value;
    setFilter(filterPhrase);
  }
  
  const includesName = (name) => {
    if (contacts.some(contact => contact.name === name)) {
      return true;
    } else {
      return false;
    }
  }

  const deleteContact = (e) => {
    const id = e.currentTarget.id;
    const newContacts = contacts.filter(contact => contact.id !== id).map(filteredContact => {
      return filteredContact;
    });
    setContacts(newContacts);
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts)); 
  }, [contacts]);
  
  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <div>
        <h2>Contacts</h2>
        <Filter onChange={handleFilter} />
        <ContactList contacts={contacts} filterPhrase={filter} onClick={deleteContact} />
      </div>
    </div>
  );
};
