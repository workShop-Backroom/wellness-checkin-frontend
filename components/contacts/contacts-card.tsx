import { useRouter } from 'next/navigation';
import React from 'react';

interface CardProps {
  contacts: {
    id: string;
    name: string;
    image: string;
    lastCall: string;
    callType: string;
  }
}

const ContactsCard: React.FC<CardProps> = ({ contacts }) => {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/contacts/${contacts.id}`); 
  };
  return (
    <div onClick={handleCardClick} className="card bg-base-100 shadow-xl rounded-lg overflow-hidden w-80 cursor-pointer"> 
      <div className="relative w-full h-48"> 
        <img 
          src={contacts.image} 
          alt={contacts.name} 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>
      <div className="card-body">
        <h2 className="card-title text-center">{contacts.name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Call</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;