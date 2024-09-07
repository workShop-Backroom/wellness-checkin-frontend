"use client"
import ContactsCard from '@/components/contacts/contacts-card'
import Navbar from '@/components/ui/navbar'
import React, { useState } from 'react'
const contactsData: contacts[] = [
  {
    id: "1",
    name: 'John Doe',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: "2",
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
]

const contacts = () => {
  const [contacts, setContacts] = useState<contacts[]>(contactsData)
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-6">Contacts</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <ContactsCard key={contact.id} contacts={contact}/>
          ))}
        </section>
      </div>
    </>
  )
}

export default contacts