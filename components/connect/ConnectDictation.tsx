"use client";
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useEffect} from "react";
import { useRouter } from 'next/navigation'

const ConnectDictation = () => {
    const router = useRouter()
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true });
    }, []);

    const endCall = () => {
        SpeechRecognition.stopListening();
        router.back()
    }

    return (
        <div className="min-h-screen flex flex-col justify-around justify-items-center">
            <p className="">{transcript}</p>
            <button className="btn" onClick={endCall}>Stop</button>
        </div>
    );
};

export default ConnectDictation;