import React from 'react';
import Image from 'next/image';

interface ContactCardProps {
  contact: {
    id: string;
    name: string;
    image: string;
    lastCall: string;
    callType: string;
  };
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const badgeClass = contact.callType === 'AI' ? 'badge badge-accent' : 'badge badge-primary';

  return (
    <div className="flex items-center bg-base-100 shadow-md p-2 my-1 rounded-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0">
        <Image 
          src={contact.image} 
          alt={contact.name} 
          width={64} 
          height={64} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{contact.name}</h2>
        <p className="text-sm">Last call: {formatDate(contact.lastCall)}</p>
        <div className={badgeClass}>{contact.callType}</div>
      </div>
    </div>
  );
}

export default ContactCard;