"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import ContactCard from '@/components/contacts/compact-contacts-card'; // Update the import path as needed
import { Contact, contactsData } from '@/constants';

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // Sort contacts alphabetically by name
    const sortedContacts = [...contactsData].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center mb-4">All Contacts</h1>
        <div className="">
          {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactsPage;