import React, { useEffect, useState } from 'react';
import './Contact.css'
import ContactList from './contact-list/ContactList';
import { Users } from '../../static-data/users';
import { Contact } from './Contact';
import ContactListItem from './contact-list/ContactListItem';

interface ContactListType extends Contact {
    selected: boolean
}

interface ContactContainerProps {
    username: string,
    handleSelect: Function
}

const ContactContainer: React.FC<ContactContainerProps> = ({username, handleSelect}) => {
    const [contacts, setContacts] = useState<ContactListType[]>([]);

    function onSelect(index: number) {
        var tempContacts = contacts;
        setContacts([]);
        // tempContacts[index].selected = !tempContacts[index].selected;
        tempContacts.map((contact, i) => {
            setContacts(prevState => [
                ...prevState,
                {
                    ...contact,
                    selected: index == i ? true : false
                }
            ])
        })
        handleSelect(contacts[index].email);
    }

    useEffect(() => {
        setContacts([]);
        var users = Users.filter(user => user.email != username);
        users.map((user, index) => {
            setContacts(prevState => [
                ...prevState,
                {
                    name: user.name, 
                    email: user.email, 
                    selected: index == 0 ? true : false
                }
            ])
        })
        handleSelect(users[0].email);
    }, [])

    return (
        <div>
            <div className='contact-header'>Contacts</div>
            {contacts.map((contact: ContactListType, index: number) => {
                return <div key={index} style={{top: '2rem', position: 'relative'}}><ContactListItem key={index} name={contact.name} email={contact.email}
                    handleSelect={() => onSelect(index)} selected={contact.selected}/></div>
            })}
        </div>
    )
}

export default ContactContainer;