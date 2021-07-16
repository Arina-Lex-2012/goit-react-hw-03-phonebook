import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
    
        this.setState({
          [name]: value
        })
    };

    handleSubmit = (event) =>{
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name{' '}       
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required

                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                </label> <br/><br/>
                <label htmlFor={this.numberInputId}> 
                    Number{' '}       
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required

                        value={this.state.number}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                    />
                </label><br/> <br/>
                <button type='submit'>Add contact</button>
            </form>
            )
        }
};

export default ContactForm;