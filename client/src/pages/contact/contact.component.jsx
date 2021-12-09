import React from 'react';
import { ContactPageContainer, ContactImage, ContactInfo } from './contact.styles';

const ContactPage = () => (
    <ContactPageContainer>
        <ContactImage/>
        <ContactInfo>
            <h1>CONTACT INFO</h1>
            <span>Portfolio Website: </span>
            <span>LinkedIn: </span>
            <span>[Email-InputBox Placeholder]</span>
        </ContactInfo>
    </ContactPageContainer>
);

export default ContactPage;