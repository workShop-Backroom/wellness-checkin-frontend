import React from 'react';

interface CardProps {
  contacts: contacts
}

const ContactsCard: React.FC<CardProps> = ({ contacts }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden"> 
      <figure className="p-4">
        <img 
          src={contacts.image} 
          alt={contacts.name} 
          className="w-full h-48 object-cover md:h-56 lg:h-64 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{contacts.name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Call</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;