"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import ContactCard from '@/components/contacts/compact-contacts-card'; 
import { Contact, contactsData } from '@/constants';
import { useRouter } from 'next/navigation';

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const sortedContacts = [...contactsData].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }, []);

  const router = useRouter();

  
  const handleCardClick = (id: string) => {
    router.push(`/contacts/${id}`); 
  };

  return (
    <>
      <div className="container mx-auto px-4 py-4 h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">All Contacts</h1>
        <div className="">
          {contacts.map(contact => (
            <div 
              key={contact.id} 
              onClick={() => handleCardClick(contact.id)} 
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