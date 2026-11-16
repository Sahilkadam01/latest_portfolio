
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaTrashAlt,
  FaRegCommentDots,
  FaArrowDown,
} from "react-icons/fa";

import ChatMessage from "./ChatMessage";
import "./Chatbot.css";

const API_URL = (
  import.meta.env.VITE_CHATBOT_API_URL ||
  "https://latest-portfolio-ltpq.onrender.com/"
).replace(/\/+$/, "");

const suggestions = [
  "Tell me about Sahil",
  "What are his technical skills?",
  "Tell me about his MediaTek experience",
  "Show me his projects",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const sendMessage = async (text = input) => {
    const question = text.trim();

    if (!question || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Something went wrong."
        );
      }

      if (!data.reply) {
        throw new Error("The AI returned an empty response.");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      setError(
        err.message || "Unable to connect to the chatbot."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const clearChat = () => {
    setMessages([]);
    setError("");
    setInput("");
  };

  return (
    <div className="portfolio-chatbot">

      {/* Floating Button */}

      <motion.button
        className="chat-launcher"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <FaRegCommentDots />
            </motion.span>
          )}
        </AnimatePresence>

        {!isOpen && <span className="launcher-dot" />}
      </motion.button>

      {/* Chat Window */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >

            {/* Header */}

            <div className="chat-header">

              <div className="chat-header-info">

                <div className="chat-header-avatar">
                  <FaRobot />
                  <span />
                </div>

                <div>
                  <h3>Portfolio AI</h3>

                  <p>
                    <span className="online-indicator" />
                    AI Assistant
                  </p>
                </div>

              </div>

              <div className="chat-header-actions">

                <button
                  onClick={clearChat}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                >
                  <FaTrashAlt />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chatbot"
                  aria-label="Close chatbot"
                >
                  <FaTimes />
                </button>

              </div>

            </div>

            {/* Chat Body */}

            <div className="chat-body">

              {messages.length === 0 ? (

                <div className="chat-welcome">

                  <motion.div
                    className="welcome-icon"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <FaRobot />
                  </motion.div>

                  <h2>
                    Hey there! <span>👋</span>
                  </h2>

                  <h3>
                    I'm Sahil's AI Assistant.
                  </h3>

                  <p>
                    Curious about Sahil's experience,
                    skills, or projects? Ask me anything
                    about his professional journey.
                  </p>

                  <div className="suggestion-heading">
                    TRY ASKING
                  </div>

                  <div className="suggestion-list">

                    {suggestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => sendMessage(question)}
                        disabled={isLoading}
                      >
                        {question}
                        <span>↗</span>
                      </motion.button>
                    ))}

                  </div>

                </div>

              ) : (

                <div className="chat-messages">

                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                    />
                  ))}

                  {isLoading && (
                    <div className="typing-indicator">
                      <div className="typing-avatar">
                        <FaRobot />
                      </div>

                      <div className="typing-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="chat-error">
                      {error}
                    </div>
                  )}

                  <div ref={messagesEndRef} />

                </div>

              )}

            </div>

            {/* Input Area */}

            <div className="chat-footer">

              <form
                className="chat-input-area"
                onSubmit={handleSubmit}
              >

                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  maxLength={1000}
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                >
                  <FaPaperPlane />
                </button>

              </form>

              <p className="chat-disclaimer">
                Powered by Gemini AI · Portfolio Assistant
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
