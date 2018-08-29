import React from 'react';
import { Link } from 'react-router-dom';
const contacts = [
	  { id: 1, name: 'Jon Snow', email: 'winterishere@jonsnow.com'},
	  { id: 2, name: 'Ygritte', email: 'youknownothing@jonsnow.com'},
	];
class ContactList extends React.Component {
	render() {
		return (
	      <ul>
	      {contacts.map(contact => {
	        return(
	          <li>
	            <Link to={`/contacts/${contact.id}`}>
	              {contact.name} - {contact.email}
	            </Link>
	          </li>
	        );
	      })}
	      </ul>
	    );
	  }
}

export default ContactList;


