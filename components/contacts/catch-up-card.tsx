import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CatchUpCardProps {
  contact: {
    id: string;
    name: string;
    image: string;
    lastCall: string;
    callType: string;
  };
}

const CatchUpCard: React.FC<CatchUpCardProps> = ({ contact }) => {
  const daysSinceLastCall = Math.ceil((new Date().getTime() - new Date(contact.lastCall).getTime()) / (1000 * 3600 * 24));
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/contacts/${contact.id}`); 
  };
  return (
    <div onClick={handleCardClick} className="card flex-row items-center bg-base-100 shadow-xl p-4 cursor-pointer">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <Image src={contact.image} alt={contact.name} width={96} height={96} />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <h2 className="card-title">{contact.name}</h2>
        <p>{daysSinceLastCall} days since last call</p>
        <label className="label">
          <span className="label-text">Call Type: {contact.callType}</span>
        </label>
      </div>
    </div>
  );
}

export default CatchUpCard;