"use client";
export const runtime = "edge";
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { contactsData } from "@/constants";
import { PhoneIcon, VolumeUpIcon, VolumeOffIcon, XIcon, MicrophoneIcon } from '@heroicons/react/outline';
import Image from "next/image";

const ConnectDictation = () => {
  const { id } = useParams();
  const router = useRouter();
  const [contact, setContact] = useState<any | null>(null);
  const [muted, setMuted] = useState(false);
  const [speaker, setSpeaker] = useState(false);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    const foundContact = contactsData.find((c) => c.id === id);
    setContact(foundContact || null);

    SpeechRecognition.startListening({ continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, [id]);

  const toggleMute = () => {
    setMuted(!muted);
    if (muted) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  const toggleSpeaker = () => {
    setSpeaker(!speaker);
  };

  const endCall = () => {
    SpeechRecognition.stopListening();
    router.back();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!contact) {
    return <div>No contact information available</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      {/* Phone Mockup Frame */}
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard phone-1">
            {/* Inside Phone */}
            <div className="flex flex-col justify-between h-full p-4">
              {/* Contact Name and Call Type */}
              <div className="text-center py-4">
                <h1 className="text-2xl font-bold mb-2 text-gray-200">{contact.name}</h1>
                <p className="text-lg text-gray-500">{contact.callType === "AI" ? "AI Call" : "Voice Call"}</p>
              </div>

              {/* Contact Image */}
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full relative border-4 border-gray-500 overflow-hidden">
                  <Image
                    src={contact.image}
                    alt={contact.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex justify-center items-center space-x-8 py-8">
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className={`btn btn-circle ${muted ? "btn-error" : "btn-primary"}`}
                >
                  <MicrophoneIcon className="h-6 w-6" />
                </button>

                {/* End Call Button */}
                <button
                  onClick={endCall}
                  className="btn btn-circle btn-error bg-red-500 hover:bg-red-600 text-white"
                >
                  <XIcon className="h-8 w-8" />
                </button>

                {/* Speaker Button */}
                <button
                  onClick={toggleSpeaker}
                  className={`btn btn-circle ${speaker ? "btn-accent" : "btn-primary"}`}
                >
                  {speaker ? (
                    <VolumeUpIcon className="h-6 w-6" />
                  ) : (
                    <VolumeOffIcon className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Transcript */}
              <div className="px-4 py-2 text-center">
                <p className="text-lg text-gray-600">{transcript || "Listening..."}</p>
              </div>

              {/* AI Notice */}
              {contact.callType === "AI" && (
                <div className="text-center py-2">
                  <p className="text-sm text-red-500">This is an AI-generated call. The real person is not involved.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDictation;