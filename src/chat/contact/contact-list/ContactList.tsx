import { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";
import { Contact } from "../Contact";
import { Users } from "../../../static-data/users";

interface ContactListType extends Contact {
    selected: boolean
}

interface ContactContainerProps {
    username: string
}

const ContactList: React.FC<ContactContainerProps> = ({username}) => {
    const [contacts, setContacts] = useState<ContactListType[]>([]);

    function handleSelect(index: number) {
        setContacts([]);
        var tempContacts = contacts;
        tempContacts[index].selected = !tempContacts[index].selected;
        tempContacts.map(contact => {
            setContacts(prevState => [
                ...prevState,
                contact
            ])
        })
    }

    useEffect(() => {
        setContacts([]);
        var users = Users.filter(user => user.email != username);
        console.log('users', users, 'username', username);
        users.map(user => {
            setContacts(prevState => [
                ...prevState,
                {
                    name: user.name, 
                    email: user.email, 
                    selected: false
                }
            ])
        })
    }, [])

    return (
        <div style={{top: '2rem', position: 'relative'}}>
            
        </div>
    )
}

export default ContactList;

