import React from 'react';

interface CardProps {
  contacts: contacts
}

const ContactsCard: React.FC<CardProps> = ({ contacts }: CardProps) => {


  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img 
          src={contacts.image} 
          alt="contact" 
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