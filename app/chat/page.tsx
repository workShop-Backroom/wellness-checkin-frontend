"use client"
import generatePrompts from "@/components/utils/OpenAI";
import { useState} from "react";

const Chat = () => {
    const [generatedPrompt, setGeneratedPrompt] = useState<string[]>([]);
    const [userText, setUserText] = useState<string[]>([]);

    const genPrompt = (prompt: string) => {
        generatePrompts(prompt).then(res => {
            console.log(res);
            setGeneratedPrompt(res);
        });
    }

    return (
        <div className="min-h-screen flex flex-col">
            <h1>Chat</h1>
            <button onClick={() => genPrompt('test')}>Generate OpenAI Prompt</button>

            {generatedPrompt.map((msg) => {
                return (
                    <div className="chat chat-start">
                        <div className="chat-bubble">
                            {msg}
                        </div>
                    </div>
                )
            })}

            {userText.map((msg) => {
              return (
                  <div className="chat chat-end">
                      <div className="chat-bubble">{msg}</div>
                  </div>
              )
            })}

            <div>
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                <button className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                    </svg>
                </button>


            </div>
        </div>
    );
};

export default Chat;