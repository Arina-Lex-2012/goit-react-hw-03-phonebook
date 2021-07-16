import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './components/ContactList/contacts.json';


class App extends React.Component {
  state = {
    contacts: initialContacts,
    filter: ''
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = ({ name, number}) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    }

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())){
      return alert(`${contact.name} is already exist!`);
    } else {      
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts]
      }))
    }
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value})
  }

  render(){
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
      return (
        <div>
          
          <h1>Phonebook</h1>
            <ContactForm 
              onSubmit = {this.formSubmitHandler}
            />

          <h2>Contacts</h2> 
            <Filter 
              value={filter} 
              onChange = {this.changeFilter}
            />
            
            <ContactList 
              contacts = {visibleContacts} 
              onDeleteContact = {this.deleteContact}
            /> 
        </div>
      )    
  }
}

export default App;