import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import style from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOP";

const validationSchema = Yup.object().shape({
	name: Yup.string("")
		.min(3, "Need to be min 3 symbols!")
		.max(50, "Need to be max 50 symbols!")
		.required("This field is required!"),
	number: Yup.string("")
		.min(3, "Need to be min 3 symbols!")
		.max(50, "Need to be max 50 symbols!")
		.required("This field is required!"),
});

function ContactForm() {
	const dispatch = useDispatch();
	const nameId = useId();
	const phoneId = useId();

	const initialValues = {
		name: "",
		number: "",
	};

	const handleSubmit = (value, action) => {
		dispatch(addContact({ name: value.name, number: value.number }));
		action.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}>
			<Form className={style.form}>
				<label htmlFor={nameId}>Name</label>
				<Field
					type="text"
					name="name"
					id={nameId}
					required
					className={style.input}
				/>
				<ErrorMessage
					name="name"
					component="span"
					className={style.inputError}
				/>
				<label htmlFor={phoneId}>Phone</label>
				<Field
					type="tel"
					name="number"
					id={phoneId}
					required
					className={style.input}
				/>
				<ErrorMessage
					name="number"
					component="span"
					className={style.inputError}
				/>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
}

export default ContactForm;
