// Configuration - Update this with your actual backend URL
const BACKEND_URL = "http://127.0.0.1:8000/chat"; // Change this to your backend endpoint

// DOM Elements
const chatInput = document.getElementById("chatInput");
const sendMessageButton = document.getElementById("sendMessageButton");
const chatDisplay = document.getElementById("chatDisplay");

// Function to add message to chat display
function addMessageToChat(message, isUser = true) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `mb-4 ${isUser ? "text-right" : "text-left"}`;

  const messageBubble = document.createElement("div");
  messageBubble.className = `inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
    isUser
      ? "bg-blue-500 text-white rounded-br-none"
      : "bg-white text-gray-800 rounded-bl-none shadow-md"
  }`;

  messageBubble.textContent = message;
  messageDiv.appendChild(messageBubble);
  chatDisplay.appendChild(messageDiv);

  // Scroll to bottom
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Function to show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.id = "typingIndicator";
  typingDiv.className = "mb-4 text-left";

  const typingBubble = document.createElement("div");
  typingBubble.className =
    "inline-block px-4 py-2 text-gray-600 bg-gray-200 rounded-lg rounded-bl-none";
  typingBubble.innerHTML =
    '<span class="typing-dots">Bot is typing<span>.</span><span>.</span><span>.</span></span>';

  typingDiv.appendChild(typingBubble);
  chatDisplay.appendChild(typingDiv);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Function to remove typing indicator
function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Send message to backend
async function sendMessage(message) {
  try {
    // Add user message to chat
    addMessageToChat(message, true);

    // Clear input field
    if (chatInput) {
      chatInput.value = "";
    }

    // Show typing indicator
    showTypingIndicator();

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: message,
      }),
    });

    // Remove typing indicator
    removeTypingIndicator();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Backend response:", data);

    // Extract bot response and add to chat
    const botResponse =
      data.response ||
      data.answer ||
      data.message ||
      "Sorry, I received an empty response.";
    addMessageToChat(botResponse, false);
  } catch (error) {
    console.error("Error sending message:", error);

    // Remove typing indicator in case of error
    removeTypingIndicator();

    // Show error message to user
    addMessageToChat(
      "Sorry, there was an error processing your message. Please try again.",
      false
    );
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  if (chatDisplay) chatDisplay.innerHTML = "";

  // Welcome message
  addMessageToChat(
    "👋 Welcome to Totot! Ask me anything about our dishes or services.",
    false
  );

  // Send button click
  sendMessageButton?.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
      sendMessage(message);
    }
  });

  // Enter key press
  chatInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const message = chatInput.value.trim();
      if (message) {
        sendMessage(message);
      }
    }
  });

  // Quick question buttons - ONLY targets buttons with class 'chat-question'
  document.querySelectorAll("button.chat-question").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      const question = button.textContent.trim();
      if (question) {
        sendMessage(question);
      }
    });
  });
});

// Typing animation CSS
const style = document.createElement("style");
style.textContent = `
  .typing-dots span {
    animation: typing 1.4s infinite;
  }
  .typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
  }
  .typing-dots span:nth-child(4) {
    animation-delay: 0.6s;
  }
  @keyframes typing {
    0%, 60%, 100% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
