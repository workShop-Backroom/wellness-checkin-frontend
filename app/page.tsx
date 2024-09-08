
"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import ContactsCard from '@/components/contacts/contacts-card';
import CatchUpCard from '@/components/contacts/catch-up-card'; // Assuming you have this component from the previous instructions
import { Contact, contactsData } from '@/constants';

const Contacts = () => {
  const [closeContacts, setCloseContacts] = useState<Contact[]>([]);
  const [otherContacts, setOtherContacts] = useState<Contact[]>([]);
  const [catchUpContact, setCatchUpContact] = useState<Contact | null>(null);

  useEffect(() => {
    // Filter out close contacts and sort them by last call date
    const filteredCloseContacts = contactsData.filter(contact => contact.close);
    const sortedCloseContacts = filteredCloseContacts.sort((a, b) => new Date(a.lastCall).getTime() - new Date(b.lastCall).getTime());

    // Filter out non-close contacts and sort them by last call date
    const filteredOtherContacts = contactsData.filter(contact => !contact.close);
    const sortedOtherContacts = filteredOtherContacts.sort((a, b) => new Date(a.lastCall).getTime() - new Date(b.lastCall).getTime());

    setCloseContacts(sortedCloseContacts);
    setOtherContacts(sortedOtherContacts);

    // Optionally set the catch up contact from the close contacts list if desired
    setCatchUpContact(sortedCloseContacts[0]);
  }, []);

  return (
    
    <>
      <section className="container mx-auto px-4 mb-10">
        <h1 className="text-3xl font-bold text-center mt-4 mb-6">Close Contacts</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {closeContacts.map(contact => (
            <ContactsCard key={contact.id} contacts={contact}/>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-10">
          <h1 className='text-3xl font-bold text-center mb-6'>Catch Up</h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mb-10">
              {catchUpContact && <CatchUpCard key={catchUpContact.id} contact={catchUpContact} />}
            </div>
          </div>
        </section>
    
    </>
  );
}

export default Contacts;