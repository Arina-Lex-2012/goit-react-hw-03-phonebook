// import PropTypes from "prop-types";
import React from 'react';
import css from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <li key={id} className={css.contactList__item}>
            <p className={css.contactList__text}>{name}: {number}</p>
            <button onClick={onDeleteContact}>Delete</button>
        </li>
    );
  };
  
export default ContactListItem;