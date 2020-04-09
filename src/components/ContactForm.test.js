import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Form is visible', () => {
    render(<ContactForm />);
});

test('Inputs are visible', () => {
    const {getByLabelText} = render(<ContactForm/>);

    const firstNameInput = getByLabelText(/first name/i);
    expect(firstNameInput).toBeVisible();

    const lastNameInput = getByLabelText(/last name/i);
    expect(lastNameInput).toBeVisible();

    const emailInput = getByLabelText(/email/i);
    expect(emailInput).toBeVisible();

    const messageInput = getByLabelText(/message/i);
    expect(messageInput).toBeVisible();
});

test('Form will submit', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target: { vaule: 'Carlos'}});
    fireEvent.change(lastNameInput, { target: { name:'lastName', vaule: 'Abreu'}});
    fireEvent.change(emailInput, { target: { name:'email', vaule: 'wowow@gmail.com'}});
    fireEvent.change(messageInput, { target: { name:'message', vaule: 'I think I maybe onto something'}});

    // expect(firstNameInput.value).toBe('Carlos');
    // expect(lastNameInput.value).toBe('Abreu');
    // expect(emailInput.value).toBe('wowow@gmail.com');
    // expect(messageInput.value).toBe('I think I maybe onto something');
    
    const submitButton = getByTestId(/submit/i);
    fireEvent.click(getByTestId(/submit/i));

    // const formText = getByTestId('Carlos');
    // expect(formText).toBeInTheDocument();

});