import React, { useState } from 'react'
import './MiniChat.css'

export default function MiniChat() {

  const [messages, setMessages] = useState("");

  const [totalMessages, setTotalMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTotalMessages(prev => ([
      ...prev,
      messages
    ]));
    setMessages("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='chatForm'>
        <label htmlFor="message">Enter Message : </label>
        <input
          name="message"
          id="message"
          value={messages}
          onChange={(event) => setMessages(event.target.value)}
          placeholder='Enter the message'
        />

        <button disabled={messages.trim().length === 0} className='messageButton' type='submit'>Send Message</button>
      </form>

      {totalMessages.length > 0 &&
        <div className='sendMessages'>
          {totalMessages.map((msg, index) => {
            return (
              <p key={index} className='message'>{msg}</p>
            )
          })}
        </div>
      }
    </div>
  )
}
