"use client";

import { useRouter } from 'next/navigation';
import { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';

const ConnectPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    // Define the async function inside useEffect
    const startListening = async () => {
      try {
        await SpeechRecognition.startListening({ continuous: true });
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    };
  
    // Call the async function
    startListening();
  
    // Return a synchronous cleanup function if needed
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const endCall = () => {
    SpeechRecognition.stopListening();
    router.back(); // Return to previous page or navigate as needed
  };

  return (
    <div className="min-h-screen bg-base-100">
      <h1 className="text-2xl font-bold text-center">Call with Contact ID: {params.id}</h1>
      <div className="min-h-screen flex flex-col justify-around justify-items-center">
        <p className="text-xl p-4">{transcript}</p>
        <button className="btn btn-primary" onClick={endCall}>End Call</button>
      </div>
    </div>
  );
};

export default ConnectPage;