import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ onChange }) => (
    <div className={css.filter}>
        <label htmlFor="filter">Find contacts by name</label>
        <input type="text" id="filter" name="filter" onChange={onChange} />
    </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
