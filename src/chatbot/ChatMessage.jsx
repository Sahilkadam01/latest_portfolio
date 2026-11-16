
import { motion } from "framer-motion";
import { FaRobot, FaUser } from "react-icons/fa";

export default function ChatMessage({ message }) {
  const isBot = message.role === "assistant";

  return (
    <motion.div
      className={`chat-message ${isBot ? "bot-message" : "user-message"}`}
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
    >
      <div className={`message-avatar ${isBot ? "bot-avatar" : "user-avatar"}`}>
        {isBot ? <FaRobot /> : <FaUser />}
      </div>

      <div className="message-content">
        <span className="message-sender">
          {isBot ? "Sahil's AI Assistant" : "You"}
        </span>

        <div className="message-text">
          {message.content}
        </div>
      </div>
    </motion.div>
  );
}
