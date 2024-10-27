import React, { useState, useContext } from 'react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import getResponse from './Airesponse.js';
import Spiner from './Spiner.jsx';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput
} from "@chatscope/chat-ui-kit-react";
import { UserContext } from '../Context/UserContext';
import Logo from './Logo';
import Avatar1 from '../Avatar';

export default function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello my friend",
      sentTime: "just now",
      sender: "AI",
    },
  ]);

  const { isPdfUpload, setIsPdfUpload, PdfData } = useContext(UserContext);
  const [loader, setLoader] = useState(false);

  const handleSend = async (messageText) => {
    const newMessage = {
      message: messageText,
      sentTime: "just now",
      sender: "You",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoader(true); // Set loader to true when sending a message

    // Get the response from AI
    await getResponse(setLoader, setMessages, PdfData, messageText);

    
  };

  return (
    <div style={{ position: "relative", height: "84vh", width: '100%' }}>
      <Logo />
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((msg, index) => (
              <div key={index} className="message-container">
                <Avatar1 url={msg.sender} />
                <Message
                  model={msg}
                  style={{ width: '100%' }}
                  className={msg.sender === 'AI' ? 'float-start st rounded-4' : 'me-5 rounded-5'}
                />
              </div>
            ))}
            {loader && (
              <div className="message-container">
                <Avatar1 url="AI" />
                 <Spiner />
              </div>
            )}
          </MessageList>
          <MessageInput
            placeholder="Type your message here..."
            onSend={handleSend}
            disabled={loader} // Disable input while loading
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
