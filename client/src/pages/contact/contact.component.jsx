import React from 'react';
import { ContactPageContainer, ContactImage, ContactInfo } from './contact.styles';
import ContactBox from '../../components/email-box/email-box.component';

const ContactPage = ({history}) => (
    <ContactPageContainer>
        <ContactImage/>
        <ContactInfo>
            <ContactBox history={history}/>
        </ContactInfo>
    </ContactPageContainer>
);

export default ContactPage;