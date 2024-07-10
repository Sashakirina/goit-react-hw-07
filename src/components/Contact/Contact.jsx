import { FaUser, FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

function Contact({ name, number, id }) {
	const dispatch = useDispatch();

	return (
		<li className={style.phonebookEntry}>
			<FaUser className={style.phonebookIcon} />
			<p className={style.phonebookItem}>{name}</p>
			<br />
			<FaPhoneAlt className={style.phonebookIcon} />
			<p className={style.phonebookItem}>{number}</p>
			<button
				className={style.phonebookDelete}
				onClick={() => dispatch(deleteContact(id))}>
				Delete
			</button>
		</li>
	);
}

export default Contact;
