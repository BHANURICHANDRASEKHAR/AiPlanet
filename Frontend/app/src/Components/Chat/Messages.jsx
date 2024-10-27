import React, { useState } from 'react'

import {
    MessageList,
    Message,
  } from "@chatscope/chat-ui-kit-react";
  
export default function Messages() {
    const [messages, messageList] =useState([
        {
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
          },
    ])
  return (
    <MessageList>

        <ul><li><h1>djhdsajsdajhn</h1></li></ul> 

    
  </MessageList>
  )
}
