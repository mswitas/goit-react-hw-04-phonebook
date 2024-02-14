import { Contact } from "components/Contact/Contact";
import PropTypes from "prop-types";


export const ContactList = ({ contacts, filterPhrase, onClick }) => (
    <ul>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filterPhrase.toLowerCase())).map(filteredContact => {
            return (
                <Contact key={filteredContact.id} id={filteredContact.id} name={filteredContact.name} number={filteredContact.number} onClick={onClick} />
            );
        })}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filterPhrase: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
