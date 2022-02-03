import "./email-box..styles.css";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import React, { useState } from 'react';

const ContactBox = ({history}) => {
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const {name, email, subject, message} = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/email-confirmation');
  };

  return (
    <div className="email-box-container">
          <div className="email-box-desc">
            <span>Have any questions or concerns?</span> <br/> Our team is ready to help in any way.
          </div>
          <form className="email-box-form" onSubmit={handleSubmit}>
            <FormInput type='text' name='name' value={name} onChange={handleChange} label='Name' required />
            <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
            <FormInput type='text' name='subject' value={subject} onChange={handleChange} label='Subject' required />
            <FormInput type='textarea' name='message' value={message} onChange={handleChange} label='Message' required />
            <CustomButton>Submit</CustomButton>
          </form>
      </div>
  );
};

export default ContactBox;