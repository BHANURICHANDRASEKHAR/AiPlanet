// InputBar.js
import React, { useState } from 'react';

export default function InputBar({ onSend }) {
  const [messageText, setMessageText] = useState("");
  
  const handleSend = () => {
    if (messageText.trim()) {
      onSend(messageText);
      setMessageText("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload here (e.g., display, send, or store the file)
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="file"
        onChange={handleFileUpload}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type a message"
        style={{ flex: 1 }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
