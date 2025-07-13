import React, { useState } from "react";
import { Contact } from "../Contact";

interface ContactListItemProps {
    name: string;
    email: string;
    selected: boolean;
    handleSelect: Function 
}

const ContactListItem: React.FC<ContactListItemProps> = ({name, email, selected, handleSelect}) => {
    return (
        <div className={`contact-item ${selected && 'selected-item'}`} onClick={() => handleSelect()}>
            <span>{name}</span>
        </div>
    )
}

export default ContactListItem;