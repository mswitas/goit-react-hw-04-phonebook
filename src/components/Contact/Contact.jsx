import PropTypes from "prop-types";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number, onClick }) => (
    <li className={css.item}>{name}: {number} <button type="button" id={id} onClick={onClick}>Delete</button></li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}
