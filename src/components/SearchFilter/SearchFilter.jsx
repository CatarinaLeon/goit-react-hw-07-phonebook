import PropTypes from "prop-types";
import s from "./SearchFilter.module.css";

const Filter = ({ filter, onChange }) => (
  <div className={s.filterSearch}>
    <label className={s.filter}>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        className={s.input}
      />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
