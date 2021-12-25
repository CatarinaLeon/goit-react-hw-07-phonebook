import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onClick }) => {
  const handleDeleteBtn = (event) => {
    const { name } = event.target;
    onClick(name);
  };
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}> {name} :</p>
          <p className={s.text}> {number} </p>

          <button
            type="button"
            name={id}
            onClick={handleDeleteBtn}
            className={s.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
