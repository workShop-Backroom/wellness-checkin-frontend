"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import ContactCard from '@/components/contacts/compact-contacts-card'; 
import { Contact, contactsData } from '@/constants';
import { useRouter } from 'next/navigation';

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // Sort contacts alphabetically by name
    const sortedContacts = [...contactsData].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }, []);

  const router = useRouter();

  // Move the handleCardClick inside the map for individual contact
  const handleCardClick = (id: string) => {
    router.push(`/contacts/${id}`); // Use the contact's ID to route to its page
  };

  return (
    <>
      <div className="container mx-auto px-4 py-4 h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">All Contacts</h1>
        <div className="">
          {contacts.map(contact => (
            <div 
              key={contact.id} 
              onClick={() => handleCardClick(contact.id)} // Call the click handler with the contact ID
              className="cursor-pointer"
            >
              <ContactCard contact={contact} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactsPage;