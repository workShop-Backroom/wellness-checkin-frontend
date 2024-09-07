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
      <Navbar/>
      <div className='px-8'>
        <h1>Contacts</h1>
        {contacts.map((contact) => {
          return <ContactsCard key={contact.id} contacts={contact}/>
        })}
        
      </div>
      

    </>
  )
}

export default contacts