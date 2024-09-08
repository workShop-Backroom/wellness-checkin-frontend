"use client";
import { useParams, useRouter } from "next/navigation";
import { contactsData, Contact } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";

const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const router = useRouter();

  useEffect(() => {
    const foundContact = contactsData.find((c) => c.id === id);
    setContact(foundContact || null);
  }, [id]);

  const handleButtonClick = (contactId: string) => {
    router.push(`/connect/${contactId}`); 
  };

  if (!contact) {
    return <div>No contact information available</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="card bg-base-100 shadow-xl p-6 max-w-lg mx-auto">
          {/* Full Image */}
          <div className="w-full h-48 md:h-64 relative mb-6">
            <Image
              src={contact.image}
              alt={contact.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Contact Details */}
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{contact.name}</h1>
            <p className="text-lg mb-2">Call Type: {contact.callType}</p>
            <p className="text-sm text-gray-500 mb-4">
              Last Call: {new Date(contact.lastCall).toLocaleDateString()}
            </p>

            {/* Bio Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Bio</h2>
              <p className="text-gray-700">{contact.bio}</p>
            </div>

            {/* Additional Information - Render only if data is not "N/A" */}
            <div className="flex flex-col items-start mb-6">
              {contact.phone !== "N/A" && (
                <p className="text-lg">
                  <strong>Phone:</strong> {contact.phone}
                </p>
              )}
              {contact.email !== "N/A" && (
                <p className="text-lg">
                  <strong>Email:</strong> {contact.email}
                </p>
              )}
              {contact.address !== "N/A" && (
                <p className="text-lg">
                  <strong>Address:</strong> {contact.address}
                </p>
              )}
            </div>

            {/* Buttons for call and message */}
            <div className="mt-6 space-x-4">
              <button className="btn btn-primary" onClick={() => handleButtonClick(contact.id)}>Call</button>
              <button className="btn btn-secondary">Message</button>
            </div>

            {/* AI Notice */}
            {contact.callType === "AI" && (
              <p className="mt-4 text-sm text-red-500">
                This is an AI-generated clone of the real person.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;