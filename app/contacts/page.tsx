"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import ContactsCard from '@/components/contacts/contacts-card';
import CatchUpCard from '@/components/contacts/catch-up-card'; // Assuming you have this component from the previous instructions
import { Contact, contactsData } from '@/constants';

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [catchUpContact, setCatchUpContact] = useState<Contact | null>(null);

  useEffect(() => {
    const sortedContacts = [...contactsData].sort((a, b) => {
      return (new Date(b.lastCall).getTime() - new Date(a.lastCall).getTime());
    });
    setContacts(sortedContacts);
    setCatchUpContact(sortedContacts[0]); // Assuming you want the least recently called contact
  }, []);

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4 mb-10">
        <h1 className="text-3xl font-bold text-center mt-4 mb-2">Contacts</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {contacts.map((contact) => (
            <ContactsCard key={contact.id} contacts={contact}/>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-10">
        <h1 className='text-3xl font-bold text-center'>Catch Up</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {catchUpContact && <CatchUpCard key={catchUpContact.id} contact={catchUpContact} />}
        </div>
      </section>
    </>
  );
}

export default Contacts;