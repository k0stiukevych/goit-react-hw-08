import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.box}>
      <div className={css.boxText}>
        <p className={css.text}>
          <IoIosContact className={css.contactIcon} />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneForwardFill className={css.contactIconPhone} />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
