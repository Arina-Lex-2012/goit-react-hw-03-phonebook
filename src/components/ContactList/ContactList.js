import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <ContactListItem 
                    key = {contact.id}
                    name = {contact.name}
                    number = {contact.number}
                    onDeleteContact = {() => onDeleteContact(contact.id)}
                />  
            ))}
        </ul>
    )
};

export default ContactList;