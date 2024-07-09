import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectFilter } from "../../redux/filtersSlice";

function ContactList() {
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilter);

	const visibleContacts = () => {
		return contacts.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	return (
		<ul className={style.phonebookContainer}>
			{visibleContacts().map(({ id, name, number }) => (
				<Contact key={id} name={name} number={number} id={id} />
			))}
		</ul>
	);
}

export default ContactList;
