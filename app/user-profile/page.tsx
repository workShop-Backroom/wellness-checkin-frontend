"use client"
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import Image from 'next/image';

const UserProfile = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (typeof e.target?.result === 'string') {
          setImageSrc(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.start();
      setRecording(true);

      const chunks: BlobPart[] = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const completeBlob = new Blob(chunks, { type: 'audio/mp3' });
        setAudioUrl(URL.createObjectURL(completeBlob));
      };
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10 h-screen">
        <div className="w-full max-w-md p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-center">User Profile</h1>
          <div className="mt-4 mb-2 flex flex-col items-center">
            <div onClick={triggerFileInput} className="cursor-pointer w-48 h-48 bg-gray-200 rounded-lg overflow-hidden relative">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt="User Profile Picture"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <Image
                  src="/assets/upload-image-placeholder.svg"
                  alt="Placeholder Image"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <input type="file" accept="image/*" onChange={handleImageUpload} ref={fileInputRef} className="hidden"/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input type="text" placeholder="Enter your name" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Interest:</span>
            </label>
            <input type="text" placeholder="Enter your interests" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Clone Voice:</span>
            </label>
            {recording ? (
              <button className="btn btn-secondary" onClick={stopRecording}>Stop Recording</button>
            ) : (
              <button className="btn btn-primary" onClick={startRecording}>Record</button>
            )}
            {audioUrl && <audio src={audioUrl} controls />}
          </div>

          <button className="btn btn-success mt-4">Save Profile</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;