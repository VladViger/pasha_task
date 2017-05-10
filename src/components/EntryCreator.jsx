import React from 'react';

import ClassCreateEntry from './Class.CreateEntry';
import ValidationHelper from '../helpers/ValidationHelper';

import 'react-datepicker/dist/react-datepicker.css';

class EntryCreator extends ClassCreateEntry {
	handleSubmit(e) {
		e.preventDefault();
		console.log(e.target);
	}
}

export default EntryCreator;