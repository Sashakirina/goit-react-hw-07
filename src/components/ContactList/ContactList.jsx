import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

function ContactList() {
	const visibleContacts = useSelector(selectFilteredContacts);

	return (
		<ul className={style.phonebookContainer}>
			{visibleContacts.map(({ id, name, number }) => (
				<Contact key={id} name={name} number={number} id={id} />
			))}
		</ul>
	);
}

export default ContactList;
